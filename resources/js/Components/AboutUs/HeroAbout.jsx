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
                        <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-indigo-600">Our Company</span>
                        </h2>
                        <p class="text-gray-700">
                            Kami adalah perusahaan teknologi inovatif yang berkomitmen untuk menghadirkan solusi digital terbaik bagi pelanggan dan mitra bisnis kami. Dengan fokus pada pengembangan teknologi modern, kami menciptakan produk dan layanan yang membantu mempermudah kehidupan, meningkatkan efisiensi, dan mendorong transformasi digital di berbagai industri.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroAbout