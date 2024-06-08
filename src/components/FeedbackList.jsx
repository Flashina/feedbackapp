import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem';
import React from 'react'

const FeedbackList = ({ feedback, handleDelete }) => {
    console.log(feedback);
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }
    return (
    <div className='feedback-list'>{feedback.map((item) => (
       <FeedbackItem key={item.id} item={item} 
       handleDelete = {handleDelete}
       />
    ))}</div>
  )
}

FeedbackList.PropTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      ratings: PropTypes.number.isRequired,
    })
  )
}

export default FeedbackList