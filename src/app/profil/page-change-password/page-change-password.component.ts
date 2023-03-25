import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-change-password',
  templateUrl: './page-change-password.component.html',
  styleUrls: ['./page-change-password.component.scss']
})
export class PageChangePasswordComponent implements OnInit{
  constructor(private router: Router){

  }

  ngOnInit(): void {
    
  }

  cancel(){
    this.router.navigate(['profil'])
  }
}

