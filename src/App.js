import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import Receitas from './Pages/Receitas';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" component={ Receitas } />
        {/* <Route path="/bebidas" component={ Bebidas } />
        <Route path="/explorar" component={ Explorar } />
        <Route path="/ingredientes" component={ Ingredientes } />
        <Route path="/perfil" component={ Perfil } />
        <Route path="/receitas-favoritas" component={ ReceitasFavoritas } />
        <Route path="/receitas-feitas" component={ ReceitasFeitas } /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
