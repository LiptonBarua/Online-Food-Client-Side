import Image from 'next/image'
import { Inter } from 'next/font/google'
import Gallery from '@/Components/HomePage/Gallary/Gallary'
import Banner from '@/Components/HomePage/Banner/Banner'
import Recipes from '@/Components/HomePage/Recipes/Recipes'
import Delivery from '@/Components/HomePage/Delivery/Delivery'
import Subscribe from '@/Components/HomePage/Subscribe/Subscribe'
import TeamMember from '@/Components/HomePage/TeamMember/TeamMember'
import Card from '@/Components/HomePage/Card/Card'
import Practice from '@/Components/HomePage/Practice/Practice'
import Testimonails from '@/Components/HomePage/Testimonails/Testimonails'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <Banner></Banner>
    <Gallery></Gallery>
    <Recipes></Recipes>
    <Practice></Practice>
    <Delivery></Delivery>
    <Subscribe></Subscribe>
    <Card></Card>
    <TeamMember></TeamMember>
    <Testimonails></Testimonails>
   </div>
  )
}
