import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { 
  HomeContainer, MainContainer, Popup 
} from '../style/Home'
import MainContent from '../components/MainContent'
import Tasks from '../components/Tasks'
import AppContext from '../context/AppContext'
import FormBlock from '../components/FormBlock'

export default function Home() {
  const { isFormOpen } = useContext(AppContext);

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
      {isFormOpen ? (
        <Popup>
          <FormBlock />
        </Popup>
      ) : null}
    </HomeContainer>
  )
}
