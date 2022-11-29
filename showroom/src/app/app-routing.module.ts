import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowroomAboutComponent } from './showroom-about/showroom-about.component';
import { ShowroomProductComponent } from './showroom-product/showroom-product.component';


const routes: Routes =  [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: ShowroomProductComponent
    },
    {
        path: 'about',
        component: ShowroomAboutComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }