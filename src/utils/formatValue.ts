const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-bt', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export default formatValue;
