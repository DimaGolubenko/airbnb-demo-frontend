import React from 'react';
import { Types, Type, Data, Checkbox, Input, Title, Description, Icon } from './styled';
import entireHomeIcon from './entireHome.svg';
import privateRoomIcon from './privateRoom.svg';
import sharedRoomIcon from './sharedRoom.svg';

export default (props) => {
  const checkRoomType = (type) => {
    props.checkRoomType(type, props.roomType[type]);
  };

  const setFilterTitle = (title) => {
    props.setFilterTitle(title);
  };

  const { entireHome, privateRoom, sharedRoom } = props.roomType;

  return (
    <Types>
      <Type>
        <Checkbox checked={entireHome}>
          <Input
            onClick={() => {
              checkRoomType('entireHome');
              setFilterTitle('Entire home');
            }}
            type="checkbox"
            name="type"
          />
        </Checkbox>
        <Data>
          <Title>Entire home</Title>
          <Description>Have a place to yourself</Description>
        </Data>
        <Icon src={entireHomeIcon} title="Entire home" />
      </Type>

      <Type>
        <Checkbox checked={privateRoom}>
          <Input
            onClick={() => {
              checkRoomType('privateRoom');
              setFilterTitle('Private room');
            }}
            type="checkbox"
            name="type"
          />
        </Checkbox>
        <Data>
          <Title>Private room</Title>
          <Description>Have your own room and share some common spaces</Description>
        </Data>
        <Icon src={privateRoomIcon} title="Private room" />
      </Type>

      <Type>
        <Checkbox checked={sharedRoom}>
          <Input
            onClick={() => {
              checkRoomType('sharedRoom');
              setFilterTitle('Shared room');
            }}
            type="checkbox"
            name="type"
          />
        </Checkbox>
        <Data>
          <Title>Shared room</Title>
          <Description>Stay in a shared space, like a common room</Description>
        </Data>
        <Icon src={sharedRoomIcon} title="Shared room" />
      </Type>
    </Types>
  );
};
