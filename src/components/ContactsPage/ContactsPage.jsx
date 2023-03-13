import { useSelector } from 'react-redux';

import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

import styles from '../app.module.css';

export const ContactsPage = () => {
  const contactsRedux = useSelector(state => state.contacts);
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <div className={styles.container}>
      {isLoggedIn ? (
        <>
          <h1 className={styles.title}>Phonebook</h1>
          <ContactForm />
          <h2 className={styles.subTitle}>Contacts</h2>
          <div className={styles.contactListWrap}>
            {contactsRedux.length === 0 ? (
              <p>There is no contacts in your list.</p>
            ) : (
              <>
                <Filter />
                <ContactList />
              </>
            )}
          </div>
        </>
      ) : (
        <p className={styles.welcomeText}>Welcome to Phonebook</p>
      )}
    </div>
  );
};