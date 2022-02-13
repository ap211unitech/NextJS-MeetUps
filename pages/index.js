import React, { useEffect, useState } from 'react'
import MeetUpList from '../components/meetups/MeetupList';

const dummy = [
  {
    id: '1',
    title: 'A first meetup',
    image: 'https://thumbs.dreamstime.com/b/random-building-asheville-north-carolina-usa-taken-december-65696557.jpg',
    address: '108, Achalda, Auraiya',
    description: 'This is first meetup!'
  }
]

const HomePage = () => {

  const [meetUps, setMeetUps] = useState([]);
  useEffect(() => {
    setMeetUps(dummy);
  }, [])

  return (
    <MeetUpList meetups={meetUps} />
  )
}

export default HomePage