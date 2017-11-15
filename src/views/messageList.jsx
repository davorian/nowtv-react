import React from 'react'
import MessageListItem from "./messageListItem";
import {sortItemsByDate} from '../utils/sortDates';
import PropTypes from 'prop-types';

const MessageList = ({messages, members}) => {
  if(!messages) return null;
  const sortedMessages = sortItemsByDate('timestamp', messages);
  return (<ul>
    {sortedMessages.map((msg, i) => {
      return <MessageListItem key={`msg${i}`} {...{msg, members}}/>
    })}
  </ul>)
};

MessageList.defaultProps = {
  messages: [],
  members : [],
};

MessageList.propTypes = {
  messages: PropTypes.oneOfType([PropTypes.array,PropTypes.object]).isRequired,
  members: PropTypes.oneOfType([PropTypes.array,PropTypes.object]).isRequired,
};


export default MessageList
