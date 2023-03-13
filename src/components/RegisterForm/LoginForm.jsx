import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { loginUser } from 'redux/auth/authOperations';
import { Formik, Form, ErrorMessage } from 'formik';
import { Title, Label, TitleInput, Input, Button } from './LoginForm.styled';

const initialState = { email: '', password: '' };

export const LoginForm = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(state));
    setState(initialState);
    navigate('/goit-react-hw-08-phonebook/');
  };
  return (
    <>
      <Title>Login</Title>

      <Formik
        // initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        // validationSchema={userRegisterSchema}
      >
        {/* {({ state, handleChange, handleSubmit, isSubmitting }) => ( */}
          <Form onSubmit={handleSubmit}>
            {/* <Label>
              <TitleInput>What is your name?</TitleInput>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                value={state.name}
              />
              <ErrorMessage name="name" component="div" />
            </Label> */}
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
              <TitleInput>Password.</TitleInput>
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
              Sing in
            </Button>
          </Form>
        {/* )} */}
      </Formik>
    </>
  );
}