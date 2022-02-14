import { Fragment } from 'react'
import NewMeetUpForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import Head from 'next/head';

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
        <Fragment>
            <Head>
                <title>Add a new MeetUp</title>
                <meta
                    name="description"
                    content="Add your own MeetUps and create amazing networking opportunities."
                />
            </Head>
            <NewMeetUpForm onAddMeetup={onAddMeetup} />
        </Fragment>
    )
}

export default index