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

export async function getStaticProps() {
  // Fetch Data from API
  return {
    props: {
      meetUps: dummy
    },
    revalidate: 1
  }
}

export default HomePage