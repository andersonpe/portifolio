import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { HeaderService } from "../../../services/header/header.service";

@Component({
  selector: 'apds-certificate-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificate-detail.component.html',
  styleUrls: ['./certificate-detail.component.scss']
})
export class CertificateDetailComponent implements OnInit {
  protected cabecalho = inject(HeaderService);
  
  ngOnInit() {
    this.cabecalho.setTitle();
    this.cabecalho.setMetaTags();
  }  
}
