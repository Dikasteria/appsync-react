import React from 'react';
import './App.css';
import Form from './Form';
import { Connect } from 'aws-amplify-react';
import {graphqlOperation} from "aws-amplify";
import { createBlog } from './graphql/mutations';
import Blogs from './Blogs';

function App() {
  return (
    <div className="App">
      {/* 'createBlog' comes from the mutations file in the grahpql folder as this is 
      the mutation we need to create a blog post. */}
      <Connect mutation={graphqlOperation(createBlog)}>
        {({mutation}:any) => (
        <Form 
        onSubmit={async (input: any) => {
          const response = await mutation({input});
          console.log(response)
        }}
        />)}
      </Connect>
      <Blogs/>
    </div>
  );
}

export default App;
