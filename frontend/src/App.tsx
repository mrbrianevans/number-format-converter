import React from 'react'
import styled from 'styled-components'
import './css/app.css'
import Footer from './components/footer'
import Contributors from './components/contributors'
import Converter from './components/converter'
import GitHubButton from 'react-github-btn'

const App: React.FC = () => {
  return (
    <AppWrapper className='app'>
      <FillPage>
        <PageHeader>Number Format Converter</PageHeader>
        <RepositoryActions>
          <GitHubButton
            href='https://github.com/mrbrianevans/number-format-converter'
            data-color-scheme='no-preference: light; light: dark; dark: light;'
            data-icon='octicon-star'
            data-size='large'
            data-show-count='true'
            aria-label='Star mrbrianevans/number-format-converter on GitHub'
          >
            Star
          </GitHubButton>
          <GitHubButton
            href='https://github.com/mrbrianevans/number-format-converter/issues/new'
            data-color-scheme='no-preference: light; light: dark; dark: light;'
            data-icon='octicon-issue-opened'
            data-size='large'
            data-show-count='true'
            aria-label='Issue mrbrianevans/number-format-converter on GitHub'
          >
            Issue
          </GitHubButton>
        </RepositoryActions>
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
const RepositoryActions = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
`

export default App
