import React from 'react'

function Timeline() {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
                                <h3 className="text-3xl font-semibold">Timeline Perusahaan</h3>
                                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">Perjalanan Kami</span>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 relative px-4 space-y-12 sm:space-y-8">
                                <div className="absolute top-0 lg:left-10 md:left-10 sm:left-10 -left-2 w-0.5 h-full bg-gray-300"></div>
                                <div className="flex flex-col relative sm:ml-12">
                                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-violet-600 translate-x-[-2rem]"></div>
                                    <h3 className="text-xl font-semibold tracking-wide">Awal Perjalanan</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-600">202X</time>
                                    <p className="mt-3">Didirikan oleh tim visioner dengan misi menciptakan solusi teknologi inovatif. Mulai mengembangkan produk perdana untuk mendukung transformasi digital.</p>
                                </div>
                                <div className="flex flex-col relative sm:ml-12">
                                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-violet-600 translate-x-[-2rem]"></div>
                                    <h3 className="text-xl font-semibold tracking-wide">Peluncuran Produk Perdana</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-600">202X+1</time>
                                    <p className="mt-3">Meluncurkan produk pertama ke pasar dan menjalin kemitraan strategis dengan berbagai pihak untuk memperluas jangkauan.</p>
                                </div>
                                <div className="flex flex-col relative sm:ml-12">
                                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-violet-600 translate-x-[-2rem]"></div>
                                    <h3 className="text-xl font-semibold tracking-wide">Ekspansi Pasar</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-600">202X+2</time>
                                    <p className="mt-3">Memperluas pasar ke wilayah baru dan mengintegrasikan teknologi terkini untuk mendukung pertumbuhan bisnis.</p>
                                </div>
                                <div className="flex flex-col relative sm:ml-12">
                                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-violet-600 translate-x-[-2rem]"></div>
                                    <h3 className="text-xl font-semibold tracking-wide">Pengakuan dan Pertumbuhan</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-600">202X+3</time>
                                    <p className="mt-3">Meraih penghargaan industri teknologi dan menjangkau lebih banyak pelanggan dengan solusi inovatif.</p>
                                </div>
                                <div className="flex flex-col relative sm:ml-12">
                                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-violet-600 translate-x-[-2rem]"></div>
                                    <h3 className="text-xl font-semibold tracking-wide">Globalisasi</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-600">202X+7</time>
                                    <p className="mt-3">Memperluas operasi ke pasar global dengan membuka kantor cabang di wilayah strategis.</p>
                                </div>
                                <div className="flex flex-col relative sm:ml-12">
                                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-violet-600 translate-x-[-2rem]"></div>
                                    <h3 className="text-xl font-semibold tracking-wide">Pemimpin Industri</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-600">202X+10</time>
                                    <p className="mt-3">Menjadi pemimpin industri teknologi dengan berbagai produk yang mendunia, mendukung keberlanjutan, dan inovasi global.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Timeline