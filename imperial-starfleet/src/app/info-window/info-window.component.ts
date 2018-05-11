import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css']
})
export class InfoWindowComponent implements OnInit {
  dataBanks: any;
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach( (element) => {
        console.log('NG ON IT', element.id);
        if (element.id) {
          this.findTurret(element.id);
        }
    });
  }

  findTurret(turretNumber) {
    console.log('called findturrett method');
    this.http.get('http://localhost:3000/api/turret/' + turretNumber)
    .subscribe( (response) => {
      console.log(response);
      console.log(response.json());
      this.dataBanks = response.json();
    });
  }
  //   this.http.get('http://localhost:3000/api/turret/' + turretNumber)
  //   .toPromise()
  //   .then( (response) => {
  //     console.log(response);
  //     console.log(response.json());
  //     this.dataBanks = response.json();
  //   });
  // }

}
