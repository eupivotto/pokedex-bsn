import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { addIcons } from 'ionicons';
import { optionsOutline } from 'ionicons/icons';
import { IonicModule} from '@ionic/angular';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.scss'],
  imports: [ IonicModule]
})
export class HeaderComponent  implements OnInit {




  constructor() {
    addIcons({ optionsOutline });
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {

  }




}
