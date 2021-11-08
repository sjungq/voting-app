import Link from 'next/Link';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Paper,
  Button,
} from '@mui/material';

const PollForm = ({ poll, registerResponse }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    registerResponse();
  };
  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <Typography>{poll.pollPrompt}</Typography>
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
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </Paper>
  );
};

export default PollForm;
