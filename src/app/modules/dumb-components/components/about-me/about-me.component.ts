import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

    skills = [
        "Javascript",
        "Typescript",
        "HTML",
        "(S)CSS",
        "Angular",
        "Node",
        "Express",
        "SQL",
        "MongoDB",
        "RxJS",
        "Github",
        "Mongo Atlas",
        "Azure Cloud Service",
        "NPM",
        "Kibana",
        "Custom Vision",
        "Jenkins"
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
