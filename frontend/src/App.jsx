import {BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContent from './pages/MainContent';
import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/*"  element={<MainContent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
