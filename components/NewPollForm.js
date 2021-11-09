import {
  FormControl,
  TextField,
  Typography,
  Paper,
  Button,
  Container,
} from '@mui/material';
import styles from '../styles/NewPollForm.module.css';

const NewPollForm = ({ poll, addForm }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    addForm();
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
              id='prompt-field'
              label='Question'
              variant='outlined'
              fullWidth
              sx={{ mt: 5 }}
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
