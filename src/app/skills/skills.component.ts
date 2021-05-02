import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Skill } from '../Models/Skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  public baseIconUrl = environment.assetsPath;
  public skills: Skill[] = [
    {
      name: 'Angular',
      iconUrl: 'angular-icon.png'
    },
    {
      name: 'TypeScript',
      iconUrl: 'typescript-icon.png'
    },
    {
      name: 'JavaScript',
      iconUrl: 'javascript-icon.png'
    },
    {
      name: 'HTML',
      iconUrl: 'html-icon.png'
    },
    {
      name: 'CSS',
      iconUrl: 'css-icon.png'
    },
    {
      name: 'Bootstrap',
      iconUrl: 'bootstrap-icon.png'
    },
    {
      name: 'NodeJS',
      iconUrl: 'node-icon.png'
    },
    {
      name: 'ExpressJS',
      iconUrl: 'express-icon.png'
    }
  ]

  ngOnInit(): void {
  }

}
