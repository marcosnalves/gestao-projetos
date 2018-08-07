import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { AngularFireModule, FirebaseNameOrConfigToken } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { WelcomePage } from '../pages/welcome/welcome';

import { AuthService } from '../providers/auth/auth-service';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { PopoverPage } from '../pages/popover/popover';

const firebaseConfig ={
  apiKey: "AIzaSyCAekJjE8M6gWv2IPCLYp4GECTLKxVtPV4",
  authDomain: "app-teste-abf9a.firebaseapp.com",
  databaseURL: "https://app-teste-abf9a.firebaseio.com",
  projectId: "app-teste-abf9a",
  storageBucket: "app-teste-abf9a.appspot.com",
  messagingSenderId: "1035464208848"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    WelcomePage,
    ResetpasswordPage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ScreenOrientation
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    WelcomePage,
    ResetpasswordPage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
