import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { CabecalhoService } from "../../services/cabecalho/cabecalho.service";

@Component({
  selector: 'apds-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  protected cabecalho = inject(CabecalhoService);
  
  ngOnInit() {
    this.cabecalho.setTitle();
    this.cabecalho.setMetaTags();
  }  
}
