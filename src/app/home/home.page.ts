import { Component } from "@angular/core";
import {
  ToastController,
  AlertController,
  ActionSheetController
} from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(
    public toastController: ToastController,
    public alertController: AlertController,
    public actionSheetController: ActionSheetController
  ) {}

  counter = 0;
  message = "";

  incrementPressed() {
    this.message = "";
    this.counter++;
  }

  async decrementPressed() {
    if (this.counter == 0) {
      this.message = "Value cannot go lower than 0!";
      const toast = await this.toastController.create({
        message: "Hey Melissa, please dont click anymore",
        duration: 2500
      });
      toast.present();
    } else {
      this.counter--;
    }
  }

  resetPressed() {
    this.message = "";
    this.counter = 0;
  }

  async showAlertPressed() {
    const alert = await this.alertController.create({
      header: "Welcome to my app!",
      message: "I am so happy!!!",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: blah => {
            console.log("Confirm Cancel: blah");
          }
        },
        {
          text: "Okay",
          handler: () => {
            console.log("Confirm Okay");
          }
        }
      ]
    });

    await alert.present();
  }

  async showActionSheetPressed() {
    const actionSheet = await this.actionSheetController.create({
      header: "Albums",
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          icon: "trash",
          handler: () => {
            console.log("Delete clicked");
          }
        },
        {
          text: "Share",
          icon: "share",
          handler: () => {
            console.log("Share clicked");
          }
        },
        {
          text: "Play (open modal)",
          icon: "arrow-dropright-circle",
          handler: () => {
            console.log("Play clicked");
          }
        },
        {
          text: "Favorite",
          icon: "heart",
          handler: () => {
            console.log("Favorite clicked");
          }
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    await actionSheet.present();
  }
}
