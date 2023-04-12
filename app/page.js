import Image from 'next/image'
import { Open_Sans } from 'next/font/google'
import NavBar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'

const openSans = Open_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={openSans.className}>
    <NavBar/>
    <HeroSection/>
    <AboutMe/>
   </div>
  )
}
