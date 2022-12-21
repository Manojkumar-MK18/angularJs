import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-moviepage',
  templateUrl: './moviepage.component.html',
  styleUrls: ['./moviepage.component.css'],
})
export class MoviepageComponent {
  treandingMoviesList: any = [];

  constructor(public http: HttpClient) {}
  ngOnInit() {
    this.getTreandingMoviesList();
  }
  getTreandingMoviesList() {
    this.http
      .get('http://localhost:4200/assets/data/trending-movies.json')
      .subscribe((list) => (this.treandingMoviesList = list));
  }
}
