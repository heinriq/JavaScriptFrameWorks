'use strict'

import React from 'react';
import {
  StyleSheet,
  Text, 
  View, 
  Button, 
  TextInput, 
  ActivityIndicator 
} from 'react-native';

function urlForQueryAndPage(key, value, pageNumber){
  const data = {
    country: 'uk',
    pretty: '1',
    encoding: 'json',
    listing_type: 'buy',
    action: 'search_listings',
    page: pageNumber,
};
data[key] = value;

const querystring = Object.keys(data)
  .map(key => key + '=' + encodeURIComponent(data[key]))
  .join('&');

return 'https://api.nestoria.co.uk/api?' + querystring;
}

export default class SearchPage extends React.Component {    
    static navigationOptions = {
        title: 'Property Finder',
      };

    constructor(props){
    super(props);
    this.state ={
      searchString: 'London',
      isLoading: false,
      message: ''
    };
  }  
  
  _executeQuery = (query) => {
    console.log(query)
    this.setState({isLoading : true});
    fetch(query)
        .then(response => response.json())
        .then(json => this._handleResponse(json.response))
        .catch(error => 
        this.setState({
            isLoading: false,
            message: 'Something bad happened' + error
        }));
  };

  _handleResponse = (response) => {
      this.setState({isLoading: false, message: ''});
      if(response.application_response_code.substr(0, 1) === '1'){
          this.props.navigation.navigate(
            'Results', {listings: response.listings});
      } else {
        this.setState({message: 'Local não encontrado'});
      }
  };

  _onSearchPressed = () => {
    console.log(this.state.searchString);
    const query = urlForQueryAndPage('place_name', this.state.searchString, 1);
    this._executeQuery(query);
  };

  _onSearchTextChanged = (event) =>{
    this.setState({searchString: event.nativeEvent.text });
  }

  static navigationOptions = {
    title: 'Sexto Andar',
  };

  render() {
    const spinner = this.state.isLoading? <ActivityIndicator size='large'/> : null;
    console.log('SearchPage.render');
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Onde você quer morar?</Text>                      
        <TextInput          
          style={styles.searchInput}
          value={this.state.searchString}
          onChange={this._onSearchTextChanged}
          placeholder = "Local"/>
        <Button
          onPress ={this._onSearchPressed}
          title="Pesquisar"
          color='#48BBEC'
        />
        {spinner}           
        <Text style={styles.description}>{this.state.message}</Text>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#fff'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    width: 55,
    fontSize: 18,
    borderColor: '#58BBEC',
    color: '#9370DB',
    alignSelf: 'center'
  }
});