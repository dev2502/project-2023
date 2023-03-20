import React from 'react';
import './style.css';

function LoginPage() {
  return (
    <div className="container">
      <h1>GoEazy</h1>
      <div className="login-links">
        <a href="/login-page1">User</a>
        <a href="/login-page2">Admin</a>
        <a href="/login-page3">Shopkeeper</a>
      </div>
    </div>
  );
}

export default LoginPage;

