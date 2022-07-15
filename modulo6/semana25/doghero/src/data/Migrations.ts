import { BaseDatabase } from "./BaseDatabase";

export class Migrations extends BaseDatabase {
  public printError = (error: any) => {
    console.log(error.sqlMessage || error.message);
  };

  public createTables = () =>
    this.connection
      .raw(
        `
CREATE TABLE IF NOT EXISTS DogWalking(  
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  status ENUM ('a iniciar', 'em andamento', 'finalizado'),
  data DATE NOT NULL,
  preco INT NOT NULL,
  duracao INT NOT NULL,
  latitude INT NOT NULL,
  longitude INT NOT NULL,
  hora_inicio TIME NOT NULL,
  hora_fim TIME NOT NULL
);

CREATE TABLE IF NOT EXISTS DogWalking_Pets(
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  nome VARCHAR(255) NOT NULL,
  tutor VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS DogWalking_Pets_Passeios(
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  pet_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (pet_id) REFERENCES DogWalking_Pets (id),
  passeio_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (passeio_id) REFERENCES DogWalking (id)
);
`
      )
      .then(() => {
        console.log("Tabelas criadas");
      })
      .catch(this.printError);

  public closeConnection = () => {
    this.connection.destroy();
  };
}

const myMigrations = new Migrations();

myMigrations.createTables().finally(myMigrations.closeConnection);
