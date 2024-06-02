import { useEffect, useState } from "react";
import "./Home.scss";

const Home = ({ supabase }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const logout = () => supabase.auth.signOut();

  return (
    <>
      <h3>Recently added</h3>
      <div className="homepage__carousel-container">
        <div className="homepage__carousel">
          Hello is it me you're looking for
        </div>
      </div>

      <div className="homepage__menu">
        <div>
          <a href="/by-category">Browse by category</a>
        </div>
        <div>
          <a href="/Search">Search</a>
        </div>
        <div>
          <a href="/by-popularity">Browse by popularity</a>
        </div>
        <div>
          {!session && <a href="/login">Login</a>}
          {session && (
            <a href="#" onClick={logout}>
              Logout
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
