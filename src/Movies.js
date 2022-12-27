import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const {isLoading,dataMovie} = useGlobalContext()

  if(isLoading){
    return (
      <div className='loading'></div>
    )
  }

  return (
    <section className='movies'>
      {dataMovie.map((item)=>{
        return <h2>movies</h2>
      })}
    </section>
  )
}

export default Movies
