import React, {useState, useEffect} from 'react'
import MeetupList from '../components/meetups/MeetupList';


const AllMeetUps = () => {
  const [isLoading, setIsLoading] =  useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(()=>{
   setIsLoading(true); 
  // no need to configure fetch , as default is get
  fetch('https://react-getting-started-4aabf-default-rtdb.firebaseio.com/meetups.json'
  ).then((response)=>{
    return response.json();   // json will also return a promise
  }).then((data)=>{
      // convert to array
      const meetups = [];
      for(const key in data)
      {
        const meetup = {
          id: key,
          ...data[key]  // * spread operator *
        };
      meetups.push(meetup);
      };

      setIsLoading(false);
      setLoadedMeetups(meetups);
  });
  }, []);
  // add all external values to the array the effect function relies on


  if(isLoading){
    return <section>
      <p>loading....</p>
    </section>
  };

  return (
    <div>
        <h1>All Meetups</h1>
        
       <MeetupList meetups={loadedMeetups} />

    </div>
  )
}

export default AllMeetUps