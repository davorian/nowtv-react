import React from 'react';
import PropTypes from 'prop-types';
const Avatar = ({avatar}) => {
  return (<div className='imageContainer'><img alt='BOO HOO' src={avatar}/></div>)
};

Avatar.defaultProps = {
  avatar: ''
};

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired
};

export default Avatar