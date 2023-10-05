import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

import FavouritesContext from '../../store/fav-context';

import classes from './MainNav.module.css';

const MainNav = () => {

    const favCtx = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>New Meetup</Link>
                </li>
                <li>
                    <Link to='/favourites'>
                    My Favourites
                    <span className={classes.badge}>{favCtx.total}</span>
                    </Link>
                </li>
            </ul>
        </nav>

    </header>
  )
}

export default MainNav