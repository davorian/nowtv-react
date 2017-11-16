import React from 'react'
import MessageListItem from "./messageListItem";
import {sortItemsByDate} from '../utils/sortDates';
import PropTypes from 'prop-types';
import { findMemberWithId } from '../selectors/selectors'
import uuid from 'uuid-v4';

const MessageList = ({messages, members}) => {
  if(!messages) return null;
  const sortedMessages = sortItemsByDate('timestamp', messages);
  const messageListItems = sortedMessages.map((msg) => {
    const member = findMemberWithId(members, msg.userId);
    return (<MessageListItem  key={uuid()} {...{msg, member}}/>);
  });
  return (<ul>{messageListItems}</ul>)
};

MessageList.defaultProps = {
  messages: [],
  members : [],
};

MessageList.propTypes = {
  messages: PropTypes.oneOfType([PropTypes.array,PropTypes.object]),
  members: PropTypes.oneOfType([PropTypes.array,PropTypes.object]).isRequired,
};


export default MessageList
