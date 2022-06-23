import React from 'react'

function Product(props) {
    let { price, name, link, img, rating } = props;

    return (
        <div className='my-10 flex justify-evenly py-3  mx-5 rounded-md shadow-lg hover:scale-105'>
            <div className='min-h-fit'>
                <img src={img} className='object-contain h-60 w-30'></img>
            </div>
            <div className='flex justify-center items-center'>
                <div className='max-w-lg'>
                    <h5 className="font-medium leading-tight text-xl mt-0 mb-2 text-black-600">{name}</h5>
                    <h5 className="font-medium leading-tight text-xl mt-0 mb-2 text-black-600">Rating: {rating}</h5>
                    <h5 className="font-medium leading-tight text-xl mt-0 mb-2 text-black-600">Price: {price}</h5>
                    <a href={link} className='font-medium leading-tight text-xl mt-0 mb-2 text-blue-600 underline' target='_blank'>Product Link</a>
                </div>
            </div>



        </div>
    )
}

export default Product