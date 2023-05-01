import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import {
  FormContainer,
  FormInput,
  FormErrorMessage,
  SubmitButton,
} from './ContactForm.styled';
const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

export function ContactForm({ onSubmit }) {
  // delete name and number from useState
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormContainer>
          <label htmlFor="name">Name</label>
          <FormInput type="text" name="name" id="name" />
          <FormErrorMessage name="name" component="span" />
          <label htmlFor="number">Number</label>
          <FormInput type="tel" name="number" id="number" />
          <FormErrorMessage name="number" component="span" />
          <SubmitButton type="submit">Add contact</SubmitButton>
        </FormContainer>
      </Formik>
    </>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
