import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Contributors: React.FC = () => {
  // state & accompanying types definition
  const [arrContributors, setArrContributors] = useState<
    { avatar_url: string; html_url: string; login: string; id: number }[]
  >([])

  // triggers the getContributors function on load
  useEffect(() => {
    getContributors()
  }, [])

  // gets contributors from the Github Api
  const getContributors = async () => {
    const rawData = await fetch(
      'https://api.github.com/repos/mrbrianevans/number-format-converter/contributors'
    )
    const data = await rawData.json()
    setArrContributors(data)
    console.log(data)
  }

  return (
    <>
      <Title>Contributors</Title>
      <Wrapper>
        {arrContributors.map((Contributors: any) => (
          <div key={Contributors.id}>
            <a
              href={Contributors.html_url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={Contributors.avatar_url}
                title={Contributors.login}
                alt='Github Avatar'
              />
            </a>
          </div>
        ))}
      </Wrapper>
    </>
  )
}
const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
  font-size: 18px;
`

const Image = styled.img`
  border-radius: 50%;
  width: 60px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`

export default Contributors
