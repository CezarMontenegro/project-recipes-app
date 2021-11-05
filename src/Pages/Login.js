import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const SIX = 6;
  const validateEmail = /\S+@\S+\.\S+/;

  const handleEmail = ({ target }) => {
    const { value } = target;
    setEmail(value);
  };

  const handlePassword = ({ target }) => {
    const { value } = target;
    setPassword(value)
  }

  return (
    <section>
      <label htmlFor="email">
        Email:
        <input
          data-testid="email-input"
          onChange={ handleEmail }
          name="email"
          id="email"
          value={ email }
          type="email"
          placeholder="Email"
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          data-testid="password-input"
          id="password"
          type="password"
          name="password"
          placeholder="Senha"
          value={password}
          onChange={handlePassword}
        />
      </label>
       <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ !(validateEmail.test(email) && password.length > SIX) }
      >
      Entrar
      </button>
    </section>
  );
}

export default Login;
