import { Component } from 'react'
// import Section from '../Title/Title'
// import Statistcks from '../Statistics/Statistics'
// import FeedbackOptions from '../FeedbackOption/FeedbackOption'
// import Notification from '../Notification/Notification'
import './App.css'
import ContactForm from '../form/Form'
import Contacts from '../Contacts/Contacts'
import Filter from '../FilterContacts/Filter'


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
    name: '',
    number: '',
  }

  addContact = (name, number) => {
    const contact = {
      id: crypto.randomUUID(), //или вместо crypto.randomUUID(); можно испольховать uuidv4()
      name,
      number,
    };
   this.isDuplicateContact(contact) ? alert(`${name} is already in contact`) : this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    })); 
  };

  isDuplicateContact = (contact) => {
    return this.state.contacts.some(existingContact => contact.name.toLowerCase() === existingContact.name.toLowerCase() || contact.number === existingContact.number )
  }


  handleChange = (type) => {
    this.setState(prevState => ({
      [type]: prevState[type] +1,
    }))
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()

    
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad 
    }

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback ? Math.round((this.state.good / totalFeedback) * 100) : 0;
  }

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  getVisibleContacts = () => {
       const {filter, contacts} = this.state
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };



  deleteContact = contactId => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  })) }





  render() {
    const { good, neutral, bad, filter} = this.state
    const total = this.countTotalFeedback()
    const positivePercentage =this.countPositiveFeedbackPercentage()
    const filteredContacts = this.getVisibleContacts();
    return (

      <div>
        
        <h2>Phonebook</h2>
       <ContactForm onSubmit={this.addContact} ></ContactForm>
       <h2>Contacts</h2>
       <Filter value={filter} onChange={this.changeFilter}></Filter>
        <Contacts contacts={filteredContacts} onDeleteContact={this.deleteContact}></Contacts>
        
          {/* <Section title="Leave your feedback">
        
          <FeedbackOptions  options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleChange}></FeedbackOptions>
        </Section> */}
       
        {/* { 
          total > 0 ?
          <Section title="Statistics">
          <Statistcks good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}></Statistcks>
          </Section>
          :
          <Notification message="There is no feedback"></Notification>
        } */}

      </div>


    )
  }




}

export default App


{/* <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: { this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()} %</p> */}

                  {/* <button onClick={() =>this.handleChange('good')}>Good</button>
        <button onClick={() =>this.handleChange('neutral')}>Neutral</button>
          <button onClick={() => this.handleChange('bad')}>Bad</button> */}