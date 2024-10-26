import React from 'react'
import Meta from './Meta';
const Home = () => {
  return (
     <div>
      <Meta title="Another Page" description="This is another page description." />
      <h2>Another Component</h2>
      <p>This is another component in your SSR application.</p>
    </div>
  )
}

export default Home