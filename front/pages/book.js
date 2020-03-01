import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ bookId }) => {
  return (
    <div>
      <h1>Book / {bookId}</h1>
    </div>
  );
};

Book.propTypes = {
  bookId: PropTypes.string.isRequired,
};

Book.getInitialProps = async context => {
  const bookId = context.query.bookid;
  return { bookId };
};

export default Book;
