import React from 'react';
import ProductCard from './ProductCard';

interface Product {
    name: string;
    description: string;
    price: string;
    imageSrc: string;
}

const products: Product[] = [
    {
        name: 'The Phoenix',
        description: 'They exist!',
        price: '$9.99',
        imageSrc: '/sticks/stick1.png',
    },
    {
        name: 'The Phoenix',
        description: "You know he's got his own personal stylist.",
        price: '$9.99',
        imageSrc: '/sticks/stick2.png',
    },
    {
        name: 'The Cat',
        description: 'Look at that crazy and cute face!',
        price: '$9.99',
        imageSrc: '/sticks/stick3.png',
    },
    {
        name: 'The Dog',
        description: 'Look at that crazy and cute face!',
        price: '$9.99',
        imageSrc: '/sticks/stick4.png',
    },
    {
        name: 'So Clean',
        description: "Scrub And Clean",
        price: '$9.99',
        imageSrc: '/sticks/stick5.png',
    },
    {
        name: 'The Playful Dog',
        description: 'Dirty and Playful',
        price: '$9.99',
        imageSrc: '/sticks/stick6.png',
    },
];

const ProductList = () => {
    return (
        <div className="flex items-center justify-between max-w-4xl mx-auto px-6">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            imageSrc={product.imageSrc}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductList
