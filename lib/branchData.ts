export interface Branch {
  name: string
  name_te: string
  shortName: string
  code: string
  address: string
  address_te: string
  phone?: string
  mobile: string
}

export const branches: Branch[] = [
  {
    name: 'Registered Office – Karimnagar',
    name_te: 'నమోదిత కార్యాలయం – కరీంనగర్',
    shortName: 'Karimnagar',
    code: 'K',
    address: '7-2-616, Near Old Labour Adda, Mankamma Thota, Karimnagar, Telangana – 505001',
    address_te: '7-2-616, పాత Labour Adda దగ్గర, మంకమ్మ తోట, కరీంనగర్, తెలంగాణ – 505001',
    phone: '0878-2269666',
    mobile: '9705166110',
  },
  {
    name: 'Jagtial Branch',
    name_te: 'జగిత్యాల శాఖ',
    shortName: 'Jagtial',
    code: 'J',
    address: "H.No. 7-1-100/1, 2nd Floor, TNGO's Building, Tahasil Chowrastha, Jagtial – 505327",
    address_te: "H.No. 7-1-100/1, 2nd Floor, TNGO's Building, Tahasil Chowrastha, Jagtial – 505327",
    phone: '08724-226966',
    mobile: '9705166444',
  },
  {
    name: 'Ramagundam Branch',
    name_te: 'రామగుండం శాఖ',
    shortName: 'Ramagundam',
    code: 'R',
    address: 'H.No. 5-6-172, 2nd Floor, FCI "X" Road, Beside SBI, NTPC, Godavarikhani – 505209',
    address_te: 'H.No. 5-6-172, 2nd Floor, FCI "X" Road, Beside SBI, NTPC, Godavarikhani – 505209',
    phone: '08728-274166',
    mobile: '9705166000',
  },
  {
    name: 'Mancherial Branch',
    name_te: 'మంచేరియల్ శాఖ',
    shortName: 'Mancherial',
    code: 'M',
    address: 'H.No. 8-6-649, NH-16, Ambedkar Chowk, Mukaram Plaza, Above HDFC Bank, Chennur Road, Mancherial – 504208',
    address_te: 'H.No. 8-6-649, NH-16, Ambedkar Chowk, Mukaram Plaza, Above HDFC Bank, Chennur Road, Mancherial – 504208',
    mobile: '9010797079',
  },
]

export const registeredOffice = branches[0]

/** WhatsApp expects country code without + (India = 91) */
export function toWhatsAppNumber(mobile: string): string {
  const digits = mobile.replace(/\D/g, '')
  if (digits.startsWith('91') && digits.length === 12) return digits
  if (digits.length === 10) return `91${digits}`
  return digits
}

export function buildWhatsAppLink(mobile: string, message: string): string {
  return `https://wa.me/${toWhatsAppNumber(mobile)}?text=${encodeURIComponent(message)}`
}
