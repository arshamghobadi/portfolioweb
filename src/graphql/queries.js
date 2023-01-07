import { gql } from '@apollo/client';
const GET_AUTHOR_INFO = gql`
  query MyQuery {
    authors {
      bio
      degree {
        url
        id
        fileName
      }
      name
      intro
      picture {
        url
      }
    }
    projects {
      image {
        url
      }
      description
      name
      slug
    }
  }
`;
const GET_BLOGS_INFO = gql`
  query Blogs {
    posts {
      content
      coverImage {
        url
      }
      title
      tags
      id
      shortText
    }
  }
`;
const GET_PROJECT_INFO = gql`
  query getproject($slug: String) {
    project(where: { slug: $slug }) {
      demo
      description
      name
      tags
      sourceCode
      image {
        url
      }
      slug
    }
  }
`;

export { GET_AUTHOR_INFO, GET_BLOGS_INFO, GET_PROJECT_INFO };
