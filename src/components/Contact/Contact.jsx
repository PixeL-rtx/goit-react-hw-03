import { IoIosContact } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import css from "./Contact.module.css";

function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <li className={css.item}>
      <ul>
        <li className={css.contact}>
          <IoIosContact />
          <p>{name}</p>
        </li>
        <li className={css.contact}>
          <MdPhoneInTalk />
          <p>{number}</p>
        </li>
      </ul>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

export default Contact;
