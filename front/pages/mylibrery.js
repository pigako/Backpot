import React from 'react';
import PropTypes from 'prop-types';

const MyLibrery = ({ userId }) => {
  return (
    <div>
      <h1>MyLibrery / {userId}</h1>
    </div>
  );
};

MyLibrery.propTypes = {
  id: PropTypes.string.isRequired,
};

MyLibrery.getInitialProps = context => {
  const userId = context.query.userId;
  return userId;
};

export default MyLibrery;
