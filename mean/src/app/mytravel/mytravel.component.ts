import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/shared/services';
import { User } from '@app/shared/interfaces';

@Component({
  selector: 'app-mytravel',
  templateUrl: './mytravel.component.html',
  styleUrls: ['./mytravel.component.css']
})
export class MytravelComponent implements OnInit {
  @Input() user: User | null = null;
  travelall = {};
  uid_ : any;
  postsPerPage = 2;
  currentPage = 1;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getposttravel().subscribe(data => {
      this.travelall =  data;
    });
    this.authService.me().subscribe(uid => {
      this.uid_ = uid._id
      console.log(this.uid_)
    });
  }

  onDelete(postId: string) {
    this.authService.delhistory(postId).subscribe(datass =>{
      this.ngOnInit()

    })
  }

}
