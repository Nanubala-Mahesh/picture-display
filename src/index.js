import React from 'react';
import ReactDom from 'react-dom';

import SearchComponent from './components/SearchComponent';



class App extends React.Component{
  SearchFormSubmit = (term) => {
    // event.preventDefault();
    console.log('this is parent', term);
    
  }

  render(){
    return (<div className='ui container'>
      <SearchComponent onSubmit={this.SearchFormSubmit} />
    </div>)
  }
}

ReactDom.render(<App/>, document.getElementById('root'));