import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  @Output()
  public deleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] =[{
    name: 'Trunk',
    power: 10
  }];


  onDeleteCharacter(id?: string):void{
    
    if( !id ) return;    
    this.deleteCharacter.emit(id);
    
  }

}
