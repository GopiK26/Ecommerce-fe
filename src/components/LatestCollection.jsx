import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products])

    return (
        <div className='bg-[#121212] text-gray-100 py-16 rounded-2xl border border-white mb-10'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12'>
                    <Title text1={'LATEST'} text2={'COLLECTIONS'} className="text-4xl font-bold mb-6" />
                    <p className='max-w-2xl mx-auto text-sm sm:text-base text-gray-400'>
                        Shop From The Latest Trends
                    </p>
                </div>

                {/* Rendering Products */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                    {latestProducts.map((item, index) => (
                        <ProductItem 
                            key={index} 
                            id={item._id} 
                            image={item.image} 
                            name={item.name} 
                            price={item.price} 
                            className="bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LatestCollection
