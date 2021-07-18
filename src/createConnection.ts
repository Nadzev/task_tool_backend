import { Connection, createConnection, SimpleConsoleLogger } from "typeorm";

createConnection().then((conn: Connection) => {
    console.log('Conectado!');
    conn.close();
}).catch(e => {
    console.log('Erro',e);
});