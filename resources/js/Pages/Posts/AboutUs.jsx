import HeroAbout from '@/Components/AboutUs/HeroAbout'
import MiddleAbout from '@/Components/AboutUs/MiddleAbout'
import TeamSection from '@/Components/AboutUs/TeamSection'
import Timeline from '@/Components/AboutUs/Timeline'
import WebsiteLayout from '@/Layouts/WebsiteLayout'
import React from 'react'

function AboutUs() {
  return (
    <WebsiteLayout>
        <HeroAbout />
        <MiddleAbout />
        <TeamSection />
        <Timeline />
    </WebsiteLayout>
  )
}

export default AboutUs