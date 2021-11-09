import axios from 'axios';
import PollForm from '../components/PollForm';
import Link from 'next/Link';
import { Container, Typography, Button, Box } from '@mui/material';
import styles from '../styles/index.module.css';

const Index = ({ polls }) => {
  const lol = () => console.log('hi!');
  return (
    <div>
      <main>
        <Container className={styles.hero} maxWidth='sm' sx={{ pt: 8, pb: 6 }}>
          <Typography component='h1' variant='h4'>
            Create simple multiple choice polls!
          </Typography>
          <Box
            sx={{ pt: 4 }}
            display='flex'
            direction='row'
            justifyContent='center'
          >
            <Link href='/create'>
              <Button variant='contained' color='secondary'>
                Create New Poll
              </Button>
            </Link>
          </Box>
        </Container>
      </main>

      <div>
        {polls === null ? (
          ''
        ) : (
          <Container>
            {polls.map((poll) => (
              <PollForm key={poll._id} poll={poll} registerResponse={lol} />
            ))}
          </Container>
        )}
      </div>
    </div>
  );
};

Index.getInitialProps = async () => {
  try {
    const res = await axios.get(`https://voting-app-sj.herokuapp.com/api/test`);
    const { data } = res.data;
    return { polls: data };
  } catch (error) {
    return { polls: null };
  }
};

export default Index;
