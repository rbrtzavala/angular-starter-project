import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = () => {
  return Math.floor(Math.random() * DUMMY_USERS.length);
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex()])
  // get image path using a computed method with signals
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)
  
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }
  
  onSelectUser() {
    // 1. Option for managing state
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex()];

    // 2. Manage state with signal()
    this.selectedUser.set(DUMMY_USERS[randomIndex()])
  }
}
