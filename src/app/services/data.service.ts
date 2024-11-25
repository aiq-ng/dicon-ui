import { Injectable } from '@angular/core';
import Dexie from 'dexie'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private db!: Dexie;

  constructor() {
    this.db = new Dexie('dicDatabase');


    this.db.version(1).stores({
      users: 'id,firstName,lastName,email,password',
      programes: 'id,userId,programName,description,duration,date,status',
      gallery: 'id,programId,image,title,description',
      news: 'id,title,content,date'
    })
   }

   getUsers(){
    return [
      {
          "id": 1,
          "email": "student@gmail.com",
          "password": "password",
          "account_type": "student"
      },
      {
          "id": 2,
          "email": "staff@gmail.com",
          "password": "password",
          "account_type": "staff"

      },
      {
          "id": 3,
          "email": "admin@gmail.com",
          "password": "password",
          "account_type": "admin"

      }
  ]
   }
}
