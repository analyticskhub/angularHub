import { Routes, RouterModule } from '@angular/router';

//import the common components from commons directory
import {HeaderComponent} from './commons/header/header.component';
import {NavComponent} from './commons/nav/nav.component';

//import the core components from components directory
import {HomeComponent} from './components/home/home.component';


const appRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent}
    /*
    {path: 'about', component: AboutComponent},
    {path: 'pattern', component: PatternMainComponent},
    {path: 'change-log', component: ChangelogComponent},
    {path: 'pattern/:type', component: PatternTypeComponent}
    */
];
export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);