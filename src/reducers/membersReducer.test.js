import  membersReducer from './membersReducer';

describe('membersReducer',()=>{

  const members = [{
    "id": "ba5ebb2f-2dbd-44d4-911b-f15c2d792871",
    "firstName": "Denise",
    "lastName": "Sanders",
    "email": "dsanders2@ox.ac.uk",
    "avatar": "http://dummyimage.com/100x100.jpg/ff4444/ffffff",
    "ip": "184.19.42.78"
  }];

  it('should set members in the store on members loading fulfillment', () => {
    const updatedMembers = membersReducer({}, { type: 'MEMBERS_LOADING_FULFILLED', payload: members });
    expect(updatedMembers).toEqual(members);
  });

  it('should set an error in the store on members loading rejection', () => {
    //this would be testing promises lib
    const updatedMembers = membersReducer({}, { type: 'MEMBERS_LOADING_REJECTED', payload: {error:true} });
    expect(updatedMembers).toEqual({error:true});
  });

  it('should set no members on members loading pending', () => {
    const updatedMembers = membersReducer({}, { type: 'MEMBERS_LOADING_PENDING', payload:null });
    expect(updatedMembers).toEqual({});
  });
});
