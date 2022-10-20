let arrayUsers=[ ]; 
class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    newUser(){
        let userEmail= this.email;
        userEmail={
            email:this.email,
            password:this.password,
        }

        arrayUsers.push(userEmail);
        return arrayUsers;   
    }
    
}

const person = new User('khairallahsergio4@gmail.com','1234');
person.newUser();


class Producto{
    constructor()
}

