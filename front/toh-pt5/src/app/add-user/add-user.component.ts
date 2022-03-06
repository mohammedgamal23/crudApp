import { Component, OnInit } from '@angular/core';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  heroUser: Hero = {
    id: 0,
    name: '',
    email:'',
    title:'',
    phone:0
  }
  submitted = false;

  constructor(private service: HeroService) { }

  ngOnInit(): void {
  }

  saveUser():void{
    const data = {
      id: this.heroUser.id,
      name: this.heroUser.name,
      email: this.heroUser.email,
      title: this.heroUser.title,
      phone: this.heroUser.phone
    }
    this.service.createItem(data)
  }

  newUser(): void {
    this.submitted = false;
    this.heroUser = {
      id: 0,
      name: '',
      title: '',
      phone: 0,
      email: ''
    };
  }


}
