import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { StyledForm, Label, StyledField, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  nameInputID = nanoid();
  numberInputID = nanoid();

  render() {
    const { onSubmit } = this.props;
    return (
      <Formik initialValues={{ name: '', number: '' }} onSubmit={onSubmit}>
        <StyledForm>
          <Label htmlFor={this.nameInputID}>Name</Label>
          <StyledField
            type="text"
            name="name"
            placeholder="Enter the name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameInputID}
          />
          <Label htmlFor={this.numberInputID}>Number</Label>
          <StyledField
            type="tel"
            name="number"
            placeholder="Enter the number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.numberInputID}
          />
          <Button type="submit">Add Contact</Button>
        </StyledForm>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
