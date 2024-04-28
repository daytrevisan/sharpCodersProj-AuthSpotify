import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { 
  SocialAuthService,
  SocialUser,
  GoogleLoginProvider
} from 'angularx-social-login';
import { HeaderComponent } from './home/header/header.component';
import { MainComponent } from './home/main/main.component';
import { FooterComponent } from './home/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user: SocialUser | null;
  hasApiAccess = false;

  constructor(private authService: SocialAuthService, private http: HttpClient) 
  { 
	this.user = null;
	this.authService.authState.subscribe((user: SocialUser) => {
	  console.log(user);
	  if (user) {
		this.http.post<any>('https://localhost:5001/user/authenticate', { idToken: user.idToken }).subscribe((authToken: any) => {
            console.log(authToken);

			let reqHeader = new HttpHeaders({ 
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + authToken.authToken
				});
			this.http.get<any>('https://localhost:5002/secured', { headers: reqHeader }).subscribe((data: any) => {
			this.hasApiAccess = true;
			})		
        })		  
	  }
	  this.user = user;
	});
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((x: any) => console.log(x));
  }


  signOut(): void {
    this.authService.signOut();
	  this.hasApiAccess = false;
  }  
}