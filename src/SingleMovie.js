import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {
  const {id} = useParams()
  console.log(id)
  const [film,setFilm] = useState({})
  const [isLoading,setIsLoading] = useState(true)
  const [isError,setIsError] = useState({show:false,msg:''})

  const fetchMovie = async (url) =>{
    setIsLoading(true)
    const response = await fetch(url);
    const data = await response.json()
    if (data==='False'){
      setIsLoading(false)
      setIsError({show:true,msg:data.Error})
    } else{
      setFilm(data)
      setIsLoading(false)
    }
  }

  useEffect(()=>{
    fetchMovie(`${API_ENDPOINT}&i=${id}`)
  },[id])


  if(isLoading){
    return <div className='loading'></div>
  }

  if(isError.show){
    return (
      <div className='page-error'>
        <h1>{isError.msg}</h1>
        <Link to="/" className='btn'>
          Back to Movies
        </Link>
      </div>
    )
  }

  //destructure setelah error,loading karna bydefault arraynya kosong
  const {Poster:poster,Title:title,Plot:plot,Year:year} = film;

  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to='/' className='btn'>
          Back to Movies
        </Link>
      </div>
    </section>
  )
}

export default SingleMovie
