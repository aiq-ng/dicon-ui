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
}
