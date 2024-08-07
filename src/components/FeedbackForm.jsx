import { useState, useContext } from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'
import React from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackForm = () => {
    const [text, settext] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const { addFeedback } = useContext(FeedbackContext)

    const handleTextChange = (e) => {
      if (text === '') {
        setBtnDisabled(true)
        setMessage(null)
      } else if (text !== '' && text.trim().length < 10) {
        setMessage('Text must be at least 10 characters')
        setBtnDisabled(true)
      } else {
        setMessage(null)
        setBtnDisabled(false)
      }

        settext(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if (text.trim().length > 10) {
        const newfeedback = {
          text,
          rating
        }
        addFeedback(newfeedback);

        settext('')
      }
    }

  return <Card>
    <form action="" onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
       <RatingSelect select={(rating) => setRating(rating)}/>

        <div className="input-group">
            <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text} />
            <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
    </form>
  </Card>
}




export default FeedbackForm