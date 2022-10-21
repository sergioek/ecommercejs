let arrayUsers=[];
class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    newUser(){
        let object={
            email:this.email,
            password:this.password,
        }
        arrayUsers.push(object);
        return arrayUsers;   
    }
    
}

// const person = new User('khairallahsergio4@gmail.com','1234');
// person.newUser();

const objectProducts={
    'tazarosa':{
        name:'Taza rosa',
        mark:'Nuju',
        price:1900,
        description:'Cerámica'
    },

    'tazaverde':{
        name:'Taza verde',
        mark:'Nuju',
        price:1400,
        description:'Cerámica frágil'
    },

    'tazanegra':{
        name:'Taza negra',
        mark:'Kalou',
        price:100,
        description:'Plástico'
    }
    
}
class Producto{
    constructor(name,mark,price,description){
        this.name=name;
        this.mark=mark;
        this.price=price;
        this.description=description; 
    }

    addProduct(){
        objectProducts.producto1={
            name:this.name,
            mark:this.mark,
            price:this.price,
            description:this.description,
        }
        
        return objectProducts;
    }

}

const producto1= new Producto('Taza Negra','Naku','1300','Cerámica');
producto1.addProduct()

console.log(objectProducts)

