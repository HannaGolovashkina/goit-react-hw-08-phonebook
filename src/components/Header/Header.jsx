import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutUser } from 'redux/auth/authOperations';
import { Title, TitleColor, Button, ButtonText } from './Header.styled';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import Modal from 'components/Modal/Modal';
import ContactForm from 'components/ContactForm/ContactForm';

function Header() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  const { isLoggedIn, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <>
      <Title>
        Phone<TitleColor>book</TitleColor>
      </Title>
      {isLoggedIn ? (
        <div >
          <p >{user.name}</p>
          <Button type="button"  onClick={onLogOut}>
            Log Out
          </Button>
        </div>
      ) : (
        <div >
          <NavLink  to={'/register'}>
          <Button type="submit">
              {/* {isSubmitting ? '...' : 'Registration'} */}
              Registration
            </Button>
          </NavLink>
          <NavLink  to={'/login'}>
          <Button type="submit">
              {/* {isSubmitting ? '...' : 'Registration'} */}
              Sing in
            </Button>
            {/* Sing in */}
          </NavLink>
        </div>
      )}
      
      {/*  
      <Button type="button" onClick={toggleModal}>
        <ButtonText>Log Out</ButtonText>
        <BsFillPersonPlusFill size={20} />
      </Button> */}


      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
}

export default Header;