import React from 'react'
import PropTypes from 'prop-types';

function Page({ content }) {
    return (
        <div>
            <h1>This is the generic page ${content}</h1>
        </div>
    )
}

Page.propTypes = {
    content: PropTypes.string
};

export default Page