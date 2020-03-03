import React from 'react';
import PropTypes from 'prop-types';
import { LOAD_USER_REQUEST } from '../reducers/user';

const Profile = ({ id }) => {
  return (
    <div>
      <h1>Profile / {id}</h1>
    </div>
  );
};

Profile.propTypes = {
  id: PropTypes.string.isRequired,
};

Profile.getInitialProps = async context => {
  const id = context.query.id;
  return { id };
};

export default Profile;
