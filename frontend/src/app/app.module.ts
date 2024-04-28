import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { MainComponent } from './home/main/main.component';
import { FooterComponent } from './home/footer/footer.component';
import { LoginComponent } from './login/login/login.component';
import { LogNavbarComponent } from './logado/log-navbar/log-navbar.component';
import { LogMainComponent } from './logado/log-main/log-main.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        MainComponent,
        FooterComponent,
        LoginComponent,
        LogNavbarComponent,
        LogMainComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        //AppRoutingModule,
        SocialLoginModule
    ],
    providers: [
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider(
                            '879923336819-bl2ghlpbu4hummmrrm6hpi360bfrlj39.apps.googleusercontent.com'
                        )
                    }
                ]
            } as SocialAuthServiceConfig,
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }