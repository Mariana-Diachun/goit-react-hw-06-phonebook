import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { searchByName } from 'redux/contactsSlice';
import { Box, Label, InputSearch } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts.contacts);
  // const filteredContacts = useSelector(state => state.contacts.filteredUsers);

  const [searchName, setSearchName] = useState('');
  const inputID = nanoid();

  const changeSearchName = e => {
    setSearchName(e.target.value);
  };

  useEffect(() => {
    dispatch(searchByName(searchName));
  }, [searchName, dispatch]);

  return (
    <Box>
      <Label htmlFor={inputID}>
        Find contacts by name:
        <InputSearch
          id={inputID}
          type="text"
          value={searchName}
          name="filter"
          onChange={changeSearchName}
        />
      </Label>
    </Box>
  );
};
