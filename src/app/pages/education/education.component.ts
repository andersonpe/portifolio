import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { CabecalhoService } from "../../services/cabecalho/cabecalho.service";

@Component({
  selector: 'apds-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  protected cabecalho = inject(CabecalhoService);
  
  ngOnInit() {
    this.cabecalho.setTitle();
    this.cabecalho.setMetaTags();
  }  
}
