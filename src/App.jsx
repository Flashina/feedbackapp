import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from './components/shared/AboutIconLink'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from "./context/FeedbackContext"
import Card from './components/shared/Card'
import Post from './components/Post'

function App() {
    return (
    <FeedbackProvider>
    <Router>
    <Header />
    <div className="container">
      <Routes>
      <Route exact path='/' element={
        <>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList /> 
        </>
      }>
      </Route>
     <Route path='/about' element={<AboutPage />} />
     {/* <Route path='/post/*' element={<Post />} /> */}

     </Routes>

     

     {/* <AboutIconLink /> */}
    </div>
    </Router>
    </FeedbackProvider>
  )

  
}

export default App

