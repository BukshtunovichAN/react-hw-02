import { Component } from 'react'
import Section from '../Title/Title'
import Statistcks from '../Statistics/Statistics'
import FeedbackOptions from '../FeedbackOption/FeedbackOption'
import Notification from '../Notification/Notification'
import './App.css'
// import Basic from '../form/form'


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  handleChange = (type) => {
    this.setState(prevState => ({
      [type]: prevState[type] +1,
    }))
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()

    
  }


  countTotalFeedback = () => {
    const array = Object.values(this.state)
    const sum = array.reduce((acc, currentValue) => acc + currentValue, 0)
    return sum
  }

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback ? Math.round((this.state.good / totalFeedback) * 100) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state
    const total = this.countTotalFeedback()
    const positivePercentage =this.countPositiveFeedbackPercentage()
    
    return (

      <div>
        
          <Section title="Leave your feedback">
        
          <FeedbackOptions  options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleChange}></FeedbackOptions>
          {/* <button onClick={() =>this.handleChange('good')}>Good</button>
        <button onClick={() =>this.handleChange('neutral')}>Neutral</button>
          <button onClick={() => this.handleChange('bad')}>Bad</button> */}
        </Section>
        
        {total > 0 ?  <Section title="Statistics">
          <Statistcks good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}></Statistcks>
        </Section> : <Notification message="There is no feedback"></Notification> }

        
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