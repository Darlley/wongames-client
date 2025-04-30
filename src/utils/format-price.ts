export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}