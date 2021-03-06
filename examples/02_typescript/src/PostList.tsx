import React from 'react';

import { useQuery, gql } from '@apollo/client';

const QUERY_POSTS = gql`
query queryPosts {
  posts {
    id
    text
  }
}
`;

type Data = {
  posts: {
    text: string;
    id: number;
  }[];
};

const PostList = () => {
  const { loading, error, data } = useQuery<Data>(QUERY_POSTS);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {`${error}`}</div>;
  if (!data) return <div>No Data</div>;
  return (
    <ul>
      {data.posts.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default PostList;
