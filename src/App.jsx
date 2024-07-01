import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from "react"
import Header from "./Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackData from "./data/FeedbackData"
import AboutIconLink from './components/shared/AboutIconLink'
import AboutPage from './pages/AboutPage'
import Card from './components/shared/Card'
import Post from './components/Post'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
      
    }
  }

  return (
    <Router>
    <Header />
    <div className="container">
      <Routes>
      <Route exact path='/' element={
        <>
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback}/>
      <FeedbackList  feedback={feedback} 
      handleDelete={deleteFeedback}
      /> 
        </>
      }>
      </Route>
     <Route path='/about' element={<AboutPage />} />
     {/* <Route path='/post/*' element={<Post />} /> */}

     </Routes>

     

     {/* <AboutIconLink /> */}
    </div>
    </Router>
  )

  
}

export default App

