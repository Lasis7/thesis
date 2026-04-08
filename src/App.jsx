import { useState } from 'react';

import './App.css';
import LoginForm from './components/Login';

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <div className="flex justify-center flex-col">
        {!user ? <LoginForm setUser={setUser} /> : <div></div>}
      </div>
    </>
  );
}

export default App;
