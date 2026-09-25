import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { HeaderService } from "../../services/header/header.service";

@Component({
  selector: 'apds-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  protected cabecalho = inject(HeaderService);
  
  ngOnInit() {
    this.cabecalho.setTitle();
    this.cabecalho.setMetaTags();
  }  
}
