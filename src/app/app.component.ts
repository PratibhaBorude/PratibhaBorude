import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  countryData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.http.get('https://restcountries.com/v3.1/all').subscribe({
      next: (res) => {
        this.countryData = res;
      },
      error: (err) => {
        console.log('Something went wrong', err);
      },
    });
  }
}
