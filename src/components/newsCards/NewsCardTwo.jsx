import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsCardTwo = ({ item }) => {


    return (
        <Link href={`/news/${item?.category}/${item?._id}`}>
            <div className='relative'>
                <Image height="460" width="526" src={item?.img} className='w-full' alt='banner' />
                <div className='absolute bottom-0 p-2 bg-black bg-opacity-70 w-full'>
                    <h1 className='text-white text-lg whitespace-nowrap overflow-hidden '>{item?.title}</h1>
                    <p className='text-white text-sm mt-2'>{item?.published_date}</p>
                </div>
            </div>
        </Link>
    );
};

export default NewsCardTwo;