import { Component } from '@angular/core';
import { ResponsiveService } from './responsive/responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-responsiv-design';
  constructor(public responsiveService: ResponsiveService) {}
}
