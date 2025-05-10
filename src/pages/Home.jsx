import React from 'react'
import PropTypes from 'prop-types';

function Home({ data }) {
    return (
        <div>
            <h1>This is the home page ${data}</h1>
            <a href="/.auth/login/aad">Login</a>
        </div>
    )
}

Home.propTypes = {
    data: PropTypes.string
};

export default Home