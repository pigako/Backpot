import React from 'react';
import PropTypes from 'prop-types';

const MyLibrery = ({ id }) => {
  return (
    <div>
      <h1>MyLibrery / {id}</h1>
    </div>
  );
};

MyLibrery.propTypes = {
  id: PropTypes.string.isRequired,
};

MyLibrery.getInitialProps = async context => {
  const id = context.query.id;
  return { id };
};

export default MyLibrery;
