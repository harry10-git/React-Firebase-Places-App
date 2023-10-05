import React, {useRef} from 'react'
import Card from '../ui/Card'

import classes from './NewForm.module.css'

const NewForm = (props) => {
    // refs are very useful for reading values
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();




    function submitHandler(e){
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;

        const meetupData = {
            title : enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        // console.log(meetupData);

        props.addMeetup(meetupData);



    }


  return (
    <Card>
        <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
            <label htmlFor="title">title</label>
            <input type="text" required id="title" ref={titleInputRef} />
        </div>

        <div className={classes.control}>
            <label htmlFor="image">image</label>
            <input type="url" required id="image" ref={imageInputRef} />
        </div>

        <div className={classes.control}>
            <label htmlFor="address">address</label>
            <input type="text" required id="address" ref={addressInputRef} />
        </div>

        <div className={classes.control}>
            <label htmlFor="description">description</label>
            <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
        </div>

        <div className={classes.actions}>
            <button>Submit</button>
        </div>


        </form>
    </Card>
  )
}

export default NewForm