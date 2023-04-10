import Image from 'next/image'
import { Open_Sans } from 'next/font/google'
import NavBar from './components/Navbar'

const openSans = Open_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={openSans.className}>
    <NavBar/>
   </div>
  )
}
