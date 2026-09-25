import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { CabecalhoService } from "../../services/cabecalho/cabecalho.service";

@Component({
  selector: 'apds-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  protected cabecalho = inject(CabecalhoService);
  
  ngOnInit() {
    this.cabecalho.setTitle();
    this.cabecalho.setMetaTags();
  }
}
