import { Injectable, inject } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { Utils } from '../../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
    protected meta = inject(Meta);
    protected title = inject(Title);

    setMetaTags(metaDefinitions: MetaDefinition[] = []) {

        const description = Utils.findOneOrNull(metaDefinitions, (m: MetaDefinition) => m.name === 'description');
        this.meta.updateTag(description ? description : { name: 'description', content: 'Portfólio Anderson P. Da Silva' });


        this.meta.updateTag({ name: 'keywords', content: 'Angular, SEO, Meta Tags' });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });
        
        this.meta.updateTag({ property: 'og:type', content: 'article' });
    }

    setTitle(title: string = "Portfólio - Anderson P. Da Silva") {
        this.title.setTitle(title);
    }

}
