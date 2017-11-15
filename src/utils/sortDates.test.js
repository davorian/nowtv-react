import {sortItemsByDate} from "./sortDates";

describe(('Given a list of items each with a field containing a date as a string'), () =>{
  it('should sort them by date s.t. latest date is first aka top of the list',()=>{
   const items = [{
      "id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
      "userId": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
      "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      "timestamp": "2017-02-09T04:27:38Z"
    },
      {
        "id": "b03569ae-ccbf-4975-8040-4daba638b407",
        "userId": "16373df5-da0a-4074-8295-f916b94269f4",
        "message": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
        "timestamp": "2016-11-09T05:04:58Z"
      },
      {
        "id": "22a887be-78dc-45bf-8997-b712d3de4510",
        "userId": "e837c9f5-247f-445f-bcc3-7d434348336b",
        "message": "Cras in purus eu magna vulputate luctus.",
        "timestamp": "2017-01-26T07:53:12Z"
      }];
    const expectedSortedItems = [{
      "id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
      "userId": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
      "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      "timestamp": "2017-02-09T04:27:38Z"
    },
      {
        "id": "22a887be-78dc-45bf-8997-b712d3de4510",
        "userId": "e837c9f5-247f-445f-bcc3-7d434348336b",
        "message": "Cras in purus eu magna vulputate luctus.",
        "timestamp": "2017-01-26T07:53:12Z"
      },
      {
        "id": "b03569ae-ccbf-4975-8040-4daba638b407",
        "userId": "16373df5-da0a-4074-8295-f916b94269f4",
        "message": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
        "timestamp": "2016-11-09T05:04:58Z"
      }];

   const field = 'timestamp';
   const sortedItems = sortItemsByDate(field, items);
   expect(sortedItems).toEqual(expectedSortedItems)
  })
});