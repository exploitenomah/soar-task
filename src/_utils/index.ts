export const maskCardNumber = (cardNumber: string) => {
  return cardNumber.replace(/^(\d{4})\d{8}(\d{4})$/, "$1 **** **** $2")
}

export const formatValidThru = (dateString: string) => {
  const date = new Date(dateString)
  const month = String(date.getMonth() + 1).padStart(2, "0") // Ensure two digits
  const year = String(date.getFullYear()).slice(-2) // Get last two digits of year
  return `${month}/${year}`
}

export const formatNumToUSD = (num: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(num)
}
