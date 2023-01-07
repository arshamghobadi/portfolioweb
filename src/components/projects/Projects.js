import React from 'react';
import { Typography, Grid, Container } from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_AUTHOR_INFO } from '../../graphql/queries';
import { Link } from 'react-router-dom';
import CardEL from '../../shared/CardEL';
import Loading from '../../shared/Loading';

const Projects = () => {
  const { data, loading, error } = useQuery(GET_AUTHOR_INFO);

  if (loading) return <Loading />;
  if (error) return <h3>error....</h3>;
  const projectData = data.projects;

  return (
    <>
      <Container>
        <Typography align="center" variant="h3" fontWeight="bold">
          Recent Projects by Me
        </Typography>
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
    </>
  );
};

export default Projects;
