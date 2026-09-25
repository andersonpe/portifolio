import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { HeaderService } from "../../services/header/header.service";

@Component({
  selector: 'apds-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  protected cabecalho = inject(HeaderService);
  
  ngOnInit() {
    this.cabecalho.setTitle();
    this.cabecalho.setMetaTags();
  }
}
