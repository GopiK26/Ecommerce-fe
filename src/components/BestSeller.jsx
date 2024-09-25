import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller);
        setBestSeller(bestProduct.slice(0,5))
    }, [products])

    return (
        <div className='bg-[#121212] text-white py-16 rounded-2xl border border-white mb-10'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12'>
                    <Title text1={'BEST'} text2={'SELLERS'} className="text-4xl font-bold mb-6" />
                    <p className='max-w-2xl mx-auto text-sm sm:text-base text-gray-400'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                    {bestSeller.map((item, index) => (
                        <ProductItem 
                            key={index} 
                            id={item._id} 
                            name={item.name} 
                            image={item.image} 
                            price={item.price} 
                            className="bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BestSeller
