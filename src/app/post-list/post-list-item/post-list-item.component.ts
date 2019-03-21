import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { PostService } from 'src/app/services/post.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input()
  post: Post;
  postsSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onLoveIt() {
    this.postService.loveIt(this.post);
  }

  onDontLoveIt() {
    this.postService.dontLoveIt(this.post);
  }

  onDeletePost(post: Post) {
    this.postService.removePost(post);
  }

}
