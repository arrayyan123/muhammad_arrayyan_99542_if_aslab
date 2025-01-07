import React from 'react'

function MiddleAbout() {
    return (
        <div className='relative z-40'>
            <section class="bg-gray-100">
                <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div class="max-w-lg">
                            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                            <p class="mt-4 text-gray-600 text-lg motion motion-preset-slide-right">Berdiri sejak 2025, kami telah menjadi mitra terpercaya bagi perusahaan dari berbagai skala, mulai dari startup hingga perusahaan multinasional. Kami berfokus pada pengembangan teknologi canggih yang mendukung transformasi digital dan pertumbuhan bisnis, sambil memberikan layanan yang menonjol di luar sektor teknologi, seperti konsultasi bisnis, pengembangan produk, dan layanan manajemen.</p>
                        </div>
                        <div class="mt-12 md:mt-0">
                            <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" class="object-cover rounded-lg shadow-md" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MiddleAbout