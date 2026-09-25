import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'apds-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  protected meta = inject(Meta);
  protected title = inject(Title);
  
  ngOnInit() {
    this.addMyMetaTags();
    this.addTitle();
  }

  private addMyMetaTags() {
    this.meta.updateTag({ name: 'keywords', content: 'Angular, SEO, Meta Tags' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'description', content: 'article' });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
  }

  private addTitle() {
    this.title.setTitle("Portifólio - Anderson P. Da Silva");
  }

}
