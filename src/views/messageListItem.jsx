import React from 'react'
import Avatar from './avatar';
import TimeStamp from './timeStamp';
import PropTypes from 'prop-types';

const MessageListItem = ({msg, member}) => {
  const email = member?member.email:'';
  return (
    <li className='tooltip'>
      <div className='horizontal'>
        <span className='tooltiptext'>{email}</span>
        {member ? <Avatar avatar={member.avatar}/> : ''}
      </div>
      {msg.message}
      <TimeStamp timeStamp={msg.timestamp}/>
    </li>)
};

MessageListItem.defaultProps = {
  msg: {},
  member : {},
};

MessageListItem.propTypes = {
  msg: PropTypes.object.isRequired,
  member: PropTypes.object
};

export default MessageListItem
                                            