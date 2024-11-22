import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import Register from './pages/Register';
import Login from './pages/Login';
import { UserData } from './context/User';
import Layout from './Layout';
import Welcome from './pages/Welcome';
import Admin from './pages/Admin';

const App = () => {
  const { isAuth, isLoading } = UserData();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <Routes>
        {/* Show the Welcome page as the default route */}
        <Route path="/" element={<Welcome />} />
        
        {/* Add other routes accessible from the Welcome page */}
        <Route path="/home" element={isAuth ? <Layout /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={isAuth ? <Layout /> : <Login />} />
        <Route path="/admin" element={isAuth ? <Admin /> : <Login />} />
        
        {/* Optional: Add a catch-all route for 404 pages */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
