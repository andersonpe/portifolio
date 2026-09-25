import { Routes } from '@angular/router';
import { RoutingEnum } from '../enums/Routing.enum';
import { AboutComponent } from '../pages/about/about.component';
import { CertificatesComponent } from '../pages/certificates/certificates.component';
import { BlogComponent } from '../pages/blog/blog.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { HomeComponent } from '../pages/home/home.component';

export const routes: Routes = [
    {
        path: RoutingEnum.Home,
        component: HomeComponent,
    },
    {
        path: RoutingEnum.About,
        component: AboutComponent,
    },
    {
        path: RoutingEnum.Certificates, 
        component: CertificatesComponent,
    },
    /*{
        path: RoutingEnum.CertificatesSlug,
      //  component: CertificateDetailComponent,
     // resolve: { user: certificateResolver }
    },*/
    { 
        path: RoutingEnum.Certs, 
        redirectTo: RoutingEnum.Certificates, 
        pathMatch: 'full' 
    }, 
    { 
        path: RoutingEnum.CertsSlug, 
        redirectTo: (redirectData) => {
            return RoutingEnum.CertificatesSlug
        },
        pathMatch: 'full' 
    }, 
    { 
        path: RoutingEnum.Blog, 
        component: BlogComponent
    },
    /*{ 
        path: RoutingEnum.BlogPost, 
        component: BlogPostComponent
    }, */  
    {
        path: RoutingEnum.NotFound, 
        component: NotFoundComponent
    }, 
];
