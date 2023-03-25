import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.scss']
})
export class PageClientComponent implements OnInit{
origin =  '';
constructor(private  router: Router,
            private  activatedRoute: ActivatedRoute){}
  
ngOnInit(): void {
  this.activatedRoute.data.subscribe(data => {
    this.origin = data['origin']
   })
}

nouveauClient(): void {
   this.router.navigate(['nouveauclient'])
}
}
