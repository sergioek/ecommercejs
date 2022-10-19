const newUser = ()=>{
    let name= prompt('Ingrese su nombre:');
    let user= prompt('Ingrese un usuario:');
    let email= prompt('Ingrese un email:');
    let password= prompt('Ingrese un password:');
    
    while(name ==='' || user ==='' || email ==='' || password ===''){
        name= prompt('El campo nombre no puede estar vacio:');
        user= prompt('El campo  usuario no puede estar vacio:');
        email= prompt('El campo  email no puede estar vacio:');
        password= prompt('El campo  password no puede estar vacio:');
    }
   
    
   let userPerson = new User(name,user,email,password);
   userPerson.newUserPerson();
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
            loginPassword = prompt('El campo passoword no puede estar vacio.Reingrese su passoword.');
        }

        for (let i = 0; i < arrayUsers.length; i++) {
            const user = arrayUsers[i];

            if(user.email === loginEmail || user.password === loginPassword){
                loginState=true;
                alert('Se inicio sesion como' + ' ' + user.name);
                break;
    
            }else{
                  alert('El email o contraseña ingresados son icorrectos. Inicie sesión nuevamente.')
            }
        }

        
    }else{
        alert('Ya existe un usuario logueado.')
    }
    
}










