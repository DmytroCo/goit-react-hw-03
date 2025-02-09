import css from "./Contact.module.css";

export default function Contact({ data, onDelete }) {
  return (
    <div className={css.contactBox}>
      <ul className={css.contactList}>
        <li>{data.name}</li>
        <li>{data.number}</li>
      </ul>
      <button
        onClick={() => {
          onDelete(data.id);
        }}
        className={css.deleteButton}
      >
        Delete
      </button>
    </div>
  );
}