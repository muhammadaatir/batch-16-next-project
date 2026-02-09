import ContactSectionClient from './ContactSection.client'

export default function ContactSection() {
  // Server component wrapper — actual form logic is client-side
  return <ContactSectionClient />
}
