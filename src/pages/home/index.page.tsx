import React, { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    console.log('render')
  }, [])
  return <div>Home</div>
}

export default Home
