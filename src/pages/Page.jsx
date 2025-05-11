import React from 'react'
import PropTypes from 'prop-types';

function Page({ content }) {
    return (
        <div>
            <h1>${content}</h1>
        </div>
    )
}

Page.propTypes = {
    content: PropTypes.string
};

export default Page