'use strict'
import { createStackNavigator } from 'react-navigation'
import SearchPage from '../TheApp/SearchPage'
import SearchResults from './SearchResults'

const App = createStackNavigator({
  Home: {screen: SearchPage}, 
  Results: {screen: SearchResults}
});
export default App;