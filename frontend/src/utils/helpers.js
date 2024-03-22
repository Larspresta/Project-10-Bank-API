// for footer
export function getYear() {
  const currentYear = new Date().getFullYear();
  return currentYear;
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
}
