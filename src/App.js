import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';
// import Login from './components/Login';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/play/instructions" element={<QuizInstructions/>} />
        <Route exact path="/play/quiz" element={<Play/>} />
        <Route exact path="/play/quizSummary" element={<QuizSummary/>} />
      </Routes>
    </Router>    
    
  );
};

export default App;