import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
import { generatedata } from './../sampledata/generatedata';
import { jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements AfterViewInit {
 
  ViewChange(event: any): void 
  {
    alert(1)
    if (event.args.newViewType == 'dayView'){
      let appointmets = document.querySelectorAll('.jqx-scheduler-appointment');

      for(let i = 0; i < appointmets.length; i++) {
        appointmets[i].classList.add('fix');
      }
    }
    else {
      let appointmets = document.querySelectorAll('.jqx-scheduler-appointment');

      for(let i = 0; i < appointmets.length; i++) {
        appointmets[i].classList.remove('fix');
      }
    }
     
  }


  @ViewChild('schedulerReference', { static: false }) scheduler: jqxSchedulerComponent;

  AppointmentAdd(event: any): void {
    const appointmenData = event.args.appointment;
    console.log(appointmenData)
  }

  ngAfterViewInit(): void {
  

    this.scheduler.beginAppointmentsUpdate();
    this.scheduler.ensureAppointmentVisible('1bc1fe54-3232-40dc-8876-510267f00deb');
    this.scheduler.ensureAppointmentVisible('sdfsdfsdfsdgsf');


    let testDataTimes = [['2021-11-15T09:05:01.623Z', '2021-11-15T09:16:01.000Z'], // Maya

    ['2021-11-15T09:18:01.000Z', '2021-11-15T09:29:01.623Z'], // Anderson

    ['2021-11-15T09:35:01.623Z', '2021-11-15T09:42:01.000Z'], // Kotts

    ['2021-11-15T09:44:01.623Z', '2021-11-15T09:56:01.000Z']  // Huff
    ];
    
    let newAppointment: object = {
      id: "1bc1fe54-3232-40dc-8876-510267f00deb",

      user_id: "d5e2929e-e9c3-44dd-a232-0e7d5026c386",

      user_name: "Lee",

      name: "Lee Test",

      description: "1111111111111",

      start_date: new Date("2021-11-15T09:05:01.623Z").toISOString().replace('Z', ''),

      end_date: new Date("2021-11-15T09:16:01.000Z").toISOString().replace('Z', ''),

      completed: false,

      archived: false,

      priority: "1",

      audit_sequence: 15,

      resourceId: 'calendar'
    }

    let newAppointment2: object = {
      id: "sdfsdfsdfsdgsf",

      user_id: "131231212312-e9c3-44dd-a232-0e7d5026c386",

      user_name: "Lee",

      name: "Lee Test",

      description: "2222222222222",

      start_date: new Date('2021-11-15T09:18:33.000Z').toISOString().replace('Z', ''),

      end_date: new Date("2021-11-15T09:29:01.623Z").toISOString().replace('Z', ''),

      completed: false,

      archived: false,

      priority: "1",

      audit_sequence: 15,

      resourceId: 'calendar'
    }


    let newAppointment3: object = {
      id: "sdfsdfsdfsdgsf",

      user_id: "3232131231212312-e9c3-44dd-a232-0e7d5026c386",

      user_name: "Lee",

      name: "Lee Test",

      description: "33333333333333",

      start_date: new Date('2021-11-15T09:35:01.623Z').toISOString().replace('Z', ''),

      end_date: new Date("2021-11-15T09:42:01.000Z").toISOString().replace('Z', ''),

      completed: false,

      archived: false,

      priority: "1",

      audit_sequence: 15,

      resourceId: 'calendar'
    }
    let newAppointment4: object = {
      id: "sdfsdfsdfsdgsf",

      user_id: "1312323231212312-e9c3-44dd-a232-0e7d5026c386",

      user_name: "Lee",

      name: "Lee Test",

      description: "44444444444",

      start_date: new Date('2021-11-15T09:44:01.623Z').toISOString().replace('Z', ''),

      end_date: new Date("2021-11-15T09:56:01.000Z").toISOString().replace('Z', ''),

      completed: false,

      archived: false,

      priority: "1",

      audit_sequence: 15,

      resourceId: 'calendar'
    }
    this.scheduler.addAppointment(newAppointment2);

    this.scheduler.addAppointment(newAppointment);


    const resources = {

      dataField: 'user_id',

      orientation: 'horizontal',

      source: new jqx.dataAdapter(this.source)

    };

    this.scheduler.resources(resources);


    this.scheduler.endAppointmentsUpdate();
    setTimeout(() => {
      let v = this.scheduler.getAppointments();
      console.log(v);
      this.scheduler.addAppointment(newAppointment);
      this.scheduler.addAppointment(newAppointment2);
      this.scheduler.addAppointment(newAppointment4);
      this.scheduler.addAppointment(newAppointment3);

    }, 100);

    setTimeout(() => {

      let v = this.scheduler.getAppointments()
      console.log(v)
    }, 2500);


  }

  schedulerClick(event: any) {

    event.preventDefault()
    console.log(123)
    let contextMenu = document.querySelector('.jqx-menu');
    console.log(contextMenu);
    return false;
  }

  getWidth(): any {
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
        { name: 'start_date', type: 'date' },
        { name: 'end_date', type: 'date' }
      ],
      id: 'id',
      localData: this.appointments
    };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  date: any = new jqx.date('2021-11-15');

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
      {

        type: 'dayView',

        showWeekends: true,

        // timeRuler: {scale: this.scale[this.currentZoomIndex], formatString: 'hh:mm tt', width: '80'},

        timeRuler: { scale: 'fiveMinutes', },

        appointmentsRenderMode: 'exactTime',

        workTime:

        {

          fromDayOfWeek: 1,

          toDayOfWeek: 6,

          fromHour: 7,

          toHour: 24

        }

      },
      { type: 'monthView', monthRowAutoHeight: true },
      'weekView',
      'timelineDayView',
      'agendaView',
    ];

}