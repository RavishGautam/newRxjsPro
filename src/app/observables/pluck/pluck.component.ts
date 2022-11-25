import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss'],
})
export class PluckComponent implements OnInit {
  data: any;
  data2: any;
  users = [
    {
      id: 1,
      name: 'user1',
      skills: 'abc',
      job: {
        title: 'front-End',
        exp: '10 years',
      },
    },
    {
      id: 2,
      name: 'user2',
      skills: 'abc',
      job: {
        title: 'Html Developer',
        exp: '3 years',
      },
    },
    {
      id: 3,
      name: 'user3',
      skills: 'abc',
      job: {
        title: 'Back End',
        exp: '12 years',
      },
    },
    {
      id: 4,
      name: 'user4',
      skills: 'abc',
      job: {
        title: 'Python Dev',
        exp: '6 years',
      },
    },
    {
      id: 5,
      name: 'user5',
      skills: 'abc',
      job: {
        title: 'php Dev',
        exp: '11 years',
      },
    },
    {
      id: 6,
      name: 'user6',
      skills: 'abc',
      job: {
        title: 'React Dev',
        exp: '3 years',
      },
    },
    {
      id: 7,
      name: 'user7',
      skills: 'abc',
      job: {
        title: 'flutter dev',
        exp: '4 years',
      },
    },
    {
      id: 8,
      name: 'user8',
      skills: 'abc',
      job: {
        title: 'Full Stack',
        exp: '11 years',
      },
    },
  ];
 
  constructor() {}

  ngOnInit(): void {
    // Example -01
    const userObs = from(this.users);
    userObs
      .pipe(
        //map(data =>data.name),
        pluck('name'),
        toArray()
      )
      .subscribe((res) => {
        console.log('res-->', res);
        this.data = res;
      });

    /// Ex -02 (By Nested Property)

    const userObs2 = from(this.users);
    userObs
      .pipe(
        //map(data =>data.name),
        pluck('job','title'),
        toArray()
      )
      .subscribe((res) => {
        console.log('res-->', res);
        this.data2 = res;
      });
  }
}
