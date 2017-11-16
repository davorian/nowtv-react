import * as actions from './service'
import * as types from './constants'
import { getMessages, getMembers } from './data';

describe('actions', () => {
  it('should create an action to get messages', () => {
    const expectedAction = {
      type: types.MESSAGES_LOADING,
      payload: getMessages()
    };
    expect(actions.getChatLog()).toEqual(expectedAction)
  });

  it('should create an action to get members', () => {
    const expectedAction = {
      type: types.MEMBERS_LOADING,
      payload: getMembers()
    };
    expect(actions.getChatters()).toEqual(expectedAction)
  })

});