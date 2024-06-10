import React from 'react'

const Qr = () => {
    const image1 = '../../image/Qr/menu1.png'; // Replace with your actual image path
    const image2 = '../../image/Qr/menu2.png'; // Replace with your actual image path

    return (
        <div className='max-w-[1240px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            <div className='rounded-xl relative hover:scale-105 duration-500 cursor-pointer'>
                <div className="image-item">
                    <img src={image1} alt="Image 1" />
                    <p>Image 1 Description</p>
                </div>
            </div>
            <div className='rounded-xl relative hover:scale-105 duration-500 cursor-pointer'>
                <div className="image-item">
                    <img src={image2} alt="Image 2" />
                    <p>Image 2 Description</p>
                </div>
            </div>
        </div>
    );
}

export default Qr