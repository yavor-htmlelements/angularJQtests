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
        
        let dataAdapter2: any = new jqx.dataAdapter({
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
          localData: [
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
  
            }]});

        setTimeout(() => {
          this.scheduler.source (dataAdapter2 );
          this.scheduler.date(new jqx.date('2020-05-22T12:00:00'))
        }, 1000);
    

    }
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	

       
         appointments: Array<object> = [
      

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