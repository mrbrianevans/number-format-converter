import React from 'react'
import styled from 'styled-components'

const Footer: React.FC = () => {
  return (
    <FooterWrap>
      <ProjectLink>
        See the Project on{'  '}
        <a
          className='App-link'
          href='https://github.com/mrbrianevans/number-format-converter'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github <Image alt='link to github repository' src='github-logo.png' />
        </a>
      </ProjectLink>

      <Maintainers>
        Maintained by{' '}
        <a target='_blank' href='http://brianevans.tech/'>
          Brian Evans
        </a>{' '}
        and{' '}
        <a target='_blank' href='https://macbase.co.za/'>
          Daniel Mamphekgo
        </a>
      </Maintainers>
    </FooterWrap>
  )
}

const Image = styled.img`
  height: 15px;
`

const FooterWrap = styled.footer`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  background-color: rgb(0 0 0 / 0.1);
  border-top: 1px solid;
  bottom: 0;
  padding: 20px 10px;
`

const ProjectLink = styled.div``

const Maintainers = styled.div``

export default Footer
