<!-- <script lang="ts">
  import { onMount } from 'svelte';

  // Calendar data
  let currentDate = new Date();
  let viewMonth = 0; // 0 = current month, 1 = next month, 2 = month after next
  let calendarDays = [];
  let weekdays = ['日', '月', '火', '水', '木', '金', '土'];

  // Sample holidays (you can replace with your own data)
  const holidays = [
    { date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15), name: "祝日1" },
    { date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 5), name: "祝日2" },
    { date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 20), name: "祝日3" }
  ];

  // Generate calendar days for the selected month
  function generateCalendar(monthOffset) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + monthOffset;

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    let days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push({ day: null, isCurrentDay: false, isWeekend: false, isHoliday: false });
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dayOfWeek = date.getDay();

      // Check if it's current day
      const isCurrentDay =
        date.getDate() === currentDate.getDate() &&
        date.getMonth() === currentDate.getMonth() &&
        date.getFullYear() === currentDate.getFullYear();

      // Check if it's weekend
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      // Check if it's a holiday
      const holiday = holidays.find(h =>
        h.date.getDate() === date.getDate() &&
        h.date.getMonth() === date.getMonth() &&
        h.date.getFullYear() === date.getFullYear()
      );

      days.push({
        day,
        date,
        isCurrentDay,
        isWeekend,
        isHoliday: !!holiday,
        holidayName: holiday?.name
      });
    }

    return days;
  }

  // Update calendar when month changes
  function updateCalendar() {
    calendarDays = generateCalendar(viewMonth);
  }

  // Initialize calendar
  onMount(() => {
    updateCalendar();
  });
</script> -->
