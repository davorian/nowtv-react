import { getMessages, getMembers } from './data';

export const getChatLog = () => {
  return {
    type: 'MESSAGES_LOADING',
    payload: getMessages()
  };
};

export const getChatters = () => {
  return {
    type: 'MEMBERS_LOADING',
    payload: getMembers()
  };
};