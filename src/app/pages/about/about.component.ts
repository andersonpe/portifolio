import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { CabecalhoService } from "../../services/cabecalho/cabecalho.service";

@Component({
  selector: 'apds-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit  {
  protected cabecalho = inject(CabecalhoService);
  
  ngOnInit() {
    this.cabecalho.setTitle("Sobre - Anderson Pereira da Silva");
    this.cabecalho.setMetaTags();
  }
}
