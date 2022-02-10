import React, {FunctionComponent} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';

  
const App: FunctionComponent = () => {

 return (
  <Router>
      <div>
          {/*Barre de navigation*/ }
          <nav>
            <div className="nav-wrapper teal">
                <Link to="/" className="brand-logo center">Pokédex</Link>
            </div>
          </nav>
          {/*Système de gestion des routes*/ }
           <Switch>
                <Route exact path='/' component={PokemonList} /> 
                <Route exact path='/pokemons' component={PokemonList} /> 
                <Route exact path='/pokemons/edit/:id' component={PokemonEdit} /> 
                <Route path='/pokemons/:id' component={PokemonDetail} />  
                <Route component={PageNotFound} />  

           </Switch> 
      </div>
  </Router>
 )
}
  
export default App;