let arrayUsers=[ ];
class User{
    constructor(user,name,email,password){
        this.user = user;
        this.name = name;
        this.email = email;
        this.password = password; 
        
    }

    newUserPerson(){
        
        let nameUser= this.user;
        nameUser= {
            user: this.user,
            name: this.name,
            email:this.email,
            password:this.password,
        }
        arrayUsers.push(nameUser);
        return arrayUsers;
            
    }
    
}


const newUser = ()=>{
   let name= prompt('Ingrese su nombre:');
   let user= prompt('Ingrese un usuario:');
   let email= prompt('Ingrese un email:');
   let password= prompt('Ingrese un password:');

   
    while(name ==='' || user ==='' || email ==='' || password ===''){
        alert('Datos obligatorios');

   }
   
   let userPerson = new User(name,user,email,password);
   userPerson.newUserPerson();
   console.log(arrayUsers)
}









