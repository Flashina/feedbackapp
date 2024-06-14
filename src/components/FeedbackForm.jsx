import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import React from 'react'

const FeedbackForm = () => {
    const [text, settext] = useState('')

    const handleTextChange = (e) => {
        settext(e.target.value);
    }
  return <Card>
    <form action="">
        <h2>How would you rate your service with us?</h2>
        {/* @todo */}

        <div className="input-group">
            <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text} />
            <Button type='submit' >Send</Button>
        </div>
    </form>
  </Card>
}

export default FeedbackForm