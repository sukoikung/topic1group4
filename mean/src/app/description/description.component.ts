import { LoginComponent } from './../auth/login/login.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@app/shared/services';
import { PlaceService } from '@app/shared/services/place/place.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  getProvince = '';
  getName = '';
  province: any = [];
  place: any = [];
  prov: any = [];
  obj: any = [];

  editRecord = {};

  isEdit = false;
  id: any;

  reviewer = {
    name : '',
    message : '',
  };

  show_comment: any = [];
  // show = true;

  c: any;

  dataId: any;

  reviews: any;

  constructor(
    private activateroute: ActivatedRoute,
    public route: Router,
    private placeService: PlaceService,
    private authService: AuthService
  ) { window.scroll(0, 0); }

  ngOnInit(): void {
    console.log('***********************');
    let x = this.activateroute.snapshot.params.dataObj;
    this.obj =  JSON.parse(x);
    // console.log('obj =', this.obj);

    this.getProvince = this.obj.province;
    // console.log('province =', this.getProvince);
    this.getName = this.obj.name;
    // console.log('name =', this.getName);

    this.placeService.getProvinces().subscribe(data => {
      // อ่านค่าจาก JSON response ที่ส่งออกมา
      this.prov = data;
      for (let index = 0; index < this.prov.length; index++) {
        if (this.prov[index].province == this.getProvince) {
          // console.log('data =', this.prov[index]);
          // console.log('place =', this.prov[index].place);
          let j = this.prov[index].place.findIndex((item: any, i: any) => {
            return item.name === this.getName;
          });
          // console.log('j =', j);
          this.place = this.prov[index].place[j];
          // console.log('place =', this.place.name);

          // console.log(index, filteredObj);
          // let i = this.prov[index].province.findIndex(obj => obj.name === this.getName);
          // console.log('index =', i);
          // this.province = data[index].province;
          // this.place = data[index].place;
        }
      }
    });

    this.placeService.getComments().subscribe(data => {
      this.reviews = data;
      // console.log('review =', this.reviews[0]);
      // console.log('place1 =', this.place);
      for (let index = 0; index < this.reviews.length; index++) {
        // console.log('getname =', this.getName);
        // console.log('place_name =', this.reviews[index].place_name);
        if (this.reviews[index].place_name == this.getName) {
          // console.log('test =', this.reviews[index]);
          let n = {
            name: this.reviews[index].name,
            message: this.reviews[index].message
          };
          // console.log('n =', n);
          this.show_comment.push(n);
          // console.log('shoe =', this.show_comment);

        }
      }
    });

    // if (this.reviews !== '' || this.reviews !== null || this.reviews !== undefined) {
    //   this.show = false;
    //   console.log(this.show);
    // }

  }

  submit(place: any) {
    let cal = this.reviews.length + 1;
    let a = {
      id: cal.toString(),
      place_name: place,
      name: this.reviewer.name,
      message: this.reviewer.message
    };

    let b = JSON.stringify(a);
    // console.log();
    // console.log('count =', this.reviews.length);
    // console.log('a =', a);
    // console.log('a JSON  =', JSON.stringify(a));
    // console.log('name =', this.reviewer.name);
    // console.log('message =', this.reviewer.message);
    // console.log('a parse =', JSON.parse(a));
    // this.placeService
    // .postReviews(b)
    // .subscribe(hero => this.c.push(hero));
    // this.placeService.postReviews(b).subscribe((response: {}) =>
    //   alert('บันทึกเรียบร้อย'),
    // );
    this.placeService.postComments(a).subscribe((response: {}) =>
      alert('บันทึกเรียบร้อย'),
    );
    // this.show = true;
  }

  editdata(record: any) {
    this.isEdit = true;
    this.id = record.id;
    this.editRecord['name'] = record['name'];
    this.editRecord['message'] = record['message'];
    // console.log(record);
  }

  submitUpdate() {
    let cal = this.reviews.length + 1;
    let i;
    // console.log('namesssss =', this.editRecord['name']);
    for (let index = 0; index < this.reviews.length; index++) {
      // console.log('id =', this.reviews[index].id);
      // console.log('cal =', cal);
      if (this.reviews[index].name == this.editRecord['name']) {
        i = this.reviews[index].id;
        this.dataId = this.reviews[index]._id;
      }
      // console.log('i =', i);

      // let k = this.reviews[index]._id.findIndex((item: any, i: any) => {
      //   return item.id == i.toString();
      // });

      // console.log('_id =', this.dataId);
    }


    let a = {
      _id: this.dataId,
      id: i.toString(),
      place_name: this.getName,
      name: this.editRecord['name'] || this.reviewer.name,
      message: this.editRecord['message'] || this.reviewer.message
    };
    this.placeService.updateComment(a).subscribe(response => {
      alert('แก้ไขเรียบร้อย');
    });
    this.reviewer.name = this.editRecord['name'];
    this.reviewer.message = this.editRecord['message'];

  }

  deleteComment(name: any) {
    let rowid;
    for (let index = 0; index < this.reviews.length; index++) {
      if (this.reviews[index].name == name) {
        rowid = this.reviews[index]._id;
      }
    }
    let a = {
      _id: rowid,
    };
    this.placeService.deleteComment(a).subscribe(response => {
      alert('ลบเรียบร้อย');
    });
  }

}
