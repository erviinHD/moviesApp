import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchMovie(searchText: string) {
    searchText = searchText.trim();
    if (searchText.length === 0) {
      return;
    }

    this.router.navigate(['/search', searchText]);

  }

}
