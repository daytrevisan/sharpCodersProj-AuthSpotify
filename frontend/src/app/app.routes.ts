import { Routes } from '@angular/router';
import { HeaderComponent } from './home/header/header.component';
import { MainComponent } from './home/main/main.component';
import { FooterComponent } from './home/footer/footer.component';
import { LoginComponent } from './login/login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
];
