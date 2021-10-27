import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
    @ViewChild('schedulerReference', { static: false }) scheduler: jqxSchedulerComponent;
    ngAfterViewInit(): void {
        this.scheduler.ensureAppointmentVisible('1bc1fe54-3232-40dc-8876-510267f00deb');
    }
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	

       
         appointments: Array<object> = [
          {

                          "id": "1bc1fe54-3232-40dc-8876-510267f00deb",

                          "user_id": "d5e2929e-e9c3-44dd-a232-0e7d5026c386",

                          "user_name": "Lee",

                          "name": "Lee Test",

                          "description": "Test",

                          "start_date": "2021-04-06T00:00:00",

                          "end_date": "2021-04-07T00:00:00",

                          "completed": false,

                          "archived": false,

                          "priority": "1",

                          "audit_sequence": 14

          },

          {

                          "id": "4237d286-59a2-4f2a-b4cb-ec7a6eb429c1",

                          "user_id": "d5e2929e-e9c3-44dd-a232-0e7d5026c386",

                          "user_name": "Lee",

                          "name": "empty",

                          "description": "test reminder4444",

                          "start_date": "2020-05-22T12:00:00",

                          "end_date": "2020-05-22T12:30:00",

                          "completed": false,

                          "archived": true,

                          "priority": "none",

                          "audit_sequence": 12

          },

          {

                          "id": "9b23e758-30a2-4eec-a8e4-b883080a0795",

                          "user_id": "d5e2929e-e9c3-44dd-a232-0e7d5026c386",

                          "user_name": "Lee",

                          "name": "Test reminder 4444",

                          "description": "test reminder4444",

                          "start_date": "2020-05-22T12:00:00",

                          "end_date": "2020-05-22T12:30:00",

                          "completed": false,

                          "archived": true,

                          "priority": "none",

                          "audit_sequence": 13

          },

          {

                          "id": "bfd41b8d-cc22-47b2-8967-804d47f72334",

                          "user_id": "d5e2929e-e9c3-44dd-a232-0e7d5026c386",

                          "user_name": "Lee",

                          "name": "empty",

                          "description": "test reminder4",

                          "start_date": "2020-05-22T12:00:00",

                          "end_date": "2020-05-22T12:30:00",

                          "completed": false,

                          "archived": true,

                          "priority": "none",

                          "audit_sequence": 9

          },

          {

                          "id": "0485f0d1-fa4d-423c-a3d4-d480808b20fc",

                          "user_id": "d5e2929e-e9c3-44dd-a232-0e7d5026c386",

                          "user_name": "Lee",

                          "name": "empty",

                          "description": "test reminder44444444",

                          "start_date": "2020-05-22T12:00:00",

                          "end_date": "2020-05-22T12:30:00",

                          "completed": false,

                          "archived": true,

                          "priority": "none",

                          "audit_sequence": 10

          },

          {

                          "id": "5d0065d8-1c82-4d3e-b6b1-e308ff47d40c",

                          "user_id": "d5e2929e-e9c3-44dd-a232-0e7d5026c386",

                          "user_name": "Lee",

                          "name": "empty",

                          "description": "test reminder",

                          "start_date": "2020-05-21T00:00:00",

                          "end_date": "2020-05-22T00:00:00",

                          "completed": false,

                          "archived": false,

                          "priority": "false",

                          "audit_sequence": 1

          },

          {

                          "id": "7dcc66ac-cc75-4fd4-9ddd-4ee08ca95a0a",

                          "user_id": "d5e2929e-e9c3-44dd-a232-0e7d5026c386",

                          "user_name": "Lee",

                          "name": "empty",

                          "description": "test reminder 33",

                          "start_date": "2020-05-11T12:00:00",

                          "end_date": "2020-05-11T12:30:00",

                          "completed": false,

                          "archived": false,

                          "priority": "false",

                          "audit_sequence": 11

          },

          {

                          "id": "7dddf605-44b3-4a68-bce7-aadfd88a92cd",

                          "user_id": "d5e2929e-e9c3-44dd-a232-0e7d5026c386",

                          "user_name": "Lee",

                          "name": "empty",

                          "description": "test reminder4",

                          "start_date": "2020-05-11T12:00:00",

                          "end_date": "2020-05-11T12:30:00",

                          "completed": false,

                          "archived": false,

                          "priority": "false",

                          "audit_sequence": 4

          },

          {

                          "id": "8b217a70-d192-42b8-ac3c-a660c117ef6e",

                          "user_id": "d5e2929e-e9c3-44dd-a232-0e7d5026c386",

                          "user_name": "Lee",

                          "name": "empty",

                          "description": "test reminder",

                          "start_date": "2020-05-11T12:00:00",

                          "end_date": "2020-05-11T12:30:00",

                          "completed": false,

                          "archived": false,

                          "priority": "false",

                          "audit_sequence": 2

          },

          {

                          "id": "a52bf17e-3622-43c5-9896-487b62e50848",

                          "user_id": "d5e2929e-e9c3-44dd-a232-0e7d5026c386",

                          "user_name": "Lee",

                          "name": "empty",

                          "description": "test reminder4",

                          "start_date": "2020-05-11T12:00:00",

                          "end_date": "2020-05-11T12:30:00",

                          "completed": false,

                          "archived": true,

                          "priority": "",

                          "audit_sequence": 6

          },

          {

                          "id": "5a9afac9-d017-4784-8cbf-719194e22e73",

                          "user_id": "d5e2929e-e9c3-44dd-a232-0e7d5026c386",

                          "user_name": "Lee",

                          "name": "empty",

                          "description": "test reminder4",

                          "start_date": "2020-05-11T12:00:00",

                          "end_date": "2020-05-11T12:30:00",

                          "completed": false,

                          "archived": true,

                          "priority": "none",

                          "audit_sequence": 8

          },

          {

                          "id": "c59b1566-5d40-464f-bcca-cb1bacfa8247",

                          "user_id": "d5e2929e-e9c3-44dd-a232-0e7d5026c386",

                          "user_name": "Lee",

                          "name": "empty",

                          "description": "test reminder4",

                          "start_date": "2020-05-11T12:00:00",

                          "end_date": "2020-05-11T12:30:00",

                          "completed": false,

                          "archived": true,

                          "priority": "none",

                          "audit_sequence": 7

          },

          {

                          "id": "c6a65db7-9b1f-44bf-948d-4017d3731947",

                          "user_id": "d5e2929e-e9c3-44dd-a232-0e7d5026c386",

                          "user_name": "Lee",

                          "name": "empty",

                          "description": "test reminder4",

                          "start_date": "2020-05-11T12:00:00",

                          "end_date": "2020-05-11T12:30:00",

                          "completed": false,

                          "archived": false,

                          "priority": "",

                          "audit_sequence": 5

          },

          {

                          "id": "cab13781-2d96-4973-a21f-b4dbba4aaf2a",

                          "user_id": "d5e2929e-e9c3-44dd-a232-0e7d5026c386",

                          "user_name": "Lee",

                          "name": "empty",

                          "description": "test reminder333333",

                          "start_date": "2020-05-11T12:00:00",

                          "end_date": "2020-05-11T12:30:00",

                          "completed": false,

                          "archived": false,

                          "priority": "false",

                          "audit_sequence": 3

          }

]
      

    source: any =
    {
      // dataType: 'array',
      // dataFields: [
      //   {name: 'id', type: 'string'},
      //   {name: 'description', type: 'string'},
      //   {name: 'location', type: 'string'},
      //   {name: 'subject', type: 'string'},
      //   {name: 'calendar', type: 'string'},
      //   {name: 'start', type: 'date'},
      //   {name: 'end', type: 'date'}
      // ],
      //localData: null,
      dataType: 'json',
      dataFields: [
        { name: 'id', type: 'string' },
        { name: 'user_id', type: 'string' },
        { name: 'user_name', type: 'string' },
        { name: 'name', type: 'string' },
        // { name: 'status', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'completed', type: 'string' },
        { name: 'archived', type: 'string' },
        { name: 'priority', type: 'string' },
        // { name: 'style', type: 'string' },
        // { name: 'calendar', type: 'string' },
        { name: 'start_date', type: 'date'},
        { name: 'end_date', type: 'date' }
      ],
      id: 'id',
      localData: this.appointments
    };
  
    dataAdapter: any = new jqx.dataAdapter(this.source);
    
    date: any = new jqx.date('todayDate');
    
    appointmentDataFields: any =
      {
        from: 'start_date',
        to: 'end_date',
        id: 'id',
        description: 'description',
        // location: 'location',
        subject: 'description',
        resourceId: 'calendar'
      };
    resources: any =
      {
        //colorScheme: 'scheme05',
        dataField: 'calendar',
        source: new jqx.dataAdapter(this.source)
      };
    views: any[] =
      [
        'dayView',
        'weekView',
        { type: 'monthView', monthRowAutoHeight: true },
        'agendaView',
      ];
}