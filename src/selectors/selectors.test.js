import { findMemberWithId }from './selectors';

describe ('Finding member with given id', () => {
  it('returns the member', ()=>{
   const id='cae5d3af-9ac7-471e-9061-e2e9d75f00e4';
   const  members = [{
      "id": "e837c9f5-247f-445f-bcc3-7d434348336b",
      "firstName": "Martin",
      "lastName": "Bradley",
      "email": "mbradley0@google.it",
      "avatar": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
      "ip": "166.124.172.160"
    },
      {
        "id": "cae5d3af-9ac7-471e-9061-e2e9d75f00e4",
        "firstName": "Helen",
        "lastName": "Hawkins",
        "email": "hhawkins1@posterous.com",
        "avatar": "http://dummyimage.com/100x100.jpg/dddddd/000000",
        "ip": "179.239.189.173"
      }];
    let member = findMemberWithId(members, id);
    expect(member.id).toEqual(id);
  })

  it('defaults to null', ()=>{
    const id='';
    const  members = [{
      "id": "e837c9f5-247f-445f-bcc3-7d434348336b",
      "firstName": "Martin",
      "lastName": "Bradley",
      "email": "mbradley0@google.it",
      "avatar": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
      "ip": "166.124.172.160"
    },
      {
        "id": "cae5d3af-9ac7-471e-9061-e2e9d75f00e4",
        "firstName": "Helen",
        "lastName": "Hawkins",
        "email": "hhawkins1@posterous.com",
        "avatar": "http://dummyimage.com/100x100.jpg/dddddd/000000",
        "ip": "179.239.189.173"
      }];
    let member = findMemberWithId(members, id);
    expect(member).toBe(null);
  })
});