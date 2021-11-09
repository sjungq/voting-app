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
  const [optionList, setOptionList] = useState([
    { optionText: '', voteCount: 0 },
    { optionText: '', voteCount: 0 },
  ]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post(`api/create`, {
      body: {
        pollPrompt: pollPrompt,
        pollOptions: optionList,
      },
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
  };

  const handleAddClick = () => {
    setOptionList([...optionList, { optionText: '', voteCount: 0 }]);
  };

  const handleRemoveClick = (index) => {
    const list = [...optionList];
    list.splice(index, 1);
    setOptionList(list);
  };

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    const list = [...optionList];
    list[index]['optionText'] = value;
    setOptionList(list);
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
              onInput={(event) => setPollPrompt(event.target.value)}
            />
          </Container>
          <Container sx={{ my: 3 }}>
            {optionList.map((option, index) => {
              return (
                <div key={`option${index}Container`}>
                  <TextField
                    key={`option${index}`}
                    label={`Option ${index + 1}`}
                    variant='standard'
                    value={option.optionText}
                    onChange={(event) => handleInputChange(event, index)}
                    fullWidth
                  />
                  <Button onClick={handleRemoveClick} color='warning'>
                    Delete
                  </Button>
                </div>
              );
            })}
            <Button onClick={handleAddClick} variant='outlined'>
              Add New Option
            </Button>
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
