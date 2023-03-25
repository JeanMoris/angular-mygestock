import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bouton-action',
  templateUrl: './bouton-action.component.html',
  styleUrls: ['./bouton-action.component.scss']
})
export class BoutonActionComponent implements OnInit{

  @Input()
  isNouveauVisible: boolean = true;
  @Input()
  isExporterVisible: boolean = true;
  @Input()
  isImporterVisible: boolean = true;

  @Output()
  clickEvent = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
  }

  bouttonNouveauClick(): void {
    this.clickEvent.emit();
  }

}
