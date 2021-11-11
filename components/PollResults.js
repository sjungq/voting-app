import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Paper,
  Button,
  Container,
} from '@mui/material';
import styles from '../styles/PollForm.module.css';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

const PollResults = ({ poll }) => {
  return (
    <Paper className={styles.formContainer} sx={{ pb: 2, pt: 1 }}>
      <Typography className={styles.prompt} variant='h5'>
        {poll.pollPrompt}
      </Typography>
      <Container sx={{ ml: 1 }}>
        {poll.pollOptions.map((option, index) => (
          <Container key={option._id}>
            <Typography variant='h5'>
              {index + 1}. {option.optionText} - {option.voteCount} votes
            </Typography>
          </Container>
        ))}
      </Container>
    </Paper>
  );
};

export default PollResults;
