export interface Branch {
  name: string
  name_te: string
  address: string
  address_te: string
  phone?: string
  mobile: string
}

export const branches: Branch[] = [
  {
    name: 'Registered Office – Karimnagar',
    name_te: 'నమోదిత కార్యాలయం – కరీంనగర్',
    address: '7-2-616, Near Old Labour Adda, Mankamma Thota, Karimnagar, Telangana – 505001',
    address_te: '7-2-616, పాత Labour Adda దగ్గర, మంకమ్మ తోట, కరీంనగర్, తెలంగాణ – 505001',
    phone: '0878-2269666',
    mobile: '9705166110',
  },
  {
    name: 'Jagtial Branch',
    name_te: 'జగిత్యాల శాఖ',
    address: "H.No. 7-1-100/1, 2nd Floor, TNGO's Building, Tahasil Chowrastha, Jagtial – 505327",
    address_te: "H.No. 7-1-100/1, 2nd Floor, TNGO's Building, Tahasil Chowrastha, Jagtial – 505327",
    phone: '08724-226966',
    mobile: '9705166444',
  },
  {
    name: 'Ramagundam Branch',
    name_te: 'రామగుండం శాఖ',
    address: 'H.No. 5-6-172, 2nd Floor, FCI "X" Road, Beside SBI, NTPC, Godavarikhani – 505209',
    address_te: 'H.No. 5-6-172, 2nd Floor, FCI "X" Road, Beside SBI, NTPC, Godavarikhani – 505209',
    phone: '08728-274166',
    mobile: '9705166000',
  },
  {
    name: 'Mancherial Branch',
    name_te: 'మంచerial శాఖ',
    address: 'H.No. 8-6-649, NH-16, Ambedkar Chowk, Mukaram Plaza, Above HDFC Bank, Chennur Road, Mancherial – 504208',
    address_te: 'H.No. 8-6-649, NH-16, Ambedkar Chowk, Mukaram Plaza, Above HDFC Bank, Chennur Road, Mancherial – 504208',
    mobile: '9010797079',
  },
]

export const registeredOffice = branches[0]
