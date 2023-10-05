import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favourites : [],
    total : 0,
    addFavourite: (favouriteMeetup)=>{},
    removeFavourite: (meetupID)=>{},
    itemFavourite: (meetupID)=>{},
});

export function FavouritesContextProvider(props){

    const [userFavourites, setUserFavourites] = useState([]);

    function addFavouriteHandler(favouriteMeetup){
        setUserFavourites((prevValues)=>{
            return prevValues.concat(favouriteMeetup);
        });
    }

    function removeFavouriteHandler(meetupId)
    {
        setUserFavourites((prev)=>{
            return prev.filter(meetup=>
                meetup.id !== meetupId
            )
        })
    }

    function itemFavouriteHandler(meetupId){
        return userFavourites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favourites: userFavourites,
        total: userFavourites.length,

        // pointers to function
        addFavourite : addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemFavourite : itemFavouriteHandler,

    };


    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}


export default FavouritesContext;