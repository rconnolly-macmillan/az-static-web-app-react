import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

function Page({ content }) {
    const [data, setData] = useState('');
    useEffect(() => {
        (async function () {
            const res = await fetch(`/api/message`, {content})
                .then(res => res.json());

            setData(res);
        })();
    });

    return (
        <div>
            <h1>{content}</h1>
            <p>Returned data: {data}</p>
        </div>
    )
}

Page.propTypes = {
    content: PropTypes.string
};

export default Page