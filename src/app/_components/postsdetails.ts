import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../api.service';
import { Post} from './post';


@Component({
  selector: 'postsdata',
  templateUrl: './postsdetails.html',
  providers: [ApiService]
})
export class PostsDetailsComponent {  
  public message: string;
  //public values: any[];  
  public news = new Post();
  private liveURL = "https://jsonplaceholder.typicode.com/posts/";
  private serviceURL = "";
  private postId;

  constructor(private service: ApiService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.postId = params["id"]);
  }
  
  private ngOnInit() {
    this.serviceURL = this.liveURL;   


    this.service.getSingle<Post>(this.serviceURL, this.postId).subscribe(data => {
      this.news = data;    

    });
    
  }


}
