import React from 'react';
import ButtonSearch from '../Components/ButtonSearch';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function ExplorarArea() {
  return (
    <div>
      <Header title="Explorar Origem">
        <ButtonSearch />
      </Header>
      <Footer />
    </div>
  );
}

export default ExplorarArea;
