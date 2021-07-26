import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Homepage</h1>
      {authenticated ? (
        <>
          {/*TODO display profile pic*/}
        </>
      ) : (
        // <Link to="/login">let me in →</Link>
        <p>Videos go here (:</p>
      )}
    </section>
  );
}

export default HomePage;
