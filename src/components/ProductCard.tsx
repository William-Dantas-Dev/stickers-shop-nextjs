import React from 'react';

interface ProductCardProps {
    name: string;
    description: string;
    price: string;
    imageSrc: string;
}

const ProductCard = ({ name, description, price, imageSrc }: ProductCardProps) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden h-96 flex flex-col">
            <img src={imageSrc} alt={name} className="w-full h-48 object-contain border-b-2" />
            <div className="py-4 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-purple-700 px-4">{name}</h2>
                <p className="mt-2 text-gray-600 px-4">{description}</p>
                <div className='flex justify-end mt-auto'>
                    <div className="relative inline-block bg-purple-100 text-purple-700 font-bold px-4 py-2">
                        <div className="absolute inset-y-0 left-0 flex items-center">
                            <div className="w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-l-[16px] border-l-white"></div>
                        </div>
                        <span className="relative z-10 ml-4">{price}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductCard
