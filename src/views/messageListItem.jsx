import React from 'react'
import { findMemberWithId } from '../selectors/selectors'
import Avatar from './avatar';
import TimeStamp from './timeStamp';
import PropTypes from 'prop-types';

const MessageListItem = ({msg, members}) => {
  let member = findMemberWithId(members, msg.userId);
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
  members : [],
};

MessageListItem.propTypes = {
  msg: PropTypes.object.isRequired,
  members: PropTypes.oneOfType([PropTypes.array,PropTypes.object]).isRequired,
};

export default MessageListItem
                                            