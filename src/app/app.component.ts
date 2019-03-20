import { Component } from '@angular/core';
import { Post } from './model/post.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'application-blog';
  posts: Post[];
  constructor() {
    const config = {
      apiKey: 'AIzaSyCmdXCcyCOvsb_Vvz_SUVtCc6yexf50dSg',
      authDomain: 'app-blog-6f8a9.firebaseapp.com',
      databaseURL: 'https://app-blog-6f8a9.firebaseio.com',
      projectId: 'app-blog-6f8a9',
      storageBucket: 'app-blog-6f8a9.appspot.com',
      messagingSenderId: '138274869903'
    };
    firebase.initializeApp(config);
  }
}
