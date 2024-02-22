import { MyDatabaseClassic } from "./db/my-database-classic";
import { MyDatabaseFunction } from "./db/my-database-function";
import { MyDatabaseModule } from "./db/my-database-module";

import "./module_a";

const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: "Matheus", age: 31 });
myDatabaseClassic.add({ name: "Rodrigo", age: 31 });
myDatabaseClassic.add({ name: "Denise", age: 31 });

myDatabaseClassic.show();
