import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import CardData from './Card'
import RenderView from './RenderView'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=20').then(result => {
      this.setState({
        data: result.data
      })
    })
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Generate Bootstrap row and cols in easy way</h1>
          {
            this.state.data ? <RenderView
              row={2}
              column={4}
              classListRow="row-gap"
              data={this.state.data}
              component={({data}) => <CardData {...data} />}
            /> : ""
          }
        </div>

      </div>
    );
  }
}

export default App;
