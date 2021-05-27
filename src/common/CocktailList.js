import { Component } from 'react';
import CocktailItem from './CocktailItem';
import './CocktailList.css';

class CocktailList extends Component {
  
  render() {
    const { cocktails, onFavorited } = this.props;
    console.log(cocktails);
    return (

      <ul className="CocktailList">
        {cocktails.map(cocktail => (
          <CocktailItem key={cocktail.drinkId + cocktail.name} cocktail={cocktail} onFavorited={onFavorited}/>
        ))}
      </ul>
    );
  }

}

export default CocktailList;