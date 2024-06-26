import { motion, AnimatePresence  } from 'framer-motion'
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem';
import React from 'react'
import AboutIconLink from './shared/AboutIconLink';

const FeedbackList = ({ feedback, handleDelete }) => {
    console.log(feedback);
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }
  
    return (
    <div className='feedback-list'>
      <AnimatePresence>
      {feedback.map((item) => (
        <motion.div
        key={item.id}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
       <FeedbackItem key={item.id} item={item} 
       handleDelete = {handleDelete}
       />
       </motion.div>
    ))}
    </AnimatePresence>
<AboutIconLink />
    </div>
  )
  //   return (
  //   <div className='feedback-list'>{feedback.map((item) => (
  //      <FeedbackItem key={item.id} item={item} 
  //      handleDelete = {handleDelete}
  //      />
  //   ))}</div>
  // )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      ratings: PropTypes.number.isRequired,
    })
  )
}


export default FeedbackList