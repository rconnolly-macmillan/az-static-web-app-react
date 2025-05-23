import React from 'react'
import PropTypes from 'prop-types';

function Home({ data }) {
    return (
        <div>
            <h1>{data}</h1>
            <a href="/.auth/login/aad">Login</a>
            <a href="/.auth/logout/aad">Logout</a>
        </div>
    )
}

Home.propTypes = {
    data: PropTypes.string
};

export default Home