export const capitalize = (string: string): string => {
  return string[0].toUpperCase() + string.slice(1);
};

interface TimeProps {
  hours: number;
  minutes: number;
}
export const convertToAMPM= ({ hours, minutes }: TimeProps): string => {
  const time = [hours % 12 || '12'];
  if (minutes > 0) {
    time.push(`0${minutes}`.slice(-2));
  }
  const suffix = hours < 12 ? 'AM' : 'PM';
  return [time.join(':'), suffix].join(' ');
};


export const isToday = (dayIndex:number): boolean => {
  const today = new Date().getDay()
  console.log({today, dayIndex})
  return dayIndex+1 === today
}

export const parseSeconds = (seconds:number): TimeProps => {
  const second = 1
  const minute = second * 60
  const hour = minute * 60

  const hours = seconds / hour
  const minutes = (seconds % hour) / minute
  return {
    hours: Math.floor(hours),
    minutes: Math.floor(minutes)
  }
}