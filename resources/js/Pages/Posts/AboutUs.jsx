import HeroAbout from '@/Components/AboutUs/HeroAbout'
import MiddleAbout from '@/Components/AboutUs/MiddleAbout'
import TeamSection from '@/Components/AboutUs/TeamSection'
import Timeline from '@/Components/AboutUs/Timeline'
import WebsiteLayout from '@/Layouts/WebsiteLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

function AboutUs() {
  return (
    <WebsiteLayout>
        <Head title='about us' />
        <HeroAbout />
        <MiddleAbout />
        <TeamSection />
        <Timeline />
    </WebsiteLayout>
  )
}

export default AboutUs