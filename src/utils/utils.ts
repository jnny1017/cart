const comma = (num: number | bigint): string => new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' })
  .format(num);

export default comma;
