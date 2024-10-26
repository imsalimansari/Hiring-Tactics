import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from '../shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Team from './Team'
import Choose from './Choose'

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <div className="bg-cover bg-center"
    style={{ 
      backgroundImage: `url('/bg1.jpg')` 
    }}>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Choose/>
      <Team/>
      <Footer />
    </div>
  )
}

export default Home