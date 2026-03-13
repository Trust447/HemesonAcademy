// Build a WhatsApp click-to-chat URL
// number: string like '+2348000000000'
// message: optional pre-filled message string
export function waURL(number, message = '') {
  const clean = number.replace(/\D/g, '')
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${clean}?text=${encoded}`
}
