

import { useRouter } from 'next/router';

export async function getStaticPaths() {

  const paths = [
    { params: { slug: 'post-1' } },
    { params: { slug: 'post-2' } },

  ];

  return {
    paths,
    fallback: false 
  };
}

export async function getStaticProps({ params }) {

  const { slug } = params;

  const postData = { title: `Post ${slug}`, content: 'Lorem ipsum...' };

  return {
    props: {
      postData
    }
  };
}

export default function Post({ postData }) {
  const router = useRouter();


  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.content}</p>
    </div>
  );
}
