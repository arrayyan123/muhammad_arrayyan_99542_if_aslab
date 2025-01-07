import React from 'react'
import WebsiteLayout from '@/Layouts/WebsiteLayout'
import Hero from '@/Components/Home/Hero'
import { Head } from '@inertiajs/react'

function Home() {
    return (
        <WebsiteLayout>
            <Head title='Home' />
            <Hero />
        </WebsiteLayout>
    )
}

export default Home