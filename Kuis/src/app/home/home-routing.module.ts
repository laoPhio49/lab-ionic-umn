import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page'

const routes: Routes = [
    {
        path: 'halaman',
        component: HomePage,
        children: [
            {
                path: 'halhome',
                loadChildren: './halhome/halhome.module#HalhomePageModule'
            },
            {
                path: 'halprofile',
                loadChildren: './halprofile/halprofile.module#HalprofilePageModule'
            },
            {
                path: '',
                redirectTo: '/home/halaman/halhome',
                pathMatch: 'full'
            },
        ]
    },    
    {
        path: '',
        redirectTo: '/home/halaman/halhome',
        pathMatch: 'full'
    },
  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {}