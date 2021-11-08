import axios from 'axios';
import Palette from '../components/Palette';
import PollForm from '../components/PollForm';

const Index = ({ polls }) => {
  const lol = () => console.log('hi!');
  return (
    <div>
      <div>
        {polls.map((poll) => (
          <PollForm key={poll._id} poll={poll} registerResponse={lol} />
        ))}
      </div>
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await axios.get(`https://voting-app-sj.herokuapp.com/api/test`);
  const { data } = res.data;
  return { polls: data };
};

export default Index;
