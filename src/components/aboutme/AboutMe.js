import React from 'react';
import { Container, Grid, Typography, CardContent } from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_AUTHOR_INFO } from '../../graphql/queries';
import sanitizeHtml from 'sanitize-html';
const AboutMe = () => {
  const { data, loading, error } = useQuery(GET_AUTHOR_INFO);

  if (loading) return <h3>loading....</h3>;
  if (error) return <h3>error....</h3>;

  const { name, intro, picture, bio, degree } = data.authors[0];

  return (
    <Container maxWidth="lg">
      <Grid item>
        <Typography
          fontFamily="uisecondaryerif"
          fontWeight="bold"
          component="h3"
          variant="h3"
        >
          Welcome to my Portfolio
        </Typography>
      </Grid>

      <Grid item xs={4}>
        <img
          alt="Arsham-Ghobadi"
          src={picture.url}
          style={{
            marginTop: 50,
            borderRadius: 80,
            width: 220,
            height: 220,
          }}
        />
      </Grid>

      <Grid
        container
        width="60vw"
        display="flex"
        alignItems="center"
        alignContent="space-between"
        mt={8}
      >
        <Grid item xs={8}>
          <Typography
            fontFamily="uisecondaryerif"
            fontWeight="400"
            component="h3"
            variant="h4"
          >
            {name}
          </Typography>
          <Typography
            mt={3}
            fontFamily="uisecondaryerif"
            fontWeight="300"
            component="h3"
            variant="h5"
          >
            {intro}
          </Typography>
        </Grid>

        <Grid paddingTop={3} item>
          <CardContent
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(bio) }}
            sx={{ fontWeight: '500', maxWidth: 700 }}
          ></CardContent>
        </Grid>
      </Grid>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {degree.map((item) => (
          <img
            style={{
              maxWidth: 600,
              paddingTop: 10,
            }}
            src={item.url}
            alt={item.filename}
            key={item.id}
          />
        ))}
      </div>
    </Container>
  );
};

export default AboutMe;
