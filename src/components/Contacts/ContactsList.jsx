import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';
import { Item } from './ContactsList.styled';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {filteredContacts.map(item => {
        return (
          <Item key={item.id}>
            {item.name}: {item.phone}
            <button
              onClick={() => {
                dispatch(deleteContact(item.id));
              }}
            >
              Delete
            </button>
          </Item>
        );
      })}
    </ul>
  );
};
