import styles from '../styles/Navbar.module.css';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <AppBar position='sticky' color='primary'>
        <Toolbar>
          <Typography
            variant='h5'
            component='div'
            sx={{ flexGrow: 1 }}
            color='inherit'
          >
            StrawVote
          </Typography>
          <Button variant='contained' color='secondary'>
            Create Poll
          </Button>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Navbar;
