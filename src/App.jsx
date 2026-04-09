import { useState, useEffect } from 'react';
import './App.css';
import LoginForm from './components/Login';
import Home from './components/Home';
import { Routes, Route } from 'react-router';
import { fetchData } from './util/fetchData';

function App() {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState(null);

  <Routes>
    <Route path="/login" element={<LoginForm />} />
    <Route path="/home" element={<Home />} />
    {/* <Route path="/profile" element={<Profile />} /> */}
  </Routes>;

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUser(savedUser);
    }
  }, []);

  useEffect(() => {
    fetchData().then((blogs) => {
      setBlogs(blogs);
    });
  }, []);

  return (
    <>
      <div className="flex justify-center flex-col">
        {!user ? (
          <LoginForm setUser={setUser} />
        ) : (
          <Home setUser={setUser} user={user} blogs={blogs} />
        )}
      </div>
    </>
  );
}

export default App;
