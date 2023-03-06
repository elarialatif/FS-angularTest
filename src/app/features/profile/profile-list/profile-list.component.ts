import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/app/user.service';
@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  users : [] = [];
  profileData: any;
  errorMessage = '';
  constructor(
    private _user: UserService,

  ) {
  }


  ngOnInit(): void {
    this.getProfileData();
    this.getProfileDataById();
  }
  private getProfileData() {
    this._user.getProfile().subscribe({
      next: (res) => {
        if (res) {
          this.users = res;

        }
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    })
  }
  private getProfileDataById() {
    this._user.getProfileById().subscribe({
      next: (res) => {
        if (res) {
          this.profileData = res;
          console.log(this.profileData);
        }
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    })
  }
}
