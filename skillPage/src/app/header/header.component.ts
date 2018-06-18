import { Component, OnInit ,Input,Output} from '@angular/core';
import { ITile } from '../tile/tile.component'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  skillArr: Array<ITile> = [
    {
      name:'HTML',
      desc: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
      imgURL: '/assets/images/html.png'
    },
    {
      name:'HTML',
      desc: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
      imgURL: '/assets/images/html.png'
    },
    {
      name:'HTML',
      desc: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
      imgURL: '/assets/images/html.png'
    },
    {
      name:'HTML',
      desc: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
      imgURL: '/assets/images/html.png'
    },
    {
      name:'HTML',
      desc: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
      imgURL: '/assets/images/html.png'
    },
    {
      name:'HTML',
      desc: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
      imgURL: '/assets/images/html.png'
    },
    {
      name:'HTML',
      desc: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
      imgURL: '/assets/images/html.png'
    },
    {
      name:'HTML',
      desc: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
      imgURL: '/assets/images/html.png'
    },
    {
      name:'HTML',
      desc: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
      imgURL: '/assets/images/html.png'
    },
    {
      name:'HTML',
      desc: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
      imgURL: '/assets/images/html.png'
    },
    {
      name:'HTML',
      desc: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
      imgURL: '/assets/images/html.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
