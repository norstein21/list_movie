import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}`
console.log(API_ENDPOINT)
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isLoading,setIsLoading] = useState(true);
  const [dataMovie,setDataMovie] = useState([]);
  const [error,setError] = useState({show:false,message:''});
  const [query,setQuery] = useState('one piece')

  const fetchFilm = async (url) =>{
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if(data.Response === 'True'){
        setDataMovie(data.Search)
        setError({show:false,msg:''})
      } else{
        setError({show:true,msg:data.Error})
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchFilm(`${API_ENDPOINT}&s=${query}`)
  },[query])

  return <AppContext.Provider value={{isLoading, error,dataMovie,query,setQuery}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
