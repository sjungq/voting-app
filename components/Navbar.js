import styles from '../styles/Navbar.module.css';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/Link';
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <AppBar position='sticky' color='primary'>
        <Toolbar>
          <Link href='/'>
            <Typography
              variant='h5'
              component='div'
              sx={{ flexGrow: 1 }}
              color='inherit'
            >
              StrawVote
            </Typography>
          </Link>
          <Link href='/create'>
            <Button variant='contained' color='secondary'>
              Create Poll
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Navbar;
