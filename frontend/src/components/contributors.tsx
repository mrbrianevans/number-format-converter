import React, { useState, useEffect } from 'react'
import '../css/contributors.css'

const Contributors: React.FC = () => {
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
      {arrContributors.map((Contributors) => (
        <div key={Contributors.id}>
          <a
            href={Contributors.html_url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={Contributors.avatar_url}
              title={Contributors.login}
              alt='Github Avatar'
            />
          </a>
        </div>
      ))}
    </>
  )
}

export default Contributors
