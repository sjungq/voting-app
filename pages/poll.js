import axios from 'axios';
import PollForm from '../components/PollForm';
const PollPage = ({ poll }) => {
  return (
    <div>
      <h1>Testing!</h1>
      <PollForm poll={poll} />
    </div>
  );
};

PollPage.getInitialProps = async ({ query }) => {
  try {
    const res = await axios.get(
      `https://voting-app-sj.herokuapp.com/api/poll?pollId=${query.pollId}`
    );
    const { data } = res;
    return { ...query, poll: data.data };
  } catch (error) {
    console.log(error);
  }
};

// export async function getServerSideProps(context) {
//   const res = await axios.get(`http://localhost:4000/api/poll`);
//   const { data } = res;

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: {},
//   };
// }

export default PollPage;
