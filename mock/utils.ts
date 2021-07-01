interface Response<T> {
  code?: 0 | -1;
  message?: string;
  data: T;
}

// eslint-disable-next-line import/prefer-default-export
export const glsResponse = <T>({
  code = 0,
  message = 'ok',
  data,
}: Response<T>) => ({
  code,
  message,
  data,
});
