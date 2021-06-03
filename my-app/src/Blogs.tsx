import { graphqlOperation } from '@aws-amplify/api-graphql';
import { Connect } from 'aws-amplify-react';
import React from 'react';
import { listBlogs } from './graphql/queries';

const Blogs = () => {
    return (
        <Connect
        query={graphqlOperation(listBlogs)}
        >
            {({data: { listBlogs: blogs}}:any) => {
                if(!blogs) {
                    return null
                }
                return blogs.items.map((blog:any) => (
                    <div> {blog.name} </div>
                ))
            }}
        </Connect>
    );
};

export default Blogs;