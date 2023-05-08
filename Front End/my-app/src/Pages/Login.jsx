import React from 'react'
import Loginuser from '../Components/Loginuser'
import Navbar from '../Components/Navbar/Navbar'
import Navbar2 from '../Components/Navbar/Navbar2'
import Footer from '../Components/Footer/Footer'
import BackToTop from '../Components/BackToTop/BackToTop'
function Login() {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Loginuser />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default Login