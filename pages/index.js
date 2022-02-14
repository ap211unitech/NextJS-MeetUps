import MeetUpList from '../components/meetups/MeetupList';

const HomePage = (props) => {
  return (
    <MeetUpList meetups={props.meetUps} />
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
    const res = await fetch('http://localhost:3000/api/meetup', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    return data.data;
  }
  catch (e) {
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