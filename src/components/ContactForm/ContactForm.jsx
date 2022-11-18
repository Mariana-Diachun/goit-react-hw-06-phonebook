import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import schema from 'validation/validation';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contactsSlice';
import {
  MainTitle,
  Input,
  FormWrap,
  Label,
  Button,
  Alert,
} from 'components/ContactForm/ContactForm.styled';

export const ContactForm = () => {
  const nameID = nanoid();
  const numberID = nanoid();

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm({ name: '', number: '' });
  };

  return (
    <header>
      <section>
        <MainTitle>Phonebook</MainTitle>
        <Formik
          initialValues={{ name: '', number: '' }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <FormWrap autoComplete="off">
            <Label htmlFor={nameID}>
              Name
              <Input type="text" name="name" id={nameID} />
            </Label>
            <Alert name="name" compononet="span" />
            <Label htmlFor={numberID}>
              Number
              <Input type="tel" name="number" id={numberID} />
            </Label>
            <Alert name="number" compononet="span" />
            <Button type="submit">Add contact</Button>
          </FormWrap>
        </Formik>
      </section>
    </header>
  );
};
