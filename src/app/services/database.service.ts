import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  sqlobj : SQLiteObject;

  constructor(private sqlite:SQLite,private plartform :Platform) {

    this.plartform.ready().then(()=>{

      this.sqlite.create({
        name: 'product.db',
        location: 'default'
      }).then((db: SQLiteObject) => {



          db.executeSql('create table  if not exists dance(name  TEXT)', [])
            .then(() => console.log('Executed SQL'))
            .catch(e => console.log(e));


        })
        .catch(e => console.log(e));

//'create table  products(uid varchar(250) PRIMARY KEY,productName varchar(250) NOT NULL,productPrice double NOT NULL,productQty int(11) NOT NULL,productImage varchar(250) NOT NULL)'


    })


   }

  public  addproduct(id,name,price,qty,img)
   {

    this.sqlobj.transaction((tx) => {
      tx.executeSql("INSERT INTO software (name, company, type, version) VALUES (?,?,?,?)", 
      [ "offline-storage", "ionic", "native", "2.0"], (tx, result) => {
        console.log("insertId: " + result.insertId);  // New Id number
        console.log("rowsAffected: " + result.rowsAffected);  // 1
      });
    });


      let q ="INSERT INTO dance values(?)"
    // this.sqlobj.executeSql('Insert Into products values(?,?,?,?,?)',[id,name,price,qty,img]);

    return  this.sqlobj.executeSql(q,["Stuur"]).then((data)=>{

      console.log("Successfully Saved")
    }).catch(err=>{

      console.log(err)
    })
   }

   public getall()
   {
    let items =[]
    this.sqlobj.executeSql("SELECT * FROM  daceMoves", []).then((data) => {

        if(data.rows.length > 0) {
            for(var i = 0; i < data.rows.length; i++) {
                items.push(data.rows.item(i));
            }
        }
    }, (e) => {

        console.log("Errot: " + JSON.stringify(e));
    });
    return items;
   }

   public findAll() {

    let items =[]
    this.sqlobj.executeSql("SELECT * FROM products", []).then((data) => {

        if(data.rows.length > 0) {
            for(var i = 0; i < data.rows.length; i++) {
                items.push(data.rows.item(i));
            }
        }
    }, (e) => {

        console.log("Errot: " + JSON.stringify(e));
    });



}



}
