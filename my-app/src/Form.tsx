import React, { useState } from 'react';

interface Props {
    onSubmit: Function;

};


const Form = ({onSubmit}: Props) => {

    const [data, setData] = useState<{[key: string]: any}>({});

    const handleChange = (e:any) => {
        const {name, value} = e.target;
        setData({[name]: value});
    };

    return (
        <div>
            <form
            onSubmit={async(e) => {
                e.preventDefault();
                onSubmit(data)
            } }
            >
                <h3> Create Blog </h3>
                <input 
                name="name"
                placeholder="name"
                value={data.name}
                onChange={(e) => handleChange(e)}
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default Form;