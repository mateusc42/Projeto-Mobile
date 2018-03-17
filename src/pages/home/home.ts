import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ProductProvider } from './../../providers/product/product';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  products: Observable<any>;

  constructor(public navCtrl: NavController, private provider: ProductProvider,
    private toast: ToastController) {

    this.products = this.provider.getAll();
  }

  newProduct() {
    this.navCtrl.push('ProductFormPage');
  }

  editProduct(product: any) {
    this.navCtrl.push('ProductFormPage', { product: product });
  }

  removeProduct(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Contato removido sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o contato.', duration: 3000 }).present();
        });
    }
  }
  
}
