import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setEmail(value);
  };

  return (
    <section>
      <label htmlFor="email">
        Email:
        <input
          data-testid="email-input"
          onChange={ handleChange }
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
        />
      </label>
      {/*  <button
        data-testid="login-submit-btn"
        onClick={}
      >
      Entrar
      </button> */}
    </section>
  );
}

export default Login;
