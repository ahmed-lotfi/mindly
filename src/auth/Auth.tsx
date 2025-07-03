import { useState, FormEvent } from "react";
import { useAuthSession } from "./AuthSessionContext";
import { Navigate } from "react-router-dom";
import styles from "./Auth.module.css";
import { supabase } from "../supabaseClient";
import toast from "react-hot-toast";

export const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const { session } = useAuthSession();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      toast.success("Check your email for the login link!");
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (session) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.authBox}>
        <img src="/vite.png" alt="Mindly Logo" className={styles.logo} />
        <h1 className={styles.heading}>Mindly Notes App</h1>
        <p>Sign in via magic link with your email below</p>
        {loading ? (
          "Sending magic link..."
        ) : (
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className={styles.input}
            />
            <button>Send Magic Link</button>
          </form>
        )}
      </div>
    </div>
  );
};
