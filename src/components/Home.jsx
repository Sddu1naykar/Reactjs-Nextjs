import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <div className='hero'>
            <div className='card bg-dark text-white border-0'>
                <img src="charming-pretty-attractive-sexy-girl-showing-credit-card-holding-many-colorful-packages-hand-comfortable-to-use-bank-114236772.jpg" className='card-img' alt='background' height="550px"></img>
                <div className='card-img-overlay d-flex flex-column justify-conent-center'>
                    <div className='container'>
                        <h2 className='card-title display-3 fw-bolder mb=0'>NEW SESON ARRIVALS</h2>
                        <p className='card-text lead fs-2'>CHECK OUT ALL THE TRENDS</p>
                    </div>

                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home