import React, { useState, useEffect } from 'react'
import '../css/contributors.css'

const Contributors: React.FC = () => {
  const [arrContributors, setArrContributors] = useState([])

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
    <div>
      <p></p>
    </div>
  )
}

export default Contributors
