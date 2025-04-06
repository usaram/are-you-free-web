<script lang="ts">
	import Layout from "@/routes/(protected)/__layout.svelte";

  export let date = new Date();

  let selecting: boolean = false;
  let startY: number | null = null;
  let currentY: number | null = null;
  let selectedRange: { start: string; end: string } = { start: '', end: '' };
  let containerRef: HTMLElement | null

  const timeSlots = Array.from({ length: 19 }, (_, i) => {
    const hour = (5 + i) % 24;
    return `${hour.toString().padStart(2, '0')}:00`;
  });

	const quarterHourSlots = timeSlots.flatMap((time, index) => {
		const [hour] = time.split(':').map(Number);

		const slots = Array.from({ length: 4 }, (_, i) => {
			const minutes = i * 15;
			return `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
		});

		if (index === timeSlots.length - 1) {
			slots.push("00:00");
		}

		return slots;
	});

  const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()];
  const day = date.getDate();
  const formattedDate = `${dayOfWeek}, ${month} ${day}`;

	function yToTime(minY: number, maxY: number): [string, string] {
		if (!containerRef) return ["00:00", "00:00"];
		const containerRect = containerRef.getBoundingClientRect();
		const containerHeight = containerRect.height;
		const containerTop = containerRect.top;
		const relativityMinY = minY - Math.floor(containerTop);
		const relativityMaxY = maxY - Math.floor(containerTop);

		let slotIndexMinY = Math.floor(relativityMinY / (Math.floor(containerHeight) / (quarterHourSlots.length - 1)));
		let slotIndexMaxY = Math.ceil(relativityMaxY / (Math.floor(containerHeight) / (quarterHourSlots.length - 1)));

		const lastValidIndex = quarterHourSlots.length - 1;

		if (slotIndexMinY === slotIndexMaxY) {
			slotIndexMaxY = Math.min(slotIndexMinY + 1, quarterHourSlots.length - 1);
		}

		if (slotIndexMinY > lastValidIndex) {
			slotIndexMinY = lastValidIndex;
		}
		if (slotIndexMaxY > lastValidIndex) {
			return [quarterHourSlots[lastValidIndex], quarterHourSlots[lastValidIndex]];
		}

		if (slotIndexMinY === slotIndexMaxY) {
			slotIndexMaxY = Math.min(slotIndexMinY + 1, quarterHourSlots.length - 1);
		}

		return [quarterHourSlots[slotIndexMinY], quarterHourSlots[slotIndexMaxY]];
	}

  function handleMouseDown(e) {
    selecting = true;
    const y = e.clientY;
    setStartY(y);
    setCurrentY(y);
  }

  function handleMouseMove(e) {
    if (!selecting) return;
    setCurrentY(e.clientY);
  }

  function handleMouseUp() {
		if (!selecting || startY === null || currentY === null) return;

		selecting = false;

		const threshold = 1; // 5px as an example
		if (Math.abs(currentY - startY) < threshold) {
			startY = null;
			currentY = null;
			return;
		}

		const minY = Math.min(startY, currentY);
		const maxY = Math.max(startY, currentY);

		const [startTime, endTime] = yToTime(minY, maxY);

		selectedRange = {
			start: startTime,
			end: endTime
		};
	}

  function handleMouseLeave() {
    if (selecting) {
      selecting = false;
    }
  }

  function setStartY(y) {
		console.warn('setStartY', y);
		console.warn('containerRef', containerRef);
    if (!containerRef) return;
    const containerRect = containerRef.getBoundingClientRect();
    startY = Math.max(containerRect.top, Math.min(y, containerRect.bottom));
  }

  function setCurrentY(y) {
		console.warn('setCurrentY', y);
		console.warn('containerRef', containerRef);
    if (!containerRef) return;
    const containerRect = containerRef.getBoundingClientRect();
    currentY = Math.max(containerRect.top, Math.min(y, containerRect.bottom));
  }

  $: selectionStyle = (() => {
    if (!selecting || startY === null || currentY === null || !containerRef)
      return { display: 'none' };

    const containerRect = containerRef.getBoundingClientRect();
    const top = Math.min(startY, currentY) - containerRect.top;
    const height = Math.abs(currentY - startY);

    return {
      top: `${top}px`,
      height: `${height}px`
    };
  })();

  $: selectedRangeStyle = (() => {
    if (!selectedRange || !containerRef) return { display: 'none' };

    const containerRect = containerRef.getBoundingClientRect();
    const containerHeight = containerRect.height;

    // Find indices of start and end times
    const startIndex = quarterHourSlots.indexOf(selectedRange.start);
    const endIndex = quarterHourSlots.indexOf(selectedRange.end);

    if (startIndex === -1 || endIndex === -1) return { display: 'none' };

    const slotHeight = Math.floor(containerHeight) / (quarterHourSlots.length - 1);
    const top = startIndex * slotHeight;
    const height = (endIndex - startIndex) * slotHeight;

		return {
      top: `${top}px`,
      height: `${height}px`
    };
  })();
</script>

<Layout>
	<div class="w-full ml-30 lg:max-w-3xl">
		<div class="w-full bg-white shadow-sm overflow-hidden">
			<div class="bg-gray-100 p-3 flex items-center">
				<div class="flex-1 text-center">
					<div class="text-gray-700 font-medium">{formattedDate}</div>
					<div class="text-gray-600 text-sm">00:00:00</div>
				</div>

				<div class="w-16">
				</div>
			</div>

			<div class="flex">
				<div class="w-16 pr-2 pt-9.5">
					{#each timeSlots.slice(1) as time}
						<div class="h-20 flex items-center justify-end">
							<span class="text-sm text-gray-500">{time}</span>
						</div>
					{/each}
				</div>

				<div class="flex-1">
					<div
						bind:this={containerRef}
						class="relative"
						on:mousedown={handleMouseDown}
						on:mousemove={handleMouseMove}
						on:mouseup={handleMouseUp}
						on:mouseleave={handleMouseLeave}
						role="button"
						tabindex="0"
					>
						{#each timeSlots}
							<div class="h-20 border-b border-dotted border-gray-200 relative"></div>
						{/each}

						{#if selecting && startY !== null && currentY !== null}
							<div
								class="absolute left-0 right-0 bg-blue-100 opacity-50 pointer-events-none"
								style="top: {selectionStyle.top}; height: {selectionStyle.height};"
							></div>
						{/if}

						{#if selectedRange && !selecting}
							<div
								class="absolute left-0 right-0 bg-blue-200 opacity-70 pointer-events-none"
								style="top: {selectedRangeStyle.top}; height: {selectedRangeStyle.height};"
							></div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</Layout>
