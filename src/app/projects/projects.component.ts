import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from '../Models/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  public baseIconUrl: string = environment.assetsPath;
  public projects: Project[] = [
    {
      name: 'Jitterbit',
      iconUrl: 'jitterbit-icon.jpg',
      description: 'Jitterbit helps businesses make faster, more effective decisions by enabling them to unify and exploit data from all sources. Using the Jitterbit API integration platform companies can rapidly connect SaaS, on-premises and cloud applications and instantly infuse artificial intelligence into any business process.',
      link: 'https://jitterbit.com',
    },
    {
      name: 'Carejini',
      iconUrl: 'carejini-icon.png',
      description: 'CareJini boasts of a network of care managers who would attend anything from medical emergencies to basic needs like daily groceries or attending household work, be there with parents, involve them in social gatherings to eliminate the loneliness factor that is growing consistently in the old age community.',
      link: 'https://carejini.com'
    },
    {
      name: 'Truno',
      iconUrl: 'truno-icon.png',
      description: 'It is a business intelligence project which analyzes past data to provide future predictions and various type of comparisons reports',
      link: 'https://www.truno.com'
    }
  ]

  ngOnInit(): void {
  }

}
