import { Component } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public attribute = { id: 'hello' }

  public onButtonClick() {
    if (this.attribute.id === 'hello') {
      this.attribute = {id: 'bye'}
    }
    else {
      this.attribute = {id: 'hello'}
    }
  }
}
