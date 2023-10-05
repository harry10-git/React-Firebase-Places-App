import React from 'react'
import { useContext } from 'react'

import MeetupList from '../components/meetups/MeetupList'

import FavouritesContext from '../store/fav-context'

const Favourites = () => {

  const favCtx = useContext(FavouritesContext);


  return (
    <section>
      <h1>My Favourites</h1>

      {favCtx.total ? 
      <MeetupList meetups={favCtx.favourites}></MeetupList>
      : <p>'No favourites ... add some' </p>
      }
    </section>
  )
}

export default Favourites