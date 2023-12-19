import React from 'react';
import { About } from './components/landing-page/About';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/landing-page/footer';
import Auth from './components/landing-page/LoginForm';
import CompleteProfile from './components/landing-page/complete_profile';
import { Navbar } from './components/student/navbar';
import { MyCourses } from './components/student/home';
import { Lecturecontent } from './components/student/lecture-content';
import { Navigation } from './components/landing-page/navigation';


const App = () => {
  return (
    <>
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<About />} > </Route>
          <Route path="/footer" element={<Footer />} />
          <Route path="/Login" element={<Auth />} />
          <Route path="/CompleteProfile" element={<CompleteProfile />} />
          {/*<Route path="/teacher" element={<Navbar />} />
          <Route path="/" element={<MyCourses />} />
          <Route path="/lectures" element={<Lectures />} />
          <Route path="/lecture" element={<Lecturecontent />} />*/}
        </Routes>
      </div>
    </>
  )
}

export default App;