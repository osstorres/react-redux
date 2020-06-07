import React, { Component } from 'react';
import { connect } from 'react-redux'
import { incrementar, decrementar, setear} from './reducers'
import logo from './logo.svg';
import './App.css';


class App extends Component {

    handleSetear = e => {
        const {setear} = this.props
        const { valor } = this.state
        setear(Number(valor))
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({[name]:value})
    }
  render() {
    const { incrementar, decrementar, valor } = this.props
    return (
        <div className="App">
          <p>{valor}</p>
          <button onClick={incrementar}>Incrementar</button>
          <button onClick={decrementar}>Decrementar</button>
            <input name={'valor'} onChange={this.handleChange}/>
            <button onClick={this.handleSetear}>Setear</button>

        </div>
    );
  }

}

//adaptar este estado a entregarle al componente de app lo unico que necesita para poder funcionar
const mapStateToProps = state => {
  return{
    valor: state,
  }
}

//funcion que recibe dispatch tomar acciones que se vayan a despachar y transformarlas en componentes

const mapDispatchToProps = dispatch => ({
  incrementar: () => dispatch(incrementar()),
  decrementar: () => dispatch(decrementar()),
  setear: payload => dispatch(setear(payload)),

})
export default connect(mapStateToProps, mapDispatchToProps)(App);
