import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Experience } from '../Models/Experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  public baseIconUrl: string = environment.assetsPath;
  public experience: Experience[] = [
    {
      companyName: 'Credex Technologies',
      companyLogoUrl: 'credex-icon.jpg',
      timePeriod: '1/Oct/1999 - 30/Mar/2021'
    },
    {
      companyName: 'Prilient Technologies',
      companyLogoUrl: 'prilient-icon.jpg',
      timePeriod: '5/April/1999 - Present'
    }
  ];
  ngOnInit(): void {
  }

}
