import { nanoid } from 'nanoid';

import { Label } from '../ContactForm/ContactForm.styled';
import { InputShort } from './Filter.styled';

interface IFilter {
  filter: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Filter({ filter, onChange }: IFilter) {
  const filterInputId = nanoid();
  return (
    <div>
      <Label htmlFor={filterInputId}>Find contacts by name</Label>
      <InputShort
        type="text"
        name="filter"
        placeholder="Enter your search"
        value={filter}
        onChange={onChange}
        id={filterInputId}
      />
    </div>
  );
}
