import React from 'react'
import NewMeetUpForm from '../../components/meetups/NewMeetupForm';

const index = () => {

    const onAddMeetup = (enteredMeetUpData) => {
        console.log(enteredMeetUpData)
    }

    return (
        <NewMeetUpForm onAddMeetup={onAddMeetup} />
    )
}

export default index