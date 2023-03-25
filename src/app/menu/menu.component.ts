import { Component, OnInit } from '@angular/core';
import { Mymenu } from './mymenu';
import 'bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  private lastSelectedMenu :Mymenu 
  public menuProperties:Array<Mymenu> = [{
    id: '1',
    titre: 'Tableau de bord',
    icon: 'fas fa-chart-line',
    url: '',
    sousMenu: [
      {
        id: '11',
        titre: 'Vue d\'ensemble',
        icon: 'fas fa-chart-pie',
        url: ''
      },
      {
        id: '12',
        titre: 'Statistiques',
        icon: 'fa fa-bar-chart',
        url: 'statistiques'
      }
    ]
  },
  {
    id: '2',
    titre: 'Articles',
    icon: 'fas fa-folder',
    url: '',
    sousMenu: [
      {
        id: '21',
        titre: 'Articles',
        icon: 'far fa-file-alt',
        url: 'articles'
      },
      {
        id: '22',
        titre: 'Mouvements de stock',
        icon: 'fas fa-arrows-alt-h',
        url: 'mvtstk'
      }
    ]
  },
  {
    id: '3',
    titre: 'Clients',
    icon: 'fas fa-users',
    url: '',
    sousMenu: [
      {
        id: '31',
        titre: 'Clients',
        icon: 'far fa-user',
        url: 'clients'
      },
      {
        id: '32',
        titre: 'Commandes clients',
        icon: 'fas fa-shopping-cart',
        url: 'commandeclient'
      }
    ]
  },
  {
    id: '4',
    titre: 'Fournisseurs',
    icon: 'fas fa-truck',
    url: '',
    sousMenu: [
      {
        id: '41',
        titre: 'Fournisseurs',
        icon: 'fas fa-user-tie',
        url: 'fournisseurs'
      },
      {
        id: '42',
        titre: 'Commandes fournisseurs',
        icon: 'fas fa-truck-loading',
        url: 'commandefournisseur'
      }
    ]
  },
  {
    id: '5',
    titre: 'Paramètrage',
    icon: 'fas fa-wrench',
    url: '',
    sousMenu: [
      {
        id: '51',
        titre: 'Categories',
        icon: 'fas fa-tag',
        url: 'categories'
      },
      {
        id: '52',
        titre: 'Utilisateurs',
        icon: 'fas fa-user-secret',
        url: 'utilisateurs'
      }
    ]
  }
]
  constructor(private router: Router){}

  ngOnInit(): void {
    
  }

  navigate(menu: Mymenu){
    if (this.lastSelectedMenu){
      this.lastSelectedMenu.active = false
    }
    menu.active = true;
    this.router.navigate([menu.url])
    this.lastSelectedMenu = menu
  }
}
