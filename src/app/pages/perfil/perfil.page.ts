import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Eliminar clicked');
        }
      }, {
        text: 'Seleccionar foto',
        icon: 'image',
        handler: () => {
          console.log('Seleccionar clicked');
        }
      }, {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar clicked');
        }
      }]
    });
    await actionSheet.present();
  }

async presentAlert() {
  const alert = await this.alertCtrl.create({
    header: 'Alerta',
    message: '¿Estás seguro de cerrar sesión?',
    buttons: ['Cancelar', 'Ok']
  });
  await alert.present();
}

  }
