import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  data: any;
  options: any=null;
  viewDropOut: boolean = false;
  addStudent: boolean = false;
  tableHeader = [
    "Order Id",
    "Order",
    "Quantity",
    "Customer Name",
    "Date",
    "Order Type",
    "Amount",
    "Status"
    
  ]

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [

            {
                label: 'Cash Flow',
                data: [800000, 450000, 900000, 1000000, 635000, 245000, 450000, 1200000, 780000, 540000, 1000000],
                fill: true,
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                tension: 0.4,
                backgroundColor: 'rgba(1,66,166,0.2)'
            }
        ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
          legend: {
              labels: {
                  color: textColor
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                display: false,
              }
          },
          y: {
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                display: false,
              }
          }
      }
  };
  }

  viewDropOuts(){
    console.log('Viewing dropouts');
    this.viewDropOut =!this.viewDropOut;
  }

  showAddStudentForm(){
    this.addStudent = !this.addStudent;
  }

}
