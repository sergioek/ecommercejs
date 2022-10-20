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

const person = new User('sergioek','Sergio','khairallahsergio4@gmail.com','1234');
person.newUserPerson();