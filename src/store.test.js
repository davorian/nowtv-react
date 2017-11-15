import { rootReducer } from './store';
describe('async actions', () => {

  it('should set messages in the store', () => {
    const messages = [{
      id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
      userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
      message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
      timestamp: '2017-02-09T04:27:38Z'
    }];

    const updatedStore = rootReducer({}, {type: 'MESSAGES_LOADING_FULFILLED', payload: messages});
    expect(updatedStore.messages).toEqual(messages);
  });

  it('should set members in the store', () => {
    const members = [{
      "id": "ba5ebb2f-2dbd-44d4-911b-f15c2d792871",
      "firstName": "Denise",
      "lastName": "Sanders",
      "email": "dsanders2@ox.ac.uk",
      "avatar": "http://dummyimage.com/100x100.jpg/ff4444/ffffff",
      "ip": "184.19.42.78"
    }];

    const updatedStore = rootReducer({}, {type: 'MEMBERS_LOADING_FULFILLED', payload: members});
    expect(updatedStore.members).toEqual(members);
  });

});
