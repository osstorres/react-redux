import React, { Component } from 'react';
import { connect } from 'react-redux'
//import { incrementar, decrementar, setear} from './reducers'
// import logo from './logo.svg';
import UserForm from "./components/UserForm";
import './App.css';


class App extends Component {
    handleSubmit = payload => {
        console.log(payload)

    }

  render() {
    return (
        <div className="App">
        <UserForm onSubmit={this.handleSubmit}/>
        </div>
    );
  }

}

//adaptar este estado a entregarle al componente de app lo unico que necesita para poder funcionar
const mapStateToProps = state => {

  return{
    valor: state.contador,
  }
}

//funcion que recibe dispatch tomar acciones que se vayan a despachar y transformarlas en componentes

const mapDispatchToProps = dispatch => ({
  //incrementar: () => dispatch(incrementar()),
  //decrementar: () => dispatch(decrementar()),
  //setear: payload => dispatch(setear(payload)),

})
export default connect(mapStateToProps, mapDispatchToProps)(App);
