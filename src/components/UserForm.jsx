import React, {Component} from "react";
import { reduxForm, Field} from "redux-form";
import CustomInput from "./CustomInput";

const validate = values => {
    const errors = {}
    if(!values.name){
        errors.name = 'Nombre obligatorio'
    }
    if(!values.lastname){
        errors.lastname = 'Apellido obligatorio'
    }
    return errors
}
//conectar formulario con redux form
class UserForm extends Component{
    //todos los formularios con redux form dentro de sus propiedades van a sacar una funcion que se va a llamar
    // handle submit , se la tenemos que pasar a nuestor metodo del formulario
    //va a tomar el evento del formualrio va a prevenir el comportamiento por defecto va a pasar la validacion que le
    //indiquemos y si funciona ejecuta la funcion submit que le pasemos en la propiedad user form

    //field es un componente a que podamos crear mas componentes de campos
    render() {
        const { handleSubmit } = this.props
        return (
           <form onSubmit={handleSubmit}>
             <Field name={'name'} placeholder={'Nombre'} component={CustomInput} title={"Nombre"}/>
             <Field name={'lastname'}  placeholder={'Apellido'} component={CustomInput} title={'Apellido'}/>
             <input type={'submit'} value={'Enviar'}/>

           </form>
        );
    }
}

//currying

export default reduxForm({
    //nombre unico
    form: 'user',
    validate,
})(UserForm)