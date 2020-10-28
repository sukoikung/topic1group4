import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from '@app/shared/services/place/place.service';

@Component({
  selector: 'app-all-place',
  templateUrl: './all-place.component.html',
  styleUrls: ['./all-place.component.css']
})
export class AllPlaceComponent implements OnInit {

  d: number [] = [];
  province: any = [];
  place: any = [];
  prov: any = [];

  constructor(
    private activateroute: ActivatedRoute,
    public route: Router,
    private placeService: PlaceService
  ) { window.scroll(0, 0); }

  ngOnInit(): void {
    let x = this.activateroute.snapshot.params.dataObj;
    const obj =  JSON.parse(x);

    // tslint:disable-next-line: forin
    for (const key in obj) {
      this.d = obj[key];
    }

    this.placeService.getProvinces().subscribe(data => {
      // อ่านค่าจาก JSON response ที่ส่งออกมา
      this.prov = data;
      for (let index = 0; index < this.prov.length; index++) {
        if (this.prov[index].id.toString() == this.d) {
          this.province = data[index].province;
          this.place = data[index].place;
        }
      }
    });
  }

  gotoDescription(province: string, name: string) {
    const dataObj = {
      province: province,
      name: name
    };
    const dataString = JSON.stringify(dataObj);
    this.route.navigate(['description', dataString]);
  }

}
