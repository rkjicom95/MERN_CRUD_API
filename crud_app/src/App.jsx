import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import UpdateForm from './components/UpdateForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




const App = () => {
  return (
    <>
    <Navbar/>
    <div style={{
      display:"flex"
    }}>
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/edit-form/:id" element={<UpdateForm />} />
      </Routes>
    </Router>
    </div>
    </>

    )
}

export default App