const newUser = ()=>{
    let email= prompt('Ingrese un email:');
    let password= prompt('Ingrese un password:');
    
    while(email ==='' || password ===''){
        email= prompt('El campo  email no puede estar vacio. Ingrese un email:');
        password= prompt('El campo  contraseña no puede estar vacio. Ingrese una constraseña:');
    }
   
   let userPerson = new User(email,password);
   userPerson.newUser();
   alert('Se registró un nuevo usuario');
}

let loginState;

const logOut = ()=>{
    if(loginState==true){
        loginState=null;
        alert('Sesión cerrada');
    }else{
        alert('Debe iniciar sesión');

    }
    
}

const login = ()=>{
    if(loginState==null){
        let loginEmail = prompt('Ingrese su correo');
        let loginPassword = prompt('Ingrese su contraseña');

        while(loginEmail==='' || loginPassword===''){
            loginEmail = prompt('El campo email no puede estar vacio.Reingrese su email.');
            loginPassword = prompt('El campo contraseña no puede estar vacio.Reingrese su contraseña.');
        }

        for (let i = 0; i < arrayUsers.length; i++) {
            const user = arrayUsers[i];

            if(user.email === loginEmail || user.password === loginPassword){
                loginState=true;
                alert('Se inicio sesion como' + ' ' + user.email);
                break;
    
            }else{
                  alert('El email o contraseña ingresados son icorrectos. Inicie sesión nuevamente.')
            }
        }



    }else{
        alert('Ya existe un usuario logueado.')
    }
    
}







