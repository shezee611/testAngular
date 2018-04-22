import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Post } from './post';



@Component({
  selector: 'postsdata',
  templateUrl: './posts.html',
  providers: [ApiService]
})
export class PostsComponent {  
  public message: string;
  //public values: any[];
  public values: Post[] = [];
  public postData = new Post();
  private liveURL = "https://jsonplaceholder.typicode.com/posts";  
  private serviceURL = "";

  constructor(private service: ApiService) {    
  }

  showAlert(title) {
    alert(title);
  }

  private ngOnInit() {
    this.serviceURL = this.liveURL;
     // creating one news
    /*this.postData.body = "my post body";
    this.postData.title = "My post title";
    this.postData.userId = 3184;
    */
    // posting one news
    //this.service.add<Post>(this.serviceURL, this.postData).subscribe(data => { console.log(data) });

    // calling get function to pull all the news
    this.service.getAll<Post[]>(this.serviceURL).subscribe((data: Post[]) => {
      this.values = data;

      // pusing all news to post api
      //data.forEach((p) => {
        //console.log(p.title);
        //this.service.add<Post>(this.serviceURL, p).subscribe(datax => { console.log(datax) });
      //});

    });
    
    
  }


}
