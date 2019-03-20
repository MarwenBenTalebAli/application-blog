import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../model/post.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  @Input()
  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.getPosts();
    this.postService.emitPostSubject();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
