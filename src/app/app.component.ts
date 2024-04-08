import { Component } from '@angular/core';

@Component({
  selector: 'app-root, .placki[sos=bananowy]',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mtu';

  alert(msg = '') {
    window.alert(msg);
  }
}

// console.log();
// window.alert()
