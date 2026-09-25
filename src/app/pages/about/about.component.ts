import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { HeaderService } from "../../services/header/header.service";

@Component({
  selector: 'apds-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit  {
  protected cabecalho = inject(HeaderService);
  
  ngOnInit() {
    this.cabecalho.setTitle("Sobre - Anderson Pereira da Silva");
    this.cabecalho.setMetaTags();
  }
}
