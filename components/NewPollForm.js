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
import { useRouter } from 'next/router';

const NewPollForm = ({ addForm }) => {
  const router = useRouter();
  const [pollPrompt, setPollPrompt] = useState('');
  const [optionList, setOptionList] = useState([
    { optionText: '', voteCount: 0 },
    { optionText: '', voteCount: 0 },
  ]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
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

      //redirect to the page with newly created poll
      await router.push({ pathname: '/poll', query: { pollId: res.data } });
    } catch (error) {
      //need to do something here? form validation?
    }
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
              autoFocus
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
                    sx={{ width: 1 }}
                    onChange={(event) => handleInputChange(event, index)}
                  />
                  <Button
                    onClick={handleRemoveClick}
                    color='warning'
                    tabIndex={-1}
                  >
                    Delete
                  </Button>
                </div>
              );
            })}
            <Button onClick={handleAddClick} sx={{ mt: 2 }} variant='contained'>
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
