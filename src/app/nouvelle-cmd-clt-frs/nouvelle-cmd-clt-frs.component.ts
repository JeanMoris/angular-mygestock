import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrls: ['./nouvelle-cmd-clt-frs.component.scss']
})
export class NouvelleCmdCltFrsComponent implements OnInit{
  origin = '';
  constructor(private activatedRoute: ActivatedRoute,
              private route: Router){}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin']
    })
  }

  cancel(){
    if (this.origin == 'client'){
      this.route.navigate(['commandeclient'])
    } else {
      this.route.navigate(['commandefournisseur'])
    }
  }
}
