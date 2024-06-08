import { useState } from "react"
import Header from "./Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
      
    }
  }

  return (
    <>
    <Header />
    <div className="container">
      <h1>My App</h1>
      <FeedbackList  feedback={feedback} 
      handleDelete={deleteFeedback}
      />
    </div>
    </>
  )

  
}

export default App

