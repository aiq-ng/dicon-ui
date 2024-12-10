import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  departments:any = [
    {
      "name": "Department of Professional Studies (PS).",
      "snippet": "Department description that’s pretty much 2 sentences long"
    },
    {
      "name": "Department of Counter Intelligence (CI).",
      "snippet": "Department description that’s pretty much 2 sentences long"
    },
    {
      "name": "Department of Technical Studies (TS). ",
      "snippet": "Department description that’s pretty much 2 sentences long"
    },
    {
      "name": "Department of General Studies (GS).",
      "snippet": "Department description that’s pretty much 2 sentences long"
    },
    {
      "name": "Joint Military Attaché/Adviser Programme (JMAP). ",
      "snippet": "Department description that’s pretty much 2 sentences long"
    },
    {
      "name": "Department of Languages (Lang).",
      "snippet": "Department description that’s pretty much 2 sentences long"
    },

  ]

}
