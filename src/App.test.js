import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount} from 'enzyme';
import MessageList from "./views/messageList";
import Avatar from "./views/avatar";
import TimeStamp from "./views/timeStamp";

describe ('App rendering with mock messages and members', () => {
  let mountedApp;
  let props = {store:{}};

  beforeEach(() => {
    props = {
      store:{getState:()=>{}, subscribe:()=>{}, dispatch:()=>{}, messages:[]},
      messages: [{
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
        }],
      members : [{
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
        },
        {
          "id": "ba5ebb2f-2dbd-44d4-911b-f15c2d792871",
          "firstName": "Denise",
          "lastName": "Sanders",
          "email": "dsanders2@ox.ac.uk",
          "avatar": "http://dummyimage.com/100x100.jpg/ff4444/ffffff",
          "ip": "184.19.42.78"
        }],
      getChatLog: undefined
    };
  });

    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App.WrappedComponent/>, div);
    });

    it('should have a MessageList', () => {
      mountedApp = mount(<App.WrappedComponent {...props}/>);
      expect(mountedApp.find(MessageList).length).toEqual(1);
    });

    it('should have 3 list items showing messages', () => {
      mountedApp = mount(<App.WrappedComponent {...props}/>);
      expect(mountedApp.find(MessageList).children().children().length).toEqual(3);
    });

    it('should have one avatar', () => {
      mountedApp = mount(<App.WrappedComponent {...props}/>);
      expect(mountedApp.find(Avatar).length).toEqual(1);
    });

    it('should have three timestamps', () => {
      mountedApp = mount(<App.WrappedComponent {...props}/>);
      expect(mountedApp.find(TimeStamp).length).toEqual(3);
    });
});
