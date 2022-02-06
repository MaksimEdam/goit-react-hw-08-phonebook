import ContactForm from "../components/ContactForm";
import Filter from "../components/Filter";
import ContactList from "../components/ContactList";
import s from "./ContactsPage.module.css";

const ContactsPage = () => {
  return (
    <div className={s.wrapper}>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
