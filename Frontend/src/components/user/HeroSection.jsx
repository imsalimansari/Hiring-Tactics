import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10 py-10'>
                <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Hiring Tactics Website</span>
                <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                <p className='text-lg w-[800px] font-semibold mx-auto'>
                <span className='text-[#ff0000]'>Welcome to Hiring Tactics,</span> where finding your dream job is made simple and effective. Whether you're a seasoned professional or just starting out, we bring the best job opportunities right to your fingertips. Explore thousands of listings from top companies, tailor your search to match your skills and preferences, and take the first step toward a fulfilling career. With our intuitive platform, applying for roles is seamless and quick, allowing you to focus on what matters most: achieving your career goals. Let us guide you in landing that perfect job and turning your aspirations into reality.</p>
                <div className='flex w-full md:w-[60%] lg:w-[40%] shadow-lg border border-red-500 rounded-full items-center mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none rounded-l-full w-full px-4 py-2 text-sm '
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2] px-4  py-2 md:py-3">
                        <Search className='h-4 w-4' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection