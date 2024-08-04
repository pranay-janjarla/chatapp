import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Register from './components/Register';

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        {/* Add routes for Login and Chat components here */}
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
