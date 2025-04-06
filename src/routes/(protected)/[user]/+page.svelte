<script lang='ts'>
	import type { err } from '@/lib/types'
	import type { DayProps } from '@/lib/types/DayProps'
	import { configs } from '@/lib/configs'
	import { stores } from '@/lib/stores'
	import { utils } from '@/lib/utils'
	import Layout from '@/routes/(protected)/__layout.svelte'

	// サーバーサイドでデータを取得する
	export let data: {
		calendar: DayProps[][]
		err:      err
	}

	stores.CalendarStore.set(data.calendar)
	$: calendar = stores.CalendarStore

	// カレンダーの表示月を管理する変数
	// 0: 今月、1: 来月、2: 再来月
	let calendarOffset = 0

	// カレンダーに表示する月名のリストを生成
	const monthNames: string[] = []
	for (let i = 0; i < configs.CalendarDisplayMonths; i++) {
		const monthNameInEnglish = utils.GetMonthNameInEnglish(i)
		monthNames.push(monthNameInEnglish)
	}
</script>

<Layout>
	<div class='w-full m-auto bg-white rounded-xl shadow-lg lg:max-w-3xl'>
		<div class='p-6'>
			<!-- 月の切り替え -->
			<div class='flex justify-between items-center mb-6'>
				<button
					class='p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
					on:click={utils.PrevMonth(calendarOffset)}
					disabled={calendarOffset === 0}
					aria-label='Previous Month'
				>
					<svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
						<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7' />
					</svg>
				</button>

				<h2 class='text-2xl font-bold text-gray-800'>{utils.GetYearMonth(calendarOffset)}</h2>

				<button
					class='p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
					on:click={utils.NextMonth(calendarOffset, configs.CalendarDisplayMonths)}
					disabled={calendarOffset === configs.CalendarDisplayMonths - 1}
					aria-label='Next Month'
				>
					<svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
						<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5l7 7-7 7' />
					</svg>
				</button>
			</div>

			<!-- 月スライダー -->
			<div class='mb-6'>
				<div class='relative pt-1'>
					<input
						type='range'
						min='0'
						max={configs.CalendarDisplayMonths - 1}
						step='1'
						bind:value={calendarOffset}
						class='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500'
					/>
					<div class='flex justify-between text-xs text-gray-600 mt-2'>
						{#each monthNames as name, i}
							<span
								class='inline-block w-1/3'
								class:text-left={i === 0}
								class:text-right={i === monthNames.length - 1}
								class:text-center={i !== 0 && i !== monthNames.length - 1}
							>
								{name}
							</span>
						{/each}
					</div>
				</div>
			</div>

			<!-- カレンダーグリッド -->
			<div class='bg-gray-50 rounded-xl p-4'>
				<div class='grid grid-cols-7 gap-2'>
					<!-- 曜日名 -->
					{#each configs.weekdays as day, i}
						<div class="text-center font-medium text-sm py-2
							{i === 0 ? 'text-red-500' : ''}
							{i === 6 ? 'text-blue-500' : ''}">
							{day}
						</div>
					{/each}

					<!-- カレンダーの日付 -->
					{#each $calendar[calendarOffset] as { day, isCurrentDay, isPastDay, isWeekend, isHoliday }, i}
						<button
							class='relative aspect-square flex flex-col items-center justify-center rounded-lg'
							class:bg-white={!isPastDay && day !== 0}
							class:hover:bg-neutral-200={!isPastDay && day !== 0}
							class:cursor-not-allowed={isPastDay}
							class:shadow-sm={day !== 0}
							class:hover:shadow-lg={!isPastDay && day !== 0}
							class:ring-2={isCurrentDay}
							class:ring-indigo-500={isCurrentDay}
							class:text-red-500={isHoliday || (isWeekend && i % 7 === 0)}
							class:text-blue-500={(!isHoliday && isWeekend && i % 7 === 6)}
							class:bg-red-50={isHoliday && !isCurrentDay}
							disabled={isPastDay}
						>
							<span class='text-md font-medium'>{day || ''}</span>
							{#if isCurrentDay}
								<div class='absolute -top-1 -right-1 w-3 h-3 bg-indigo-500 rounded-full'></div>
							{/if}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</div>
</Layout>
