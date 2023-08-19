import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserModels } from '../models/userModels';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';

  listUser: UserModels[] = [
    new UserModels('Jorge','Gomez','Usuario','jgomez','jorge123'),
    new UserModels('Juan','Perez','Admin','jperez','juan123')
  ]

  constructor(private r: Router) { }

  ngOnInit() {
  }

  login(): void{
    console.log(this.username, this.password);
    for(let i = 0; i < this.listUser.length; i++){
      if(this.username == this.listUser[i].username && this.password == this.listUser[i].password){
        if(this.listUser[i].type == 'Usuario'){
          let userInfo: NavigationExtras = {
            state: {
              user: this.listUser[i]
            }
          }
          this.r.navigate(['/usuario'],userInfo);


        }else{

        }

      }
    }
  }

}
