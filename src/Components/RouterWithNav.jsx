import React,{ memo, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const EmployeeProfile = memo(function EmployeeProfile({ name, email }) {
    return (<>
          <p>Name:{name}</p>
          <p>Email: {email}</p>
          </>);
  });

// Create your components for different routes
const Home = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
      <>
        <label>
          Name: <input value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Email: <input value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <img src={require('./star.png')} />
        <hr/>
        <EmployeeProfile name={name}/>
      </>
    );
  };
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;

// Create your App component
const RouterWithNav = () => {
  return (
    <Router>
      <div>
        <div>
        <Link to="/">home</Link>
        <Link to="/about" style={{margin:'10px'}}>about</Link>
        <Link to="/contact">contact</Link>
        </div>

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </div>
    </Router>
  );
};

export default RouterWithNav;
