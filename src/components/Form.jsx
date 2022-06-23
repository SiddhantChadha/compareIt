import React, { useState } from 'react'

function Form(props) {
    let {setGlobalCompany,setGlobalProduct} = props;

    let [company,setCompany] = useState('');
    let [product,setProduct] = useState('');

    const changeCompany = (e)=>{
        setCompany(e.target.value);
    }

    const changeProduct = (e)=>{
        setProduct(e.target.value);
    }

    const submitForm = (e)=>{
        e.preventDefault();
        setGlobalCompany(company);
        setGlobalProduct(product);
        setCompany('');
        setProduct('');
    }

    return (
        <div className="flex items-center justify-center">
            <div className="w-full max-w-xs my-20">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitForm}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Brand Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="company" type="text" placeholder="Brand" required value={company} onChange={changeCompany}/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Product
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="product" type="text" placeholder='Product' value={product} onChange={changeProduct} required />
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Search
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form