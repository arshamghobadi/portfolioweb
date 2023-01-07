import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BLOGS_INFO } from '../../graphql/queries';
import { Grid } from '@mui/material';
import PostsCard from './PostsCard';

import Loading from '../../shared/Loading';

const Posts = () => {
  const { data, loading, error } = useQuery(GET_BLOGS_INFO);
  if (loading) return <Loading />;
  if (error) return <h3>error....</h3>;

  return (
    <Grid
      display="flex"
      flexDirection="column"
      alignItems="center"
      container
      spacing={3}
      mt={4}
    >
      {data.posts.map((item) => (
        <Grid item xs={12} key={item.id}>
          <PostsCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
