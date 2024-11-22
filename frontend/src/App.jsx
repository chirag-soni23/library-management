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
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={isAuth ? <Layout /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={isAuth ? <Layout /> : <Login />} />
        <Route path="/admin" element={isAuth ? <Admin /> : <Login />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
