import type { PageLoad } from './$types'

export const load: PageLoad = ({ params }) => {
  const clockIcons = [
    'Clock',
    'Clock1',
    'Clock2',
    'Clock3',
    'Clock4',
    'Clock5',
    'Clock6',
    'Clock7',
    'Clock8',
    'Clock9',
    'ClockAlert',
  ]
  const getRandomClockIcon = () => {
    const randomIndex = Math.floor(Math.random() * clockIcons.length)
    return clockIcons[randomIndex]
  }

  return {
    clockIcon: getRandomClockIcon(),
  }
}
