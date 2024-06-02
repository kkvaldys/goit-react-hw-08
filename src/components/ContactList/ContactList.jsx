import css from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/selectors.js";

export default function ContactList() {
  const items = useSelector(selectVisibleContacts);

  if (items.length > 0)
    return (
      <div>
        <ul className={css.contactListListElement}>
          {items.map((eachItem) => {
            const { id, name = "N/A", number = "N/A" } = eachItem;
            return (
              <li key={id} className={css.contactListItemElement}>
                <Contact contactId={id} name={name} number={number} />
              </li>
            );
          })}
        </ul>
      </div>
    );
}
