import React from 'react'
import WebsiteLayout from '@/Layouts/WebsiteLayout'
import Hero from '@/Components/Home/Hero'
import { Head } from '@inertiajs/react'
import GridBox from '@/Components/Home/GridBox'

function Home() {
    return (
        <WebsiteLayout>
            <Head title='Home' />
            <Hero />
            <GridBox />
        </WebsiteLayout>
    )
}

export default Home