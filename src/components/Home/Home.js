import React from 'react'
import '../Home/Home.scss';
const Home = (props) => {
    console.log(props.name)
  return (
    <div className='homepage-container'>
      <div className='home-page'>
        <h1>Wel come to our page {props.name}</h1>
        </div>

    </div>
  )
}

export default Home