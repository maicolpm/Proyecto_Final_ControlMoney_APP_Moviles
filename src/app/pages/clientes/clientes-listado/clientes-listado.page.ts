import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Cliente } from 'src/app/models/cliente.model';
import { AlertService } from 'src/app/services/alert.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { ToastService } from 'src/app/services/toast.service';
import { Capacitor } from '@capacitor/core';
import { Filesystem } from '@capacitor/filesystem';
import { Directory } from '@capacitor/filesystem';


@Component({
  selector: 'app-clientes-listado',
  templateUrl: './clientes-listado.page.html',
  styleUrls: ['./clientes-listado.page.scss'],
})
export class ClientesListadoPage implements OnInit {
  public clientes!: Cliente[];
  @ViewChild('slidingList') slidingList!: IonList;

  constructor(    
    private clientesService: ClientesService,
    private toastService: ToastService,
    private alertService: AlertService,) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.clientes = await this.clientesService.getAll();
  }

  rutaFotoParaListado(foto: string) {
    if (foto != '') {
      return Capacitor.convertFileSrc(foto);
    } else {
      return 'assets/imgs/icon_clientes.png';
    }
  }

  async removeCliente(cliente: Cliente) {
    try {
      const successFunction = async () => {
        this.clientesService.removeById(cliente.clienteid);
        const caminho: string = cliente.foto.substr(0, cliente.foto.lastIndexOf('/') + 1 );
        const nomeArquivo: string = cliente.foto.substr(cliente.foto.lastIndexOf('/') + 1, (cliente.foto.length - caminho.length));
        try {
          if (cliente.foto != '') {
            await Filesystem.deleteFile({
              path: nomeArquivo, 
              directory: Directory.Data,
            });
          }
          this.toastService.presentToast('Cliente removido exitosamente', 3000, 'top');
          this.slidingList.closeSlidingItems();
        } catch (e:any) {
          await this.alertService.presentAlert('Error', 'Remoción no ejecutada', e, ['Ok']);
        }
        this.clientes = await this.clientesService.getAll();
      };
      await this.alertService.presentConfirm('Remover Cliente', 'Confirma remoción?', successFunction);
    } catch (e:any) {
      await this.alertService.presentAlert('Error', 'Remoción no ejecutada', e, ['Ok']);
    }
  }
}

