import axios from 'axios';
require('dotenv').config();
const Index = ({ data }) => {
  return (
    <div>
      <p>Test</p>
      <p>{data.id}</p>
      <p>{data.text}</p>
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await axios.get(`http://localhost:${PORT}/api/test`);
  return { data: res.data };
};

export default Index;
