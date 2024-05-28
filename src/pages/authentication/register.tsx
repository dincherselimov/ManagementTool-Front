import Register from "@/components/Register";
import { redirectIfAuthenticated } from "@/hooks/authRedirect";
import { useAuth } from "@/hooks/useAuth";

const RegisterPage = () => {
  
  const { isAuthenticated } = useAuth();

  redirectIfAuthenticated(isAuthenticated, '/');

  return (
    <div>
      <h1 className="register_title">Register Page</h1>
      <Register />
    </div>
  );
};

export default RegisterPage;
