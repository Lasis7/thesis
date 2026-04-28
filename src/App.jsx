import { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';
import Home from './components/Home';
import { Routes, Route, BrowserRouter } from 'react-router';
import { fetchData } from './util/fetchData';
import { Navigate } from 'react-router';

const ProtectedRoute = lazy(() => import('./util/ProtectedRoute'));
const Login = lazy(() => import('./components/Login'));
const Profile = lazy(() => import('./components/Profile'));
const Gallery = lazy(() => import('./components/Gallery'));

function App() {
  const [user, setUser] = useState('Testuser');
  const [blogs, setBlogs] = useState([]);

  function burnCPU(ms) {
    const start = performance.now();
    while (performance.now() - start < ms) {
      Math.sqrt(Math.random());
    }
  }

  // useEffect(() => {
  //   const savedUser = localStorage.getItem('user');
  //   if (savedUser) {
  //     // eslint-disable-next-line react-hooks/set-state-in-effect
  //     setUser(savedUser);
  //   }
  // }, []);

  useEffect(() => {
    fetchData().then((blogs) => {
      setBlogs(blogs);
    });
  }, []);

  useEffect(() => {
    burnCPU(120);
  });

  return (
    <>
      <div className="flex justify-center flex-col">
        <BrowserRouter>
          <Suspense
            fallback={<div className="text-2xl font-bold">Loading...</div>}
          >
            <Routes>
              <Route
                path="/"
                element={
                  user ? <Navigate to="/home" /> : <Navigate to={'/login'} />
                }
              />

              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route
                path="/home"
                element={
                  <ProtectedRoute user={user} setUser={setUser}>
                    <Home setUser={setUser} user={user} blogs={blogs} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/gallery"
                element={
                  <ProtectedRoute user={user} setUser={setUser}>
                    <Gallery />
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
          </Suspense>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
