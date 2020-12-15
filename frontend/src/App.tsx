import React from 'react'
import './css/app.css'
import Footer from './components/footer'
import Contributors from './components/contributors'
import Converter from './components/converter'

const App: React.FC = () => {
  return (
    <div className='app'>
      <Converter />
      <Contributors />
      <Footer />
    </div>
  )
}

export default App
