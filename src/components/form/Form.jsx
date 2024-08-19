import React from 'react';
import {Formik, ErrorMessage } from 'formik';
import * as yup from 'yup'
import {StyledForm, StyledField, StyledLabel, SubmitButton} from './formStyle'


const ContactForm = ({ onSubmit }) => {
  ;

  const schema = yup.object().shape({
    name: yup.string().min(2, 'Name is too short').required(),
    number: yup.string()
      .matches(/^[0-9\-]+$/, 'Please enter a valid phone number')
      .min(5, 'Number is too short')
      .max(15, 'Number is too long')
      .required(),
  })
  const FormError = ({ name }) => {
    return (
      <ErrorMessage name={name} render={message => <ErrorText>{message}</ErrorText>}/>
  )
}
  const nameInputId = crypto.randomUUID();
  const phoneInputId = crypto.randomUUID();

  return (
    <Formik initialValues={{ name: '', number: '' }}
      validationSchema={schema} onSubmit={(values, { resetForm }) => {
        onSubmit(values.name, values.number);
        resetForm();
      }}
      >
      <StyledForm autoComplete='off'    >
      <StyledLabel  htmlFor={nameInputId}>Name
        <StyledField
          type="text"
          name="name"
          id={nameInputId}
          
        />
          <FormError name='name'/>
      </StyledLabel>
      <StyledLabel htmlFor={phoneInputId}>Phone
        <StyledField
          type="tel"
          name="number"
          id={phoneInputId}
          
        />
        <FormError name='number'/>
      </StyledLabel>
      <SubmitButton  type="submit">
        Add contact
      </SubmitButton >
      </StyledForm>
      
    </Formik>
  );
};

export default ContactForm;
