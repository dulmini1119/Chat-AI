import React, { useEffect } from 'react'
import './dashboardLayout.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'

const DashboardLayout = () => {
  const {userId, isLoaded} = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId){
      navigate("/sign-in");
    }
  },[isLoaded, userId, navigate]);

  if (!isLoaded) return "Loading..."

  return (
    <div>
        <span>MENU</span>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default DashboardLayout