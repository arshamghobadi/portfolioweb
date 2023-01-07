import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container, Grid, Button } from '@mui/material';
import { GET_PROJECT_INFO } from '../graphql/queries';
import { useQuery } from '@apollo/client';
const ProjectsDetials = () => {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(GET_PROJECT_INFO, {
    variables: { slug },
  });
  if (loading) return <h3>loading....</h3>;
  if (error) return <h3>error....</h3>;

  const { description, image, name, tags, sourceCode, demo } = data.project;

  return (
    <>
      <Container>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Grid item sx={{ width: 'auto' }}>
            <img style={{ maxWidth: 900 }} src={image[0].url} alt={name} />
          </Grid>
          <Grid item maxWidth={700} padding={4}>
            <Typography
              fontFamily="uisecondaryerif"
              variant="h4"
              fontWeight="bold"
            >
              {name}
            </Typography>
            {tags.map((item) => (
              <Button
                sx={{ margin: '5px', borderRadius: '10px' }}
                variant="contained"
                key={item}
              >
                {item}
              </Button>
            ))}
            <div style={{ padding: '10px' }}>
              <a style={{ color: '#EF9A95' }} href={demo}>
                Demo
              </a>
              <a
                style={{ marginLeft: '20px', color: '#EF9A95' }}
                href={sourceCode}
              >
                SourceCode
              </a>
            </div>
            <Typography>{description}</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProjectsDetials;
