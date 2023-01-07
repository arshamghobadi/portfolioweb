import React from 'react';
import Loading from '../../shared/Loading';
import { Container, Grid, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_AUTHOR_INFO } from '../../graphql/queries';
import CardEL from '../../shared/CardEL';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { data, loading, error } = useQuery(GET_AUTHOR_INFO);

  if (loading) return <Loading />;
  if (error) return <h3>error....</h3>;

  const { name, intro, picture } = data.authors[0];
  const projectData = data.projects;

  return (
    <Container maxWidth="lg">
      <Grid item display="flex" flexDirection="column" alignItems="center">
        <Typography
          fontFamily="uisecondaryerif"
          fontWeight="bold"
          component="h3"
          variant="h2"
        >
          Welcome to my Portfolio
        </Typography>
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
            mx={3}
            fontFamily="uisecondaryerif"
            fontWeight="400"
            component="h3"
            variant="h4"
          >
            {name}
          </Typography>
          <Typography
            mx={3}
            mt={3}
            fontFamily="uisecondaryerif"
            fontWeight="300"
            component="h3"
            variant="h5"
          >
            {intro}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <img
            alt="Arsham-Ghobadi"
            src={picture.url}
            style={{
              marginLeft: 60,
              borderRadius: 80,
              width: 220,
              height: 220,
            }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={6}>
        {projectData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.name}>
            <Link to={`/portfolio/${item.slug}`}>
              <CardEL {...item} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
