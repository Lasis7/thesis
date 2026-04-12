import { useState, useEffect } from 'react';
import './App.css';
import LoginForm from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import ProtectedRoute from './util/ProtectedRoute';
import { Routes, Route, BrowserRouter } from 'react-router';
import { fetchData } from './util/fetchData';

function App() {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);

  function burnCPU(ms) {
    const start = performance.now();
    while (performance.now() - start < ms) {
      Math.sqrt(Math.random());
    }
  }

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

  useEffect(() => {
    burnCPU(60);
  });

  return (
    <>
      <div className="flex justify-center flex-col">
        {/* {!user ? (
          <LoginForm setUser={setUser} />
        ) : (
          <Home setUser={setUser} user={user} blogs={blogs} />
        )} */}
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginForm setUser={setUser} />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute user={user} setUser={setUser}>
                  <Home setUser={setUser} user={user} blogs={blogs} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute user={user} setUser={setUser}>
                  <Profile user={user} />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
