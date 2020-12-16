import React from 'react'
import styled from 'styled-components'
import './css/app.css'
import Footer from './components/footer'
import Contributors from './components/contributors'
import Converter from './components/converter'

const App: React.FC = () => {
  return (
    <div className='app'>
      <FillPage>
        <PageHeader>Number Format Converter</PageHeader>
        <hr />
        <Converter />
        <Contributors />
      </FillPage>
      <Footer />
    </div>
  )
}

const FillPage = styled.div`
  /* make site content fill the page - in future & with the addition of more
  stuff to fill out the page naturally, this can be deleted */
  min-height: 90vh;
`

const PageHeader = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
`

export default App
