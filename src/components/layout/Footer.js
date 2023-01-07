import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { IoLogoLinkedin } from 'react-icons/io';
const Footer = () => {
  return (
    <div style={{ backgroundColor: '#EF9A95', marginTop: '50px' }}>
      <Grid item display="flex" flexDirection="column" alignItems="center">
        <Grid mt={2} mb={2}>
          <Link
            style={{
              color: 'black',
              textDecoration: 'none',
              padding: '10px',
            }}
            to="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            style={{
              color: 'black',
              textDecoration: 'none',
              padding: '10px',
            }}
            to="/blogs"
          >
            Blogs
          </Link>
          <Link
            style={{
              color: 'black',
              textDecoration: 'none',
              padding: '10px',
            }}
            to="/about-me"
          >
            About me
          </Link>
        </Grid>
        <Grid mt={2} mb={2}>
          <a
            style={{ color: 'black' }}
            href="https://www.instagram.com/ghobadi.arsham"
          >
            <AiFillInstagram
              style={{ paddingRight: '5px', fontSize: '35px' }}
            />
          </a>
          <Link style={{ color: 'black' }} to={'/e-mail'}>
            <MdEmail style={{ paddingRight: '5px', fontSize: '35px' }} />
          </Link>
          <a
            style={{ color: 'black' }}
            href="https://www.linkedin.com/in/arsham-ghobadi-044b8aa1"
          >
            <IoLogoLinkedin style={{ paddingRight: '5px', fontSize: '35px' }} />
          </a>
        </Grid>
        <Grid>
          <Typography>ghobadi.arsham@gmail.com</Typography>
        </Grid>
        <Grid mt={2} mb={2}>
          <Typography>
            Copyright © 2022 - All right reserved Arsham ghobadi
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
