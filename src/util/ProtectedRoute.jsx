import LoginForm from '../components/Login';

const ProtectedRoute = ({ user, setUser, children }) => {
  if (!user) {
    return <LoginForm setUser={setUser} />;
  }

  return children;
};

export default ProtectedRoute;
