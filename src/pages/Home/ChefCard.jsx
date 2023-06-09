import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/solid'

const ChefCard = ({ chef }) => {
    const { _id,name, chef_img, title, experian, recipe, description, like } = chef;

    return (
        <div className="container mx-auto card bg-slate-500 border py-6 shadow-xl px-2 relative">
            <div>
                <figure>
                    <img src={chef_img} alt=""
                        className='master_Chef bg-white'
                    />
                </figure>
                <p className='text-chef_text text-3xl font-semibold font-sans py-2 px-4 '>
                    <small>Name: {name}</small>
                </p>
            </div>
            <div className="">
                <p
                    className=" text-chef_text text-xl font-medium pb-3 px-4 font-sans"
                >
                    <span className='font-bold'>Title:</span> {title}
                </p>
                <hr className='text-header_bg' />
                <p className='text-white text-2xl mt-2 mx-2 tracking-wide'>
                    <span>Experian :</span>
                    <span className='bg-gray-600 ml-1'>{experian}</span>
                </p>
                <p className='text-white text-2xl my-2 mx-2 tracking-wide'><span>Recipe :</span>
                    <span className='bg-gray-600 ml-1'>{recipe}</span></p>

                <p className='text-white text-2xl my-2 mx-2 tracking-wide'>
                    <span>Love :</span>
                    <span className='mx-2 inline-flex items-center'>{like}<HeartIcon className="h-6 w-6"/></span>
                </p>
                <p className='text-white px-2'><span className='pr-2'>Description:</span>{description}</p>

                <div className=''>
                    <Link to={`/chef/${_id}`}>
                        <button className='visit w-full relative bottom-0'>View Chef</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;