import React from 'react';
import MeetUpDetail from '../../components/meetups/MeetUpDetail';


const MeetUpDetails = ({ meetUpData: { image, id, title, address, description } }) => {
    return (
        <MeetUpDetail
            image={image}
            title={title}
            address={address}
            description={description}
        />
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetUpId: '1'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    const meetUpId = context.params.meetUpId;
    return {
        props: {
            meetUpData: {
                image: 'https://thumbs.dreamstime.com/b/random-building-asheville-north-carolina-usa-taken-december-65696557.jpg',
                id: meetUpId,
                title: 'A First Meetup',
                address: '108, Achalda, Auraiya',
                description: 'This is first meetup!'
            }
        }
    }
}

export default MeetUpDetails