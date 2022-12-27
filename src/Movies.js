import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const noPhoto =
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
        const {Poster:foto,Title:judul,Year:tahun,imdbID:id} = item;
        return (
          <Link to={`movies/${id}`}>
          <article className='movie' key={id}>
            <img src={foto === 'N/A' ? noPhoto : foto} alt={judul} />
            <div className='movie-info'>
              <h4>{judul}</h4>
              <p>{tahun}</p>
            </div>
          </article>
          </Link>
        )
      })}
    </section>
  )
}

export default Movies
