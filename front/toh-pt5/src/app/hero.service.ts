import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { element } from 'protractor';

const baseUrl = 'http://localhost:8080/api/users';

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('UserService: fetched users');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {

    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`UserService: fetched user id=${id}`);
    return of(hero);
  }

  deleteHero(id: number): void {
    HEROES.forEach((element, index)=>{
      if(element.id == id) HEROES.splice(index,1)
    });
    this.messageService.add(`UserService: deleted user id=${id}`)
  }

  deleteAll(): void {
    HEROES.splice(0,HEROES.length)
    this.messageService.add(`UserService: deleted all users`)
  }

  updateItem(id:number, object:any): void{
    HEROES.forEach((element, index)=>{
      if(element.id == id) HEROES[id] =   {id:id,name: object.name, email: object.email, title: object.title, phone: object.phone}
    });
    this.messageService.add(`UserService: edited user id=${id}`)
  }

  createItem(data:any): void{
    HEROES.push(data)
    this.messageService.add(`UserService: added newitem name=${data.name}`)
    // return this.http.post(baseUrl, data);

  }
}
