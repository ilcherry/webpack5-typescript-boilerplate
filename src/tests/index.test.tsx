import { formatTime, formatValue } from '../utils/format';

describe('adsds', () => {
  test('test formatValue', () => {
    expect(formatValue('str')).toBe('str');
  });

  test('test formatTime', () => {
    expect(formatTime('2021.5.4')).toBe('2021/05/04');
    expect(formatTime(null)).toBe('-');
    expect(formatTime(undefined)).toBe('-');
  });
});
