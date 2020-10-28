import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceService } from '@app/shared/services/place/place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  place: any = [];

  constructor(public route: Router, private placeService: PlaceService) { }

  ngOnInit(): void {
    this.placeService.getPlaces().subscribe(data => {
      // อ่านค่าจาก JSON response ที่ส่งออกมา
      this.place = data;
    });
  }

  goto(id: number) {
    const dataObj = {
      index: id + 1,
    };
    const dataString = JSON.stringify(dataObj);
    this.route.navigate(['province', dataString]);
  }

}
