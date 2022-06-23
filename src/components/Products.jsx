import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Loading from './Loading';
import Product from './Product';

function Products(props) {
    let { globalCompany, globalProduct } = props;
    let [flipkartData, setFlipkartData] = useState([]);
    let [amazonData, setAmazonData] = useState([]);
    let [minLength,setMinLength] = useState(10);

    let [isLoading, setIsLoading] = useState(true);

    useEffect(function () {

        (async function () {
            let response = await fetch(`http://localhost:3000/flipkart/${globalCompany}/${globalProduct}`);
            response = await response.json();
            setFlipkartData(response);

            
        })();

        (async function () {
            let response = await fetch(`http://localhost:3000/amazon/${globalCompany}/${globalProduct}`);
            response = await response.json();
            setAmazonData(response);
            setIsLoading(false);

        })();

    }, [])


    return (
        <>
            {
                (isLoading === true) ? <Loading></Loading> :
                    <div className='w-full'>
                        <div className='w-full flex justify-evenly'>
                            <div className='w-5/12 '>
                                <div className='flex justify-center my-3'>
                                    <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-red-400 font-mono">Flipkart</h1>
                                </div>

                                <div>
                                    {
                                        (flipkartData.length == 0) ? <h1>No data </h1> :
                                        flipkartData.slice(0,minLength).map(function (val, idx) {

                                            return <Product key={idx} price={val.price} name={val.name} link={val.link} img={val.img} rating={val.rating}></Product>
                                        })
                                    }
                                </div>

                            </div>



                            <div className='w-5/12'>
                                <div className='flex justify-center my-3'>
                                    <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-red-400 font-mono">Amazon</h1>
                                </div>

                                <div>
                                    {
                                        (amazonData.length == 0) ? <h1>No data</h1> :
                                            amazonData.slice(0,minLength).map(function (val, idx) {

                                                return <Product key={idx} price={val.price} name={val.name} link={val.link} img={val.img} rating={val.rating}></Product>
                                            })
                                    }
                                </div>

                            </div>

                        </div>
                    </div>

            }

        </>


    )
}

export default Products