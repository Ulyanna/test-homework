import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {filterContact} from "../../redux/contactSlice"

import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch()
  return (
    <Label>
      Find contacts by name :
      <Input
        type="text"
        name="filter"
        required
        onChange={event => dispatch(filterContact(event.currentTarget.value))}
      />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
