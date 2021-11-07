import axios from 'axios';

const Index = ({ polls }) => {
  return (
    <div>
      <p>Test</p>
      <ul></ul>
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await axios.get(`https://voting-app-sj.herokuapp.com/api/test`);
  const { data } = res;
  return { polls: data };
};

export default Index;
