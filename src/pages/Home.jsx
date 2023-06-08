import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { 
  HomeContainer, MainContainer 
} from '../style/Home'
import MainContent from '../components/MainContent'
import Tasks from '../components/Tasks'

export default function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <div>
        <Header />
        <MainContainer>
          <MainContent />
          <Tasks />
        </MainContainer>
      </div>
    </HomeContainer>
  )
}
