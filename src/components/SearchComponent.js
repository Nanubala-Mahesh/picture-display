import React from 'react';

class SearchComponent extends React.Component {
  state = {term: ''}
  
  inputChange = (event) => {
    this.setState({term: event.target.value})
  }

  OnFormSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  render(){
    return <div>
      <form className='ui form' onSubmit={this.OnFormSubmit}>
        <div>
        <label>Search</label>
          <input value={this.state.term} onChange={this.inputChange} />
        </div>
      </form>
    </div>
  }
      

}

// class SearchComponent extends React.Component{
//   render(){
//     return <div>
//       search
//       <input />
//     </div>
//   }
// }

export default SearchComponent;