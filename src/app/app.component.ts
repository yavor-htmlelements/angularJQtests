import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('myGrid') myGrid: jqxGridComponent; 

  Filter(event: Event): void 
  {
      let allRowsAfterFilter: Array<any> = this.myGrid.getrows();
      console.log(allRowsAfterFilter)
  }

  readyHandler():void{
    setTimeout(() => {
      // const toolbar: any = document.getElementById('filtergrid'),
      // searchInput: any = toolbar.querySelector('.jqx-input-group');
      // searchInput.firstChild.innerText ="Your Text:"
    }, 100);
  }

  data: any[] = this.generateData();
  source: any =
  {
      localdata: this.data,
      datatype: 'array',
      datafields:
      [
          { name: 'firstname', type: 'string' },
          { name: 'lastname', type: 'string' },
          { name: 'productname', type: 'string' },
          { name: 'quantity', type: 'number' },
          { name: 'price', type: 'number' },
          { name: 'total', type: 'number' }
      ]
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    { text: 'Name', datafield: 'firstname', width: 120,
      rendered: function (columnHeaderElement) {
          const buttonContainer1 = document.createElement('div');
          const imgurl = 'https://cdn5.vectorstock.com/i/1000x1000/13/54/plus-icon-vector-22881354.jpg';

          const options = {
              width: '100%',
              imgSrc: imgurl, 
              imgPosition: 'center',
          };
          buttonContainer1.id = `buttonContainerColumn_jqxButton`;

          columnHeaderElement[0].appendChild(buttonContainer1)
          setTimeout(() => {
              const myButton = jqwidgets.createInstance(`#buttonContainerColumn_jqxButton`, 'jqxButton', options);
              buttonContainer1.parentElement.style.display = 'flex';

              const btnParentElFirstChild:any = buttonContainer1.parentElement.firstElementChild
              btnParentElFirstChild.style.display = 'none';
          }, 10);
          return columnHeaderElement[0]
      }, 
    createwidget: (row, column, value, htmlElement) => {
          let container = document.createElement('div');

          const buttonContainer1 = document.createElement('div');
          const buttonContainer2 = document.createElement('div');
          const id = row.boundindex;
          buttonContainer1.id = `buttonContainer1${id}`;
          buttonContainer2.id = `buttonContainer2${id}`;
          container.id = id;

          const imgurl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OOjs_UI_icon_edit-ltr.svg/1024px-OOjs_UI_icon_edit-ltr.svg.png';
          const imgurl2 = 'https://image.flaticon.com/icons/png/512/1214/1214428.png';

          const options = {
              width: '100%',
              imgSrc: imgurl, 
              imgPosition: 'center', textPosition: 'center', textImageRelation: 'imageAboveText'
          };
          const options2 = {
              width: '100%',
              imgSrc: imgurl2,  
              imgPosition: 'center', textPosition: 'center', textImageRelation: 'imageAboveText'
          };

          container.appendChild(buttonContainer1);
          container.appendChild(buttonContainer2);
          htmlElement.appendChild(container);

          container.style.display = 'flex';
          
          const myButton = jqwidgets.createInstance(`#buttonContainer1${id}`, 'jqxButton', options);
          const delButton = jqwidgets.createInstance(`#buttonContainer2${id}`, 'jqxButton', options2);
          

          myButton.addEventHandler('click', () => {
          console.log('Editar')
          });

          delButton.addEventHandler('click', () => {
          console.log('Borrar')

          });

          },
          initwidget: (row, column, value, htmlElement) => {
          //   htmlElement.children[0].children[1].innerHTML = value;
          }
    },
      { text: 'Last Name', datafield: 'lastname', width: 120 },
      { text: 'Product', datafield: 'productname', width: 180 },
      { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
      { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
      { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
  ];

  getWidth() : any {
    if (document.body.offsetWidth < 850) {
      return '90%';
    }
    
    return 850;
  }
  generateData(): any[] {
      let data = new Array();
      let firstNames =
          [
              'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'
          ];
      let lastNames =
          [
              'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'
          ];
      let productNames =
          [
              'Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'
          ];
      let priceValues =
          [
              '2.25', '1.5', '3.0', '3.3', '4.5', '3.6', '3.8', '2.5', '5.0', '1.75', '3.25', '4.0'
          ];
      for (let i = 0; i < 200; i++) {
          let row = {};
          let productindex = Math.floor(Math.random() * productNames.length);
          let price = parseFloat(priceValues[productindex]);
          let quantity = 1 + Math.round(Math.random() * 10);
          row['firstname'] = firstNames[Math.floor(Math.random() * firstNames.length)];
          row['lastname'] = lastNames[Math.floor(Math.random() * lastNames.length)];
          row['productname'] = productNames[productindex];
          row['price'] = price;
          row['quantity'] = quantity;
          row['total'] = price * quantity;
          data[i] = row;
      }
      return data;
  }
}