import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-movie-header',
  templateUrl: './movie-header.component.html',
  styleUrls: ['./movie-header.component.css']
})
export class MovieHeaderComponent {
  constructor(private auth: AuthService) { }
  onLogout() {
    this.auth.logout()
  }
}
