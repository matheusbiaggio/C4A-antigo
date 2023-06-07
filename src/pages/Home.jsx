import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { 
  HomeContainer 
} from '../style/Home'
import MainContent from '../components/MainContent'

export default function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <div>
        <Header />
        <div>
          <MainContent />
        </div>
      </div>
    </HomeContainer>
  )
}
