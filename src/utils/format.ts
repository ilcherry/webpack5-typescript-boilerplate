import dayjs from 'dayjs';

export const formatTime = (time: string | null | undefined) => {
  if (time == null) {
    return '-';
  }

  return dayjs(time).format('YYYY/MM/DD');
};

export const formatValue = <T>(value: T) => value;
