const validator = (inputsDataLogin) => {
    let errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputsDataLogin.email)){
        errors.e1 = 'Ingresa un email válido'
    }
    if(!inputsDataLogin.email){
        errors.e2 = 'Ingresa un email'
    }
    if(inputsDataLogin.email.length > 35){
        errors.e3 = 'Debe tener menos de 35 caracteres.'
    }

    if(!(/\d/.test(inputsDataLogin.password))){
        errors.p1 = 'La contraseña debe contener al menos un numero'
    } 
    if(inputsDataLogin.password.length < 6 || inputsDataLogin.password.length > 10){
        errors.p2 = 'La contraseña debe contener entre 6 y 10 caracteres.'
    }

    return errors;
}

export default validator