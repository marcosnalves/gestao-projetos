import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { User } from '../providers/auth/user';
import { AuthService } from '../providers/auth/auth-service';
import { LoginPage } from '../pages/login/login';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { WelcomePage } from '../pages/welcome/welcome';
import { RegisterPage } from '../pages/register/register';
import { ViacepProvider } from '../providers/viacep/viacep';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { PopoverPage } from '../pages/popover/popover';
import { ContactProvider } from '../providers/contact/contact';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
const firebaseConfig = {
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
    ResetpasswordPage,
    WelcomePage,
    RegisterPage,
    PopoverPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    AngularFireDatabaseModule
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
    User,
    AuthService,
    ViacepProvider,
    ContactProvider,
    AngularFireDatabase,
    AngularFireAuth
  ]
})
export class AppModule {}
