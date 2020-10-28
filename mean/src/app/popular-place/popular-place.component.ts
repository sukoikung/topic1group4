import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceService } from '@app/shared/services/place/place.service';

@Component({
  selector: 'app-popular-place',
  templateUrl: './popular-place.component.html',
  styleUrls: ['./popular-place.component.css']
})
export class PopularPlaceComponent implements OnInit {

  popularplaces: any = [];

  constructor(public route: Router, private placeService: PlaceService) { }

  ngOnInit(): void {
    this.placeService.getPopularPlaces().subscribe(data => {
      // อ่านค่าจาก JSON response ที่ส่งออกมา
      this.popularplaces = data;
    });
  }

}
