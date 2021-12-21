import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  switch1: boolean;
  switch2: boolean = true;
  switch3: boolean;
  switch4: boolean;
}
