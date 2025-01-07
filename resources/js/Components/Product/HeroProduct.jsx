import IonIcon from '@reacticons/ionicons'
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

function HeroProduct({ isProductSelected, onProductSelect }) {
    if (isProductSelected) return null;

    const [product, setProduct] = useState([]);

    const fetchProduct = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <>
            <div>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    centeredSlides={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {product.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div
                                onClick={() => onProductSelect(item)}
                                className="relative rounded-[22px] bg-gradient-to-r from-purple-600 to-blue-600 h-[360px] text-white overflow-hidden">
                                <div class="absolute inset-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="object-cover object-center w-full h-full"
                                    />
                                    <div class="absolute inset-0 bg-black opacity-50"></div>
                                </div>
                                <div class="relative z-10 p-10 flex lg:flex-row flex-col items-center justify-end mx-auto h-full ">
                                    <div className="flex flex-col h-full w-full justify-end">
                                        <div className="text-left">
                                            <div className="mb-3">
                                                <span className="text-[13px] font-bold bg-opacity-55 bg-gray-800 px-3 py-2 rounded-3xl leading-tight motion motion-preset-shrink">
                                                    {item.category}
                                                </span>
                                            </div>
                                            <div className="relative text-white hover:font-bold cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] mb-4">
                                                <span className="lg:text-3xl text-lg font-bold leading-tight motion motion-preset-shrink">
                                                    {item.title}
                                                </span>
                                            </div>
                                            <div className="flex flex-col justify-between pt-3 space-y-2 mb-3  text-xs dark:text-gray-600">
                                                <span>Price: ${item.price}</span>
                                                <span>Rating: {item.rating.rate}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default HeroProduct