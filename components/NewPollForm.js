import {
  FormControl,
  TextField,
  Typography,
  Paper,
  Button,
  Container,
} from '@mui/material';
import axios from 'axios';
import styles from '../styles/NewPollForm.module.css';
import { useState } from 'react';

const NewPollForm = ({ addForm }) => {
  const [pollPrompt, setPollPrompt] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post(`api/create`, {
      body: {
        pollPrompt: pollPrompt,
        pollOptions: [
          { optionText: 'test option 1', voteCount: 0 },
          { optionText: 'test option 2', voteCount: 0 },
        ],
      },
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Container maxWidth='md' sx={{ mt: 6 }}>
        <Paper className={styles.formContainer} sx={{ pb: 2, pt: 1 }}>
          <Typography component='h1' variant='h4' sx={{ my: 3 }}>
            What would you like to ask?
          </Typography>
          <Container>
            <TextField
              id='promptField'
              label='Question'
              variant='outlined'
              fullWidth
              sx={{ mt: 5 }}
              value={pollPrompt}
              onInput={(e) => setPollPrompt(e.target.value)}
            />
          </Container>
          <Container sx={{ my: 3 }}>
            <TextField
              id='option1'
              label='Option 1'
              variant='standard'
              fullWidth
            />
            <TextField
              id='option2'
              label='Option 2'
              variant='standard'
              fullWidth
            />
          </Container>
          <Button
            onClick={handleSubmit}
            variant='contained'
            color='secondary'
            sx={{ width: 1 / 3, my: 2 }}
          >
            Create Poll
          </Button>
        </Paper>
      </Container>
    </form>
  );
};

export default NewPollForm;
