import React from 'react';
import { nanoid } from 'nanoid';

import { Label } from 'components/ContactForm/ContactForm.styled';
import { InputShort } from './Filter.styled';

export function Filter({ name, onChange }) {
  const filterInputId = nanoid();
  return (
    <div>
      <Label htmlFor={filterInputId}>Find contacts by name</Label>
      <InputShort
        type="text"
        name="filter"
        placeholder="Enter your search"
        value={name}
        onChange={onChange}
        id={filterInputId}
      />
    </div>
  );
}
