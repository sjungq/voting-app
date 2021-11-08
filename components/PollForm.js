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

const PollForm = ({ poll, registerResponse }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    registerResponse();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Paper className={styles.formContainer} sx={{ pb: 2, pt: 1 }}>
        <Typography className={styles.prompt} variant='h5'>
          {poll.pollPrompt}
        </Typography>
        <Container sx={{ ml: 1 }}>
          <FormControl>
            <RadioGroup>
              {poll.pollOptions.map((option) => (
                <FormControlLabel
                  key={option._id}
                  value={option.optionText}
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
