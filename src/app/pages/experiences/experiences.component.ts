import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { HeaderService } from "../../services/header/header.service";

@Component({
  selector: 'apds-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  protected cabecalho = inject(HeaderService);
  
  ngOnInit() {
    this.cabecalho.setTitle();
    this.cabecalho.setMetaTags();
  }
}
