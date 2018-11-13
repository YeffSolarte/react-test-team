import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading/Loading';

const WrapMessage = (props) => {
  const {
    error,
    loaded,
    loading,
    children,
  } = props;
  return (
    <div>
      {error && <span> Something went wrong... :(</span>}
      {loading && <Loading />}

      {loaded && children}
    </div>
  );
};

WrapMessage.propTypes = {
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default WrapMessage;
