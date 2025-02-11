import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AccountList } from './pages/AccountList';
import { InfoStep } from './pages/InfoStep';
import { AccordStep } from './pages/AccordStep';
import { SignatureStep } from './pages/SignatureStep';
import { Confirmation } from './pages/Confirmation';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/accounts" replace />} />
        <Route path="/accounts" element={<AccountList />} />
        <Route path="/modify/info" element={<InfoStep />} />
        <Route path="/modify/accord" element={<AccordStep />} />
        <Route path="/modify/signature" element={<SignatureStep />} />
        <Route path="/modify/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
};

export default App;