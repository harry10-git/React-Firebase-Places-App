import React from 'react'
import {useNavigate} from 'react-router-dom'
import NewForm from '../components/meetups/NewForm'


const NewMeetUp = () => {

  // useNavigate to load home page after POST request
  const navigate = useNavigate(); 

  function addMeetupHandler(meetup)
  {
    // sent post request to Firebase

    fetch(
      'https://react-getting-started-4aabf-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST', 
        body: JSON.stringify(meetup),
        headers:{
          'Content-Type': 'application/json'
        }
      }
      ).then(()=>{
        navigate('/');
      }); 

      // navigate back to all meetups
    

  }

  return (
    <section>
    <h1>Add New Meetup</h1>

    <NewForm addMeetup={addMeetupHandler} />

    </section>
  )
}

export default NewMeetUp