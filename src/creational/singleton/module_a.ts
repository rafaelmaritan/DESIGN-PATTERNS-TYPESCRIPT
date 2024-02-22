// import { MyDatabaseClassic } from "./db/my-database-classic";
import { MyDatabaseFunction } from "./db/my-database-function";
import { MyDatabaseModule } from "./db/my-database-module";

const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: "Rafael", age: 31 });
myDatabaseClassic.add({ name: "Maria", age: 31 });
myDatabaseClassic.add({ name: "Joao", age: 31 });
