import React from 'react'
import NewMeetUpForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

const index = () => {

    const router = useRouter();

    const onAddMeetup = async (enteredMeetUpData) => {
        try {
            const res = await fetch('/api/meetup', {
                method: 'POST',
                body: JSON.stringify(enteredMeetUpData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await res.json();
            console.log(data);
            router.push('/');

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <NewMeetUpForm onAddMeetup={onAddMeetup} />
    )
}

export default index