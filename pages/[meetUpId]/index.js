import { Fragment } from 'react';
import MeetUpDetail from '../../components/meetups/MeetUpDetail';
import Head from 'next/head';
import { server } from '../../config/index';

const MeetUpDetails = ({ meetUpData: { image, id, title, address, description } }) => {
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content={description}
                />
            </Head>
            <MeetUpDetail
                image={image}
                title={title}
                address={address}
                description={description}
            />
        </Fragment>
    )
}

export async function getStaticPaths() {

    const res = await fetch(`${server}/api/meetup`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();

    return {
        fallback: false,
        paths: data.data.map(meetup => ({ params: { meetUpId: meetup._id.toString() } }))
    }
}

export async function getStaticProps(context) {
    const meetUpId = context.params.meetUpId;
    const res = await fetch(`http://localhost:3000/api/meetupbyid`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: meetUpId })
    });
    const data = await res.json();

    return {
        props: {
            meetUpData: {
                image: data.image,
                id: data._id,
                title: data.title,
                address: data.address,
                description: data.description
            }
        }
    }
}

export default MeetUpDetails