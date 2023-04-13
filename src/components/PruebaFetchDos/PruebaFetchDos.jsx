import React from 'react'
import useFetch from '../../utils/hooks/useFetch'

const PruebaFetchDos = () => {

  const {data} = useFetch( "https://jsonplaceholder.typicode.com/albums" , [] )

  return (
    <div>
      {
        data?.map(album => <h3 key={album.id}>{album.title}</h3>)
      }
    </div>
  )
}

export default PruebaFetchDos