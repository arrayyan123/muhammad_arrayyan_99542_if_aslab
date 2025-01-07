import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import IonIcon from '@reacticons/ionicons';
import moment from 'moment';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";


function MainProduct({ isProductSelected, selectedProduct, onProductSelect, onProductDeselect }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [modalImage, setModalImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const openModal = (imagePath) => {
    setModalImage(imagePath);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const fetchProduct = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
    setCurrentPage(1);
    let filtered;
    if (type === 'all') {
      filtered = products;
    } else {
      filtered = products.filter((product) => product.category === type);
    }
    const searched = filtered.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(searched);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    const filtered = filterType === 'all'
      ? products
      : products.filter((product) => product.category === filterType);
    const searched = filtered.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(searched);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    let stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-yellow-500"
          key={`full-${i}`}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-yellow-500"
          key="half"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="currentColor" />
        </svg>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-gray-300"
          key={`empty-${i}`}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }

    return (
      <div className="flex space-x-1">
        {stars}
      </div>
    );
  };


  return (
    <div>
      <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <div className="container lg:p-6 p-2 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Product</h2>
          </div>

          <div className="flex flex-col gap-5 items-center justify-center mb-4 w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search by product name..."
              className="w-full md:w-1/2 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />

            <Tabs value={filterType} className="w-full">
              <TabsHeader>
                <Tab value="all" onClick={() => handleFilterChange('all')}>
                  All Products
                </Tab>
                <Tab value="electronics" onClick={() => handleFilterChange('electronics')}>
                  Electronics
                </Tab>
                <Tab value="jewelery" onClick={() => handleFilterChange('jewelery')}>
                  Jewelry
                </Tab>
                <Tab value="men's clothing" onClick={() => handleFilterChange("men's clothing")}>
                  Men's Clothing
                </Tab>
                <Tab value="women's clothing" onClick={() => handleFilterChange("women's clothing")}>
                  Women's Clothing
                </Tab>
              </TabsHeader>
            </Tabs>
          </div>

          {/* Daftar Blog */}
          {!isProductSelected && (
            <>
              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
                </div>
              ) : (
                <div>
                  <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {currentProducts.map((item) => (
                      <article
                        key={item.id}
                        className="flex flex-col dark:bg-gray-50 cursor-pointer"
                        onClick={() => onProductSelect(item)}
                      >
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          aria-label={`Buka Product Detail ${item.title}`}
                        >
                          <div className="w-full h-full">
                            <span className="text-[13px] relative z-40 top-10 left-3 font-bold bg-opacity-55 text-white bg-gray-800 px-3 py-2 rounded-3xl leading-tight">
                              {item.category}
                            </span>
                            <div className="">
                              <img
                                alt={item.title}
                                className="object-cover w-full h-52 dark:bg-gray-500"
                                src={item.image}
                              />
                            </div>
                          </div>
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                          <div className="relative text-black hover:font-bold cursor-pointer transition-all ease-in-out mb-2">
                            <span className="text-xl font-bold leading-tight">
                              {item.title}
                            </span>
                          </div>
                          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                            <span>Price: ${item.price}</span>
                            <span>Rating: {renderStars(item.rating.rate)}</span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                  <div className="flex justify-center mt-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-700 text-gray-300'
                          }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Tampilan Blog yang Dipilih */}
          {isProductSelected && selectedProduct && (
            <div className="lg:p-6 p-4 bg-white shadow-md dark:bg-gray-800 rounded-lg">
              {/* Tombol kembali */}
              <button
                onClick={onProductDeselect}
                className="mb-4 text-sm bg-red-400 text-white p-3 rounded-lg hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
              >
                <div className='relative text-white hover:font-bold cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>
                  Kembali ke Product
                </div>
              </button>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                {selectedProduct.title}
              </h2>
              <div className='flex flex-wrap -mx-4'>
                <div className='w-full md:w-1/2 px-4 mb-8'>
                  <img
                    onClick={() => openModal(selectedProduct.image)}
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="object-cover object-center w-full h-full rounded-lg mb-4 shadow-sm"
                  />
                </div>
                <div class="w-full md:w-1/2 px-4">
                  <h2 class="text-3xl font-bold mb-2">{selectedProduct.title}</h2>
                  <p class="text-gray-600 mb-4">{selectedProduct.category}</p>
                  <div class="mb-4">
                    <span class="text-2xl font-bold mr-2">${selectedProduct.price}</span>
                  </div>
                  {/* untuk rating nya */}
                  <div class="flex items-center mb-4">
                    <span class="ml-2 text-gray-600">{renderStars(selectedProduct.rating.rate)}</span>
                  </div>
                  <p class="text-gray-700 mb-6">Quality Premium Product</p>

                  <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-2">Color:</h3>
                    <div class="flex space-x-2">
                      <button
                        class="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                      <button
                        class="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                      <button
                        class="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
                    </div>
                  </div>

                  <div class="mb-6">
                    <label for="quantity" class="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
                    <input type="number" id="quantity" name="quantity" min="1"
                      class="w-16 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                  </div>

                  <div class="flex space-x-4 mb-6">
                    <button
                      class="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                      </svg>
                      Add to Cart
                    </button>
                    <button
                      class="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                      </svg>
                      Wishlist
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal Gambar */}
              <div className="relative mt-8">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  Detail Gambar
                </h3>

                <div className="group relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg h-80">
                  <img
                    onClick={() => openModal(selectedProduct.image)}
                    src={selectedProduct.image}
                    alt="Gallery Image"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                  <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    {selectedProduct.title}
                  </span>
                </div>
              </div>

              {modalImage && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                  onClick={closeModal}
                >
                  <div className="relative">
                    <img
                      src={modalImage}
                      alt="Preview"
                      className="max-w-[90vw] motion-preset-blur-up mx-auto max-h-[90vh] object-contain bg-white rounded-lg"
                    />
                    <p className="text-white text-center mt-4">{selectedProduct.title}</p>
                    <button
                      className="absolute top-4 right-4 p-2 text-white text-3xl"
                      onClick={closeModal}
                    >
                      &times;
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default MainProduct;
