import axios from 'axios';
import PollForm from '../components/PollForm';
const PollPage = ({ poll }) => {
  return (
    <div>
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
export default PollPage;
