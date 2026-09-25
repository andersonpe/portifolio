import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { HeaderService } from "../../../services/header/header.service";

@Component({
  selector: 'apds-blog-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  protected cabecalho = inject(HeaderService);
  
  ngOnInit() {
    this.cabecalho.setTitle();
    this.cabecalho.setMetaTags();
  }  
}
