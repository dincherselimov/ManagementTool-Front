import Register from "@/components/Register";
import { RedirectIfAuthenticated } from "@/hooks/authRedirect";
import { useAuth } from "@/hooks/useAuth";

const RegisterPage = () => {
  
  const { isAuthenticated } = useAuth();

  RedirectIfAuthenticated(isAuthenticated, '/');

  return (
    <div>
      <Register />
    </div>
  );
};

export default RegisterPage;
