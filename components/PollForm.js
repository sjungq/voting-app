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

const PollForm = ({ poll, registerResponse }) => {
  const router = useRouter();
  const [selectedOptionId, setSelectedOptionId] = useState(0);

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedOptionId(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(`api/poll`, {
        body: {
          pollId: poll._id,
          optionId: selectedOptionId,
        },
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      console.log(res);

      await router.push({ pathname: '/' });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Paper className={styles.formContainer} sx={{ pb: 2, pt: 1 }}>
        <Typography className={styles.prompt} variant='h5'>
          {poll.pollPrompt}
        </Typography>
        <Container sx={{ ml: 1 }}>
          <FormControl>
            <RadioGroup onChange={handleChange}>
              {poll.pollOptions.map((option) => (
                <FormControlLabel
                  key={option._id}
                  value={option._id}
                  control={<Radio />}
                  label={option.optionText}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Container>
        <Button
          onClick={handleSubmit}
          variant='contained'
          color='secondary'
          sx={{ width: 1 / 4 }}
        >
          Submit Vote
        </Button>
      </Paper>
    </form>
  );
};

export default PollForm;
