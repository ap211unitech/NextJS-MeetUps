import MeetUpList from '../components/meetups/MeetupList';
import Head from 'next/head';
import { Fragment } from 'react';
import { server } from '../config/index';

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>NextJS MeetUps</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetUpList meetups={props.meetUps} />
    </Fragment>
  )
}

// export async function getServerSideProps(context) {
//   // Fetch Data from API
//   return {
//     props: {
//       meetUps: dummy
//     }
//   }
// }

const fetchAllMeetUps = async () => {
  try {
    const res = await fetch(`${server}/api/meetup`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    return data.data;
  }
  catch (e) {
    console.log(e)
    return [];
  }
}

export async function getStaticProps() {
  // Fetch Data from API
  return {
    props: {
      meetUps: await fetchAllMeetUps()
    },
    revalidate: 1
  }

}

export default HomePage