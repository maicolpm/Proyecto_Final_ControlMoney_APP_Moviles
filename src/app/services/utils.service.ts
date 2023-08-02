import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, AlertOptions, LoadingController, LoadingOptions, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private loadingController: LoadingController,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  //////loading
  //present
  async presentLoading(opts?: LoadingOptions) {
    const loading = await this.loadingController.create(opts);
    await loading.present();
  }
  //dismiss
  async dismissLoading(){
    return await this.loadingController.dismiss();

  }

  /////localstorage
  //set
  setElementInLocalstorage(Key: string, element: any){
    return localStorage.setItem(Key, JSON.stringify(element))
  }
  //get
  getElementFromLocaleStorange(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  async presentToast(opts: ToastOptions) {
    const toast = await this.toastController.create(opts);
    toast.present();
  }

  //////router
  routerLink(url: string){
    return this.router.navigateByUrl(url);
  }

  /////alert
  async presentAlert(opts: AlertOptions) {
    const alert = await this.alertController.create(opts);
  
    await alert.present();
  }

  async presentModal(opts: ModalOptions) {
    const modal = await this.modalController.create(opts);
    await modal.present();
    const {data} = await modal.onWillDismiss();

    if(data){
      return data;
    }
  }

  dismissModal(data?: any){
    this.modalController.dismiss(data);
  }

 

}
