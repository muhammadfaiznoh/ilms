import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MyAccountPage } from '../my-account/my-account';
import { CartPage } from '../cart/cart';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation. <ion-tab tabIcon="construct" [root]="joblist" tabTitle="Jobs"> </ion-tab>
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  template:  `
  <ion-tabs>
  <ion-tab tabIcon="home" [root]="home" tabTitle="HOME" > </ion-tab> 
  <ion-tab tabIcon="md-cart" [root]="cart" tabTitle="CART"> </ion-tab>
  
  <ion-tab tabIcon="md-person" [root]="profile" tabTitle="PROFILE"> </ion-tab>
      </ion-tabs>
  `,
})
export class TabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  home = HomePage;
  profile = MyAccountPage;
  cart= CartPage;
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
