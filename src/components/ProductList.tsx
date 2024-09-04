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
    {
        name: 'Old But Gold',
        description: 'Old Times',
        price: '$9.99',
        imageSrc: '/sticks/stick7.png',
    },
    {
        name: 'Blue Beetle',
        description: 'Blue Beetle? Slap and shout!',
        price: '$9.99',
        imageSrc: '/sticks/stick8.png',
    },
    {
        name: 'Cute Alien',
        description: 'Take me to your stickers!',
        price: '$9.99',
        imageSrc: '/sticks/stick9.png',
    },
    {
        name: 'The Valiant Paladin',
        description: 'A heroic paladin with a radiant shield and glowing sword.',
        price: '$9.99',
        imageSrc: '/sticks/stick10.png',
    },
    {
        name: 'The Fierce Dragon',
        description: 'A majestic dragon guarding its treasure, with vivid colors and a fiery breath.',
        price: '$9.99',
        imageSrc: '/sticks/stick11.png',
    },
    {
        name: "The Mystic Wolf",
        description: "A powerful wolf howling at the moon, surrounded by an ethereal glow.",
        price: "$9.99",
        imageSrc: "/sticks/stick12.png"
    },
    {
        name: "The Unicorn Pup",
        description: "An adorable pug in a whimsical unicorn costume, ready to spread magic!",
        price: "$9.99",
        imageSrc: "/sticks/stick13.png"
    },
    {
        name: "The Playful Fox",
        description: "A mischievous fox surrounded by autumn leaves, full of energy and charm.",
        price: "$9.99",
        imageSrc: "/sticks/stick14.png"
    },
    {
        name: "The Adventurous Dog",
        description: "Ready for any adventure, with a spirit as wild as the wind.",
        price: "$9.99",
        imageSrc: "/sticks/stick15.png"
    }
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
