//Herança

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      public introduceYourself(): string {
          return `Olá, sou ${this.name}. Bom dia!`
      }
  }

  const usuario: User = new User (
      "abcd", "blablabla@email.com", "Usuário", "abdc@1234"
  )

//console.log(usuario.getId(), usuario.getName(), usuario.getEmail())

  //Exercício 01
  //a)Não seria possível.
  //b)Uma vez

  //Exercício 02

  class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

//a)Uma vez
//b)Uma vez, pois a classe Customer é filha e quando um método dessa classe é chamado a frase é impressa.
  const customer:Customer = new Customer(
      "abcd", "blablabla@email.com", "Hugo", "abdc@1234", "1234-5678-9101-1121"
      )

//console.log(customer.getId(), customer.getName(), customer.getEmail(), customer.getCreditCard(), customer.purchaseTotal)

//Exercício 03
//a)Não, pois é uma propriedade privada e não há um método para acessá-la.

//Exercício 04
console.log(customer.introduceYourself())

//Exercício 05
//Método alterado no código.

//Polimorfismo

export interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
}

const client: Client = {
    name: "Marcela",
    registrationNumber: 5,
    consumedEnergy: 600,
  
    calculateBill: () => {
      return 2;
    }
  }

  //Exercício 01
  console.log(client.name, client.registrationNumber, client.consumedEnergy, client.calculateBill())
  //a)Consegui imprimir todas as propriedades.