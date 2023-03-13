import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { UserRoutes } from '../UseRoute';
import { getCurrentUser } from 'redux/auth/authOperations';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
// import ContactList from 'components/ContactList/ContactList';
// import Filter from 'components/Filter/Filter';
// import Message from 'components/Message/Message';

// import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
// import PublicRoute from 'components/PublicRoute/PublicRoute';
import styles from './app.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  // const contactsRedux = useSelector(state => state.contacts);

  return (
    <>
      <Container>
        <Header />
        <UserRoutes />
      </Container>

      {/* <Container title="Contacts"> */}
        {/* <Filter />
        {contactsRedux.length === 0 ? <Message /> :<ContactList />} */}
      {/* </Container> */}
    </>
  );
}

export default App;