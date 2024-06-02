import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ supabase }) => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (e) => {
      console.log(e);

      if (e === "SIGNED_IN") {
        navigate("/");
      }
    });
  }, []);

  return (
    <Auth
      appearance={{ theme: ThemeSupa }}
      supabaseClient={supabase}
      providers={[]}
    />
  );
};

export default Login;
