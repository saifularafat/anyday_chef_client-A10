import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast'; 
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { HeartIcon } from '@heroicons/react/24/solid'

const Food = ({ food }) => {
    const { details, name, image, like, rating } = food

    const [disabledbtn, setDisabledbtn] = useState(false)

    const handlerToast = () => {
        toast.success('Wow Add Food.!')
        setDisabledbtn(true)
    }
    return (
        <div>
            <div className="card md:h-fit md:w-72 mx-3 my-12 glass">
                <figure>
                    <img
                        src={image}
                        alt="food"
                        className='w-full h-44' />
                </figure>
                <div
                    className=" md:mx-5 mx-2 py-3">
                    <h2 className="text-2xl font-serif"><span className='font-serif font-semibold'>Name:</span> {name}</h2>
                    <p className='my-3'>
                        <span className='text-xl font-serif font-medium underline pr-2'>Food Details:</span>
                        {details}</p>
                    <hr />
                    <div className="md:flex justify-between items-center text-white py-5">
                        <div className='flex-grow flex items-center'>
                            <Rating className='text-yellow-500'
                                style={{ maxWidth: 120 }}
                                value={Math.round(rating || 0)}
                                readOnly
                            />
                            <span className='ps-2 fs-5'>{rating}</span>
                        </div>
                        <p
                            className='flex-grow flex'>
                            <HeartIcon
                                className='w-6 h-6 pr-1 text-white' />
                            <span>{like}</span>
                        </p>
                    </div>
                    <div>
                        <button
                            onClick={handlerToast}
                            disabled={disabledbtn}
                            className="foodbtn gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            Favorite Food
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;