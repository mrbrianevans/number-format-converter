import React from 'react'
import styled from 'styled-components'
import './css/app.css'
import Footer from './components/footer'
import Contributors from './components/contributors'
import Converter from './components/converter'

const App: React.FC = () => {
  return (
    <AppWrapper className='app'>
      <FillPage>
        <PageHeader>Number Format Converter</PageHeader>
        <hr />
        <Converter />
        <hr />
        <Contributors />
      </FillPage>
      <Footer />
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`

const FillPage = styled.div`
  /* make site content fill the page - in future & with the addition of more
  stuff to fill out the page naturally, this can be deleted */
`

const PageHeader = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
`

export default App
