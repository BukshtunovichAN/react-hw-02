import {StyledForm, DeleteButton, ContactList} from './contact'


const Contacts = ({ contacts, onDeleteContact }) => {
    return (
        
       <StyledForm>
            {contacts.map(contact => (
                <ContactList key={contact.id}>
                    {contact.name}: {contact.number}
                    <DeleteButton type="button" onClick={()=> onDeleteContact(contact.id)}>Delete</DeleteButton>
                </ContactList>
        ))}
        </StyledForm>
    )
}
export default Contacts;