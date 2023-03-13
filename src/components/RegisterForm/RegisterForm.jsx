import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { registerNewUser } from './../../redux/auth/authOperations';

import { Formik, Form, ErrorMessage } from 'formik';
import { Title, Label, TitleInput, Input, Button } from './RegisterForm.styled';
// import useRegistrUser from 'hooks/useRegistrUser';
// import { userRegisterSchema } from 'utilities/validationSchema';

const initialState = { name: '', email: '', password: '' };

export const RegistrationForm = () => {
//   const { onSubmitForm } = useRegistrUser();
const [state, setState] = useState(initialState);
const dispatch = useDispatch();
const navigate = useNavigate();

const handleChange = e => {
  const { name, value } = e.currentTarget;
  setState(prevState => ({ ...prevState, [name]: value }));
};

const handleSubmit = e => {
  e.preventDefault();
  dispatch(registerNewUser(state));
  setState(initialState);
  navigate('/goit-react-hw-08-phonebook/');
};

  return (
    <>
      <Title>Registration</Title>

      <Formik
        // initialState={{ name: '', email: '', password: '' }}
        // onSubmit={handleSubmit}
        // validationSchema={userRegisterSchema}
      >
        {/* {({ state, handleChange, handleSubmit, isSubmitting }) => ( */}
          <Form onSubmit={handleSubmit}>
            <Label>
              <TitleInput>What is your name?</TitleInput>
              <Input
                type="text"
                name="name"
                placeholder="Adrian Cross"
                onChange={handleChange}
                value={state.name}
              />
              <ErrorMessage name="name" component="div" />
            </Label>
            <Label>
              <TitleInput>Your e-mail adress?</TitleInput>
              <Input
                type="email"
                name="email"
                placeholder="across@mail.com"
                onChange={handleChange}
                value={state.email}
              />
              <ErrorMessage name="email" component="div" />
            </Label>
            <Label>
              <TitleInput>Create a password.</TitleInput>
              <Input
                type="password"
                name="password"
                placeholder="examplepwd12345"
                onChange={handleChange}
                value={state.password}
              />
              <ErrorMessage name="password" component="div" />
            </Label>
            <Button type="submit">
              {/* {isSubmitting ? '...' : 'Registration'} */}
              Registration
            </Button>
          </Form>
        {/* )} */}
      </Formik>
    </>
  );
}