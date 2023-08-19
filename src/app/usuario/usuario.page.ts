import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserModels } from '../models/userModels';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UsuarioPage implements OnInit {

  userInfo: UserModels | undefined;

  constructor(private r: Router) { 


    if (this.r.getCurrentNavigation()?.extras.state){
      this.userInfo = this.r.getCurrentNavigation()?.extras.state?.['user'];

    }
  }

  ngOnInit() {
  }

}
