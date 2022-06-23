import React from 'react'
import navImg from '../images/ab-testing.png'
import searchImg from '../images/search.png'

function Navbar(props) {
    let { setGlobalProduct, setGlobalCompany } = props;
    const reset = () => {
        setGlobalProduct('');
        setGlobalCompany('');
    }


    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className='flex items-center justify-between'>
                <img src={navImg} alt="" height={50} width={50} />
                <span className='font-semibold text-xl tracking-tight text-white font-mono mx-4'>
                    CompareIt
                </span>
            </div>

            <div className='text-white font-mono flex' onClick={reset}>
                <img src={searchImg} alt="" height={13} width={25} className='cursor-pointer' />
                <input type="button" value="Search Again" className='cursor-pointer text-xl mx-3' />
            </div>
        </nav >
    )
}

export default Navbar