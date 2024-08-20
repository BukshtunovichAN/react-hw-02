import { useState, useEffect  } from 'react';
import './App.css';
import ContactForm from '../form/Form';
import Contacts from '../Contacts/Contacts';
import Filter from '../FilterContacts/Filter';

// const arrayOfContacts = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
         console.log('Это лог в момент создания')
        const contactsItem = localStorage.getItem('contacts');
        const parsedContacts = JSON.parse(contactsItem);

        if (parsedContacts && parsedContacts.length > 0) {
            setContacts(parsedContacts);
        }
    }, []);

    // Сохраняем контакты в localStorage при их изменении
    useEffect(() => {
        console.log('Это лог в момент обновления')

        if (contacts.length > 0) {
            localStorage.setItem('contacts', JSON.stringify(contacts));
        }
    }, [contacts]);



    const addContact = (name, number) => {
        const contact = {
            id: crypto.randomUUID(), //или вместо crypto.randomUUID(); можно испольховать uuidv4()
            name,
            number,
        };
        isDuplicateContact(contact)
            ? alert(`${name} is already in contact`)
            : setContacts(prevContacts => [...prevContacts, contact]);
    };

    const isDuplicateContact = contact => {
        return contacts.some(
            existingContact =>
                contact.name.toLowerCase() === existingContact.name.toLowerCase() ||
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
        setContacts(prevContacts =>
            prevContacts.filter(contact => contact.id !== contactId)
        );
    };

    

    const filteredContacts = getVisibleContacts();
    return (
        <div>
            <h2>Phonebook</h2>
            <ContactForm onSubmit={addContact}/>
            <h2>Contacts</h2>
            <Filter value={filter} onChange={changeFilter}/>
            <Contacts
                contacts={filteredContacts}
                onDeleteContact={deleteContact}
            />
        </div>
    );
};

export default App;
