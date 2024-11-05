import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import Register from './pages/Register'; 
import Login from './pages/Login';
import { UserData } from './context/User';
import Layout from './Layout';

const App = () => {
  const { isAuth, isLoading } = UserData();

  return (
    <Router>
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={isAuth ? <Layout /> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={isAuth ? <Layout /> : <Login />} />
          {/* Optional: Add a catch-all route for 404 pages */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
