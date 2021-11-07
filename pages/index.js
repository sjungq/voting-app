import axios from 'axios';

const Index = ({ polls }) => {
  return (
    <div>
      <div>
        {polls.map((poll) => (
          <ul key={poll._id}>
            <h3>{poll.pollPrompt}</h3>
            {poll.pollOptions.map((option) => (
              <li key={option._id}>
                <span>{option.optionText}</span> -
                <span> {option.voteCount} votes</span>
              </li>
            ))}
          </ul>
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
