import styles from '../styles/Navbar.module.css';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
            color='inherit'
          >
            StrawVote
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Navbar;
