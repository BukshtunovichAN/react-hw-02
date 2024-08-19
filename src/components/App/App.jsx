import { useState } from 'react';
import './App.css';
import ContactForm from '../form/Form';
import Contacts from '../Contacts/Contacts';
import Filter from '../FilterContacts/Filter';

const arrayOfContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
    const [contacts, setContacts] = useState(arrayOfContacts);
    const [filter, setFilter] = useState('');

    const addContact = (name, number) => {
        const contact = {
            id: crypto.randomUUID(), //или вместо crypto.randomUUID(); можно испольховать uuidv4()
            name,
            number,
        };
        isDuplicateContact(contact)
            ? alert(`${name} is already in contact`)
            : setContacts([...contacts, contact],);
    };

    const isDuplicateContact = contact => {
        return contacts.some(
            existingContact =>
                contact.name.toLowerCase() ===
                    existingContact.name.toLowerCase() ||
                contact.number === existingContact.number
        );
    };

    const changeFilter = e => {
        setFilter(e.currentTarget.value );
    };

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    const deleteContact = contactId => {
        setContacts(
            contacts.filter(
                contact => contact.id !== contactId
            ),
        );
    };

    const filteredContacts = getVisibleContacts();
    return (
        <div>
            <h2>Phonebook</h2>
            <ContactForm onSubmit={addContact}></ContactForm>
            <h2>Contacts</h2>
            <Filter value={filter} onChange={changeFilter}></Filter>
            <Contacts
                contacts={filteredContacts}
                onDeleteContact={deleteContact}
            ></Contacts>
        </div>
    );
};

export default App;
