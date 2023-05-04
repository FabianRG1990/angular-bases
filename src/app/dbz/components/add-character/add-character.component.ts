import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss'],
})
export class AddCharacterComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public addCharacter: Character = {
    name: '',
    power: 0,
  };

  emitCharacter() {
    console.log(this.addCharacter);
    if (this.addCharacter.name.length === 0) return;

    this.onNewCharacter.emit(this.addCharacter);

    // this.addCharacter.name = '';
    // this.addCharacter.power = 0;
    this.addCharacter = { name: '', power: 0 };
  }
}
