import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { 
  HomeContainer 
} from '../style/Home'

export default function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <div>
        <Header />
      </div>
    </HomeContainer>
  )
}
