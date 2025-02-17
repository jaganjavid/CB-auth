import React from 'react'

import useFetch from "../hooks/useFetch";
import Card from '../components/Card';

const MovieList = ({apiPath}) => {

  
  const { data:movies } = useFetch(apiPath);
 

  return (
    <main className='min-h-screen'>
       <section className='max-w-7xl max-auto py-7 m-auto'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3'>
               {
                  movies.map((movie) => (
                    <Card key={movie.id} movie={movie}/>
                  ))
               }
            </div>
       </section>
    </main>
  )
}

export default MovieList