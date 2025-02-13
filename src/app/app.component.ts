import { Component } from '@angular/core';
import { TopTenListComponent } from './top-ten-list/top-ten-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopTenListComponent],
  template: `
    <div class="mat-app-background">
      <app-top-ten-list />
    </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'manage-list';
}
