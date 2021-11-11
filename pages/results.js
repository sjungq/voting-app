import axios from 'axios';
import PollResults from '../components/PollResults';

const ResultsPage = ({ poll }) => {
  return (
    <div>
      <PollResults poll={poll} />
    </div>
  );
};

ResultsPage.getInitialProps = async ({ query }) => {
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
export default ResultsPage;
