import React from 'react';
import {timeStampFormat} from '../utils/formatters'
import PropTypes from 'prop-types';
const TimeStamp = ({timeStamp}) => {
  const formattedTimeStamp = timeStampFormat(timeStamp);
  return (<div>{formattedTimeStamp}</div>)
};

TimeStamp.defaultProps = {
  timeStamp: ''
};

TimeStamp.propTypes = {
  timeStamp: PropTypes.string.isRequired
};

export default TimeStamp   
