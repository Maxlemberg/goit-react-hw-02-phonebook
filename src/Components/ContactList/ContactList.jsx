import React from 'react';
import styles from './ContactsList.module.css';

const ContactList = ({ contacts, filter, onDelete }) => {
  const lowerName = filter.toLowerCase();
  const arr = contacts.filter(item =>
    item.name.toLowerCase().includes(lowerName),
  );
  const itemLi = arr.map(({ id, name, number }) => {
    return (
      <li key={id} className={styles.itemLi}>
        <span className={styles.text}>
          {name}: {number}
        </span>
        <button
          type="button"
          className={styles.button}
          id={id}
          onClick={onDelete}
        >
          Delete
        </button>
      </li>
    );
  });
  return <ul className={styles.list}>{itemLi}</ul>;
};

export default ContactList;
