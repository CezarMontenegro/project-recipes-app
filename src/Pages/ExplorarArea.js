import React, { useContext, useEffect } from 'react';
import ButtonSearch from '../Components/ButtonSearch';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ReceitasContext from '../Context/ReceitasContext';
import { urlExploreByArea } from '../helper/helper';

function ExplorarArea() {
  const { getIngredientsByArea } = useContext(ReceitasContext);
  const [dropList, setDropList] = useState('');
  useEffect(() => { getIngredientsByArea(urlExploreByArea); }, []);

  return (
    <div>
      <Header title="Explorar Origem">
        <ButtonSearch />
      </Header>
      <select
        data-testid="explore-by-area-dropdown"
        name=""
        value={ dropList }
      >
        dfgdgf
      </select>
      <Footer />
    </div>
  );
}

export default ExplorarArea;
