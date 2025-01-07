import ContactMain from '@/Components/ContactUs/ContactMain'
import WebsiteLayout from '@/Layouts/WebsiteLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

function Contact() {
  return (
    <WebsiteLayout>
        <Head title='contact' />
        <ContactMain />
    </WebsiteLayout>
  )
}

export default Contact