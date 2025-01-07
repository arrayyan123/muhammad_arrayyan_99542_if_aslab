import React from 'react'

function HeroAbout() {
    return (
        <div>
            <div class="sm:flex items-center relative z-40 mx-auto max-w-screen-xl">
                <div class="sm:w-1/2 p-10">
                    <div class="image object-center text-center">
                        <img src="https://i.imgur.com/WbQnbas.png" />
                    </div>
                </div>
                <div class="sm:w-1/2 p-5">
                    <div class="text">
                        <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
                        <h2 class="my-4 font-bold text-3xl  sm:text-4xl motion motion-preset-shrink">About <span class="text-indigo-600 motion motion-preset-shrink motion-delay-300">Our Company</span>
                        </h2>
                        <p class="text-gray-700">
                            Rayyan Tech adalah perusahaan yang menggabungkan keahlian di bidang teknologi informasi dan non-teknologi untuk menyediakan solusi inovatif dan berkelanjutan bagi klien kami di berbagai industri.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroAbout