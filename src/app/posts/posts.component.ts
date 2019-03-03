import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsArray: any;
  apiURL : string = 'http://localhost:3000/api/';
  constructor(private posts : PostsService) { }

  ngOnInit() {
    this.posts.getAllPosts(this.apiURL + "posts").subscribe(
      data => {
        // console.log(JSON.stringify(data));
        this.postsArray = data["data"];
      },
      error =>{}
    );
  }


}
