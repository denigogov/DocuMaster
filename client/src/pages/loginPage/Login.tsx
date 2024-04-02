import "../../Styling/Pages/_login.scss";
import { useState } from "react";
import LoginForm from "../../components/Login/LoginForm";
import { CredentialsTypes } from "../../types/loginType";
import { useAuth } from "../../helpers/Auth";
import { useNavigate } from "react-router-dom";

interface LoginProps {}

const API_URL = import.meta.env.VITE_API_URL as string;

const Login: React.FC<LoginProps> = ({}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const auth = useAuth();
  const navigate = useNavigate();

  const loginResponse = async (credentials: CredentialsTypes) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Invalid Credentials");
      }

      return data.token as string;
    } catch (err) {
      const requestError = (err as Error).stack;
      console.log(requestError);
      setError(
        requestError?.includes("Too")
          ? "Too Many Request, Please Try later ! "
          : `Invalid Credentials`
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (credentials: CredentialsTypes) => {
    const token = await loginResponse(credentials);

    if (token?.length) {
      auth.setConfirmToken(token);
      navigate("/");
    }
  };

  return (
    <div>
      <LoginForm loading={loading} error={error} handleLogin={handleLogin} />
    </div>
  );
};

export default Login;
