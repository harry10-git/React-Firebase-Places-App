import React, {useContext  } from 'react'
import classes from './MeetupItem.module.css'
import Card from '../ui/Card'

import FavouritesContext from '../../store/fav-context'


const MeetupItem = (props) => {
  const favCtx =  useContext(FavouritesContext);

  const itemIsFavourite = favCtx.itemFavourite(props.id);

   function toggleFavouriteHandler(){
      if(itemIsFavourite)
      {
        favCtx.removeFavourite(props.id);
      }
      else{
        favCtx.addFavourite({
          id: props.id,
          title: props.title,
          description: props.description,
          image: props.image,
          address: props.address,
        })
      }
   }


  return (
    <li className={classes.item}>
    <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>

        <div className={classes.actions}>
            <button onClick={toggleFavouriteHandler}>{itemIsFavourite ? 'Remove': 'Add Favourites'}</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem