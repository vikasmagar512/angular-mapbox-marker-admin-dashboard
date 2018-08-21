import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
// declare let d3: any;

@Component({
  selector: 'app-dashboard-charts',
  templateUrl: './dashboard-charts.component.html',
  styleUrls: ['./dashboard-charts.component.css']
})
// export class DashboardChartsComponent implements OnInit {
  export class DashboardChartsComponent{

  // serviceData = [];
  // assetData = [];
  // // public progress: any;
  // public barChartData: any;
  // public pieChartData: any;
  // public donutChartData: any;

  // // public progress2: any;
  // public barChartData2: any;
  // public pieChartData2: any;
  // public donutChartData2: any;

  public progress2 = [
    {
      "actual": -8,
      "forecast": -10
    }, {
      "actual": 9,
      "forecast": 9
    }, {
      "actual": -15,
      "forecast": 5
    },
    {
      "actual": 9,
      "forecast": -9
    }, {
      "actual": 15,
      "forecast": 5
    },
    {
      "actual": 1,
      "forecast": 5
    }, {
      "actual": 4,
      "forecast": 6
    },
    {
      "actual": 6,
      "forecast": 8
    },
    {
      "actual": 7,
      "forecast": 10
    }, {
      "actual": 8,
      "forecast": 10
    },
  ];

  public progress = [
    {
      "actual": 7,
      "forecast": 10
    }, {
      "actual": 8,
      "forecast": 10
    }, {
      "actual": 9,
      "forecast": 9
    }, {
      "actual": 15,
      "forecast": 5
    },
    {
      "actual": 1,
      "forecast": 5
    }, {
      "actual": 4,
      "forecast": 6
    },
    {
      "actual": 6,
      "forecast": 8
    }, {
      "actual": 7,
      "forecast": 10
    }, {
      "actual": 8,
      "forecast": 10
    }, {
      "actual": 9,
      "forecast": 9
    }, {
      "actual": 15,
      "forecast": 5
    },
  ];

  public tableData: any = {
    "Assets": [{
      "type": "Assets",
      "key": "Utilization",
      "Actual": 15,
      "Forecast": 23,
      "data": this.progress2,
    },
    {
      "type": "Assets",
      "key": "Availability",
      "Actual": 15,
      "Forecast": 23,
      "data": this.progress,

    }],
    "Services": [{
      "type": "Services",
      "key": "Utilization",
      "Actual": 15,
      "Forecast": 23,
      "data": this.progress2,
    },
    {
      "type": "Services",
      "key": "Availability",
      "Actual": 15,
      "Forecast": 23,
      "data": this.progress,

    }],

  }

  // constructor() { }

  // ngOnInit() {

  //   this.donutChartData = [
  //     { name: "Working", value: 40 },
  //     { name: "Not Working", value: 20 },
  //     { name: "Service required", value: 30 },
  //   ];

  //   this.pieChartData = [
  //     { name: "Recieved", value: 70.8 },
  //     { name: "Copleted", value: 16.4 },
  //     { name: "In Progress", value: 22.2 },
  //   ];

  //   this.barChartData = [
  //     {
  //       "interest_rate": "Coffee",
  //       "Working": 60,
  //       "Not Working": 20,
  //       "Service Requeired": 40,
  //     },
  //     {
  //       "interest_rate": "Printer",
  //       "Working": 30,
  //       "Not Working": 21,
  //       "Service Requeired": 20,
  //     }
  //   ];



  //   this.donutChartData2 = [
  //     { name: "Working", value: 30 },
  //     { name: "Not Working", value: 40 },
  //     { name: "Service required", value: 20 },
  //   ];

  //   this.pieChartData2 = [
  //     { name: "Recieved", value: 16.4 },
  //     { name: "Copleted", value: 70.8 },
  //     { name: "In Progress", value: 22.2 },
  //   ];

  //   this.barChartData2 = [
  //     {
  //       "interest_rate": "Coffee",
  //       "Working": 20,
  //       "Not Working": 40,
  //       "Service Requeired": 60,
  //     },
  //     {
  //       "interest_rate": "Printer",
  //       "Working": 20,
  //       "Not Working": 31,
  //       "Service Requeired": 30,
  //     }
  //   ];


  //   this.donutChart(this.donutChartData);
  //   this.pieChart(this.pieChartData);

  //   this.stackedBarChart(this.barChartData);
  //   setTimeout(() => {
  //     this.tableData.Assets.map((item, i) => {
  //       debugger
  //       this.lineChart(item.data, 'Assets', i);
  //     });
  //     this.tableData.Services.map((item, i) => {
  //       debugger
  //       this.lineChart(item.data, 'Services', i);
  //     })
  //   }, 1000)
  // }

  // donutChart(data) {

  //   let text = "";

  //   let width = 100;
  //   let height = 100;
  //   let thickness = 10;
  //   let duration = 750;

  //   let radius = Math.min(width, height) / 2;
  //   let color = d3.scaleOrdinal(d3.schemeCategory10);

  //   d3.select(".donut svg").remove();
  //   d3.select(".donut .legend").remove();

  //   let svg = d3.select(".donut")
  //     .append('svg')
  //     .attr('class', 'pie')
  //     .attr('width', width)
  //     .attr('height', height);

  //   let g = svg.append('g')
  //     .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

  //   let arc = d3.arc()
  //     .innerRadius(radius - thickness)
  //     .outerRadius(radius);

  //   let pie = d3.pie()
  //     .value(function (d) { return d.value; })
  //     .sort(null);

  //   let path = g.selectAll('.donut path')
  //     .data(pie(data))
  //     .enter()
  //     .append("g")
  //     .on("mouseover", function (d) {
  //       d3.selectAll('.donut path')
  //         .style("opacity", 0.8);
  //       d3.select(this)
  //         .style("opacity", 1);

  //       let g = d3.select(".donut svg")
  //         .style("cursor", "pointer")
  //         .append("g")
  //         .attr("class", "tooltip")
  //         .style("opacity", 0);

  //       g.append("text")
  //         .attr("class", "name-text")
  //         .text(`${d.data.name}(${d.data.value})`)
  //         .attr('text-anchor', 'middle');

  //       let text = g.select(".donut text");
  //       let bbox = text.node().getBBox();
  //       let padding = 2;
  //       g.insert("rect", "text")
  //         .attr("x", bbox.x - padding)
  //         .attr("y", bbox.y - padding)
  //         .attr("width", bbox.width + (padding * 2))
  //         .attr("height", bbox.height + (padding * 2))
  //         .style("fill", "white")
  //         .style("opacity", 0.75)
  //         .style('font-size', '9px');
  //     })

  //     .on("touchstart", function (d) {
  //       d3.select(".donut svg")
  //         .style("cursor", "none");
  //     })

  //     .on("mousemove", function (d) {
  //       let mousePosition = d3.mouse(this);
  //       var x = d3.mouse(this)[0] + 80;
  //       var y = d3.mouse(this)[1] + 80;

  //       let text = d3.select('.donut .tooltip text');
  //       let bbox = text.node().getBBox();
  //       if (x - bbox.width / 2 < 0) {
  //         x = bbox.width / 2;
  //       }
  //       else if (width - x - bbox.width / 2 < 0) {
  //         x = width - bbox.width / 2;
  //       }

  //       if (y - bbox.height / 2 < 0) {
  //         y = bbox.height + 13 * 2;
  //       }
  //       else if (height - y - bbox.height / 2 < 0) {
  //         y = height - bbox.height / 2;
  //       }
  //       y = y - 40;

  //       d3.select('.donut .tooltip')
  //         .style("opacity", 1)
  //         .attr('transform', `translate(${x}, ${y})`);
  //     })
  //     .on("mouseout", function (d) {
  //       d3.select(".donut svg")
  //         .style("cursor", "context-menu")
  //         .select(".donut .tooltip").remove();
  //       d3.selectAll('path')
  //         .style("opacity", 0.8);
  //       d3.select(this)
  //         .style("cursor", "none")
  //         .select(".donut .text-group").remove();
  //     })

  //     .append('path')
  //     .attr('d', <any>arc)
  //     .attr('fill', (d, i) => color(<any>i))
  //     .on("mouseover", function (d) {
  //       d3.select(this)
  //         .style("cursor", "pointer")
  //         .style('opacity', 1)
  //     })
  //     .on("mouseout", function (d) {
  //       d3.select(this)
  //         .style("cursor", "none")
  //         .style('opacity', 0.8)
  //     })

  //     .each(function (d, i) { this._current = i; });

  //   let legend = d3.select(".donut").append('div')
  //     .attr('class', 'legend')
  //     // .style('margin-top', '50px');
  //     .style('float', 'right');

  //   let keys = legend.selectAll('.key')
  //     .data(data)
  //     .enter().append('div')
  //     .attr('class', 'key')
  //     .style('display', 'flex')
  //     .style('align-items', 'center')
  //     .style('margin-right', '20px');

  //   keys.append('div')
  //     .attr('class', 'symbol')
  //     .style('height', '10px')
  //     .style('width', '10px')
  //     .style('margin', '5px 5px')
  //     .style('background-color', (d, i) => color(i));

  //   keys.append('div')
  //     .attr('class', 'name')
  //     .text(d => `${d.name} (${d.value})`);

  //   keys.exit().remove();

  //   $('.donut>svg>g>g:nth-child(1) path').css('fill', '#6AC259');
  //   $('.donut>svg>g>g:nth-child(2) path').css('fill', '#fff147');
  //   $('.donut>svg>g>g:nth-child(3) path').css('fill', '#D75A4A');

  //   $('.donut .legend div:nth-child(1) div:first-child').css({
  //     'border-radius': '50%',
  //     'background-color': '#6AC259',
  //   })
  //   $('.donut .legend div:nth-child(2) div:first-child').css({
  //     'border-radius': '50%',
  //     'background-color': '#fff147',
  //   })
  //   $('.donut .legend div:nth-child(3) div:first-child').css({
  //     'border-radius': '50%',
  //     'background-color': '#D75A4A',
  //   })

  //   $('.donut .legend>div').css({
  //     'border-bottom': '1px solid',
  //     'padding': '5px 0',
  //   })

  //   $('.donut .legend').css({
  //     'padding': '0 10px',
  //     'font-size': '12px'
  //   })

  //   $('.donut svg g .text-group').css('font-size', '9px');
  //   $('.donut svg').css('float', 'left');
  // }


  // pieChart(data) {

  //   let text = "";

  //   let width = 100;
  //   let height = 100;
  //   let thickness = 40;
  //   let duration = 750;
  //   let padding = 10;
  //   let opacity = .8;
  //   let opacityHover = 1;
  //   let otherOpacityOnHover = .8;
  //   let tooltipMargin = 13;

  //   let radius = Math.min(width - padding, height - padding) / 2;
  //   let color = d3.scaleOrdinal(d3.schemeCategory10);

  //   d3.select(".piechart svg").remove();
  //   d3.select(".piechart .legend").remove();

  //   let svg = d3.select(".piechart")
  //     .append('svg')
  //     .attr('class', 'pie')
  //     .attr('width', width)
  //     .attr('height', height);

  //   let g = svg.append('g')
  //     .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

  //   let arc = d3.arc()
  //     .innerRadius(0)
  //     .outerRadius(radius);

  //   let pie = d3.pie()
  //     .value(function (d) { return d.value; })
  //     .sort(null);

  //   let path = g.selectAll('path')
  //     .data(pie(data))
  //     .enter()
  //     .append("g")
  //     .append('path')
  //     .attr('d', arc)
  //     .attr('fill', (d, i) => color(i))
  //     .style('opacity', opacity)
  //     .on("mouseover", function (d) {
  //       d3.selectAll('path')
  //         .style("opacity", otherOpacityOnHover);
  //       d3.select(this)
  //         .style("opacity", opacityHover);

  //       let g = d3.select(".piechart svg")
  //         .style("cursor", "pointer")
  //         .append("g")
  //         .attr("class", "tooltip")
  //         .style("opacity", 0);

  //       g.append("text")
  //         .attr("class", "name-text")
  //         .text(`${d.data.name} (${d.data.value})`)
  //         .attr('text-anchor', 'middle');

  //       let text = g.select("text");
  //       let bbox = text.node().getBBox();
  //       let padding = 2;
  //       g.insert("rect", "text")
  //         .attr("x", bbox.x - padding)
  //         .attr("y", bbox.y - padding)
  //         .attr("width", bbox.width + (padding * 2))
  //         .attr("height", bbox.height + (padding * 2))
  //         .style("fill", "white")
  //         .style("opacity", 0.75);
  //     })
  //     .on("mousemove", function (d) {
  //       let mousePosition = d3.mouse(this);
  //       let x = mousePosition[0] + width / 2;
  //       let y = mousePosition[1] + height / 2 - tooltipMargin;

  //       let text = d3.select('.tooltip text');
  //       let bbox = text.node().getBBox();
  //       if (x - bbox.width / 2 < 0) {
  //         x = bbox.width / 2;
  //       }
  //       else if (width - x - bbox.width / 2 < 0) {
  //         x = width - bbox.width / 2;
  //       }

  //       if (y - bbox.height / 2 < 0) {
  //         y = bbox.height + tooltipMargin * 2;
  //       }
  //       else if (height - y - bbox.height / 2 < 0) {
  //         y = height - bbox.height / 2;
  //       }

  //       d3.select('.tooltip')
  //         .style("opacity", 1)
  //         .attr('transform', `translate(${x}, ${y})`);
  //     })
  //     .on("mouseout", function (d) {
  //       d3.select(".piechart svg")
  //         .style("cursor", "none")
  //         .select(".tooltip").remove();
  //       d3.selectAll('path')
  //         .style("opacity", opacity);
  //     })
  //     .on("touchstart", function (d) {
  //       d3.select(".piechart svg")
  //         .style("cursor", "none");
  //     })
  //     .each(function (d, i) { this._current = i; });


  //   let legend = d3.select(".piechart").append('div')
  //     .attr('class', 'legend')
  //     // .style('margin-top', '50px');
  //     .style('float', 'right');

  //   let keys = legend.selectAll('.key')
  //     .data(data)
  //     .enter().append('div')
  //     .attr('class', 'key')
  //     .style('display', 'flex')
  //     .style('align-items', 'center')
  //     .style('margin-right', '20px');

  //   keys.append('div')
  //     .attr('class', 'symbol')
  //     .style('height', '10px')
  //     .style('width', '10px')
  //     .style('margin', '5px 5px')
  //     .style('background-color', (d, i) => color(i));

  //   keys.append('div')
  //     .attr('class', 'name')
  //     .text(d => `${d.name} (${d.value})`);

  //   keys.exit().remove();



  //   $('.piechart>svg>g>g:nth-child(1) path').css('fill', '#6AC259');
  //   $('.piechart>svg>g>g:nth-child(2) path').css('fill', '#fff147');
  //   $('.piechart>svg>g>g:nth-child(3) path').css('fill', '#D75A4A');

  //   $('.piechart .legend div:nth-child(1) div:first-child').css({
  //     'border-radius': '50%',
  //     'background-color': '#6AC259',
  //   })
  //   $('.piechart .legend div:nth-child(2) div:first-child').css({
  //     'border-radius': '50%',
  //     'background-color': '#fff147',
  //   })
  //   $('.piechart .legend div:nth-child(3) div:first-child').css({
  //     'border-radius': '50%',
  //     'background-color': '#D75A4A',
  //   })

  //   $('.piechart .legend>div').css({
  //     'border-bottom': '1px solid',
  //     'padding': '5px 0',
  //   })

  //   $('.piechart .legend').css({
  //     'padding': '0 10px',
  //     'font-size': '12px'
  //   })

  //   $('.piechart svg').css('float', 'left');
  // }

  // stackedBarChart(data) {
  //   let margin = {
  //     top: 20,
  //     right: 20,
  //     bottom: 40,
  //     left: 60
  //   },
  //     width = 200 - margin.left - margin.right,
  //     height = 250 - margin.top - margin.bottom,
  //     that = this;

  //   let x = d3.scaleBand().rangeRound([0, width]);

  //   let y = d3.scaleLinear().rangeRound([height, 0]);

  //   let color = d3.scaleOrdinal(d3.schemeCategory20);

  //   let xScale = d3.scaleLinear().range([margin.left, width - margin.right]);

  //   let yScale = d3.scaleLinear().range([height - margin.top, margin.bottom]);

  //   var xAxis = d3.axisBottom()
  //     .scale(x)

  //   var yAxis = d3.axisLeft()
  //     .scale(y)
  //     .ticks(4)
  //     .tickFormat(d3.format(".0%"));


  //   d3.select(".barchart svg").remove();
  //   d3.select(".barchart .legend").remove();

  //   let svg = d3.select(".barchart").append("svg")
  //     .attr("width", width + margin.left + margin.right)
  //     .attr("height", height + margin.top + margin.bottom)
  //     .append("g")
  //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")")


  //   color.domain(d3.keys(data[0]).filter(function (key) {
  //     return key !== "interest_rate";
  //   }));


  //   data.forEach(function (d) {
  //     let y0 = 0;

  //     d['rates'] = color.domain().map(function (name) {
  //       console.log();;
  //       return {
  //         name: name,
  //         y0: y0,
  //         y1: y0 += +d[name],
  //         amount: d[name]
  //       };
  //     });
  //     d['rates'].forEach(function (d) {
  //       d.y0 /= y0;
  //       d.y1 /= y0;
  //     });

  //     console.log(data);
  //   });

  //   data.sort(function (a, b) {
  //     return b['rates'][0].y1 - a['rates'][0].y1;
  //   });

  //   x.domain(data.map(function (d) {
  //     return d.interest_rate;
  //   }));

  //   svg.append("g").attr("class", "x_axis").attr("transform", "translate(0," + height + ")").call(xAxis);

  //   svg.append("g").attr("class", "y axis").call(yAxis);


  //   let interest_rate = svg.selectAll(".interest-rate")
  //     .data(data)
  //     .enter()
  //     .append("g")
  //     .attr("class", "interest-rate")
  //     .attr("transform", function (d) {
  //       return "translate(" + (x(d.interest_rate) + 30) + ",0)";
  //     });

  //   d3.selectAll('.tick line').remove();

  //   let line = d3.selectAll('.tick')
  //     .append('line')
  //     .attr('x1', '0')
  //     .attr('y1', '0')
  //     .attr('x2', '200')
  //     .attr('y2', '0')
  //     .style('stroke-width', '0.5')
  //     .style('stroke', 'gray')

  //   d3.select('.x_axis path').remove()


  //   var tooltip = d3.select('#tooltip');

  //   interest_rate.selectAll(".barchart rect")
  //     .data(function (d) {
  //       return d.rates;
  //     })
  //     .enter()
  //     .append("rect")
  //     .attr("width", 20)
  //     .attr("y", function (d) {
  //       return y(d.y1);
  //     })
  //     .attr("height", function (d) {
  //       return y(d.y0) - y(d.y1);
  //     })
  //     .style("fill", function (d) {
  //       return color(d.name);
  //     })

  //   d3.selectAll(".barchart rect")
  //     .on("mouseover", function (d) {
  //       d3.select('#tooltip')
  //         .data(data)
  //         .text(function (d) {
  //           debugger
  //           // console.log(this.barChartData2)
  //           return `${'Working'} (${d['Working']})
  //         ${'Not Working'} (${d['Not Working']})
  //         ${'Service Req'} (${d['Service Requeired']})`
  //         });
  //       d3.select('#tooltip').style("display", "block")
  //     })
  //     .on("mouseout", function () {
  //       d3.select('#tooltip').style("display", "none")
  //     })

  //   $('.barchart>svg>g>g:nth-child(3)>rect:nth-child(1), .barchart>svg>g>g:nth-child(4)>rect:nth-child(1)').css('fill', '#6AC259');
  //   $('.barchart>svg>g>g:nth-child(3)>rect:nth-child(2), .barchart>svg>g>g:nth-child(4)>rect:nth-child(2)').css('fill', '#fff147');
  //   $('.barchart>svg>g>g:nth-child(3)>rect:nth-child(3), .barchart>svg>g>g:nth-child(4)>rect:nth-child(3)').css('fill', '#D75A4A');

  // }
  // lineChart(data, type, Num) {
  //   debugger;

  //   let h = 40;
  //   let w = 100;

  //   let lineFun = d3.line()
  //     .x(function (d) {
  //       return d.actual * 10;
  //     })
  //     .y(function (d) {
  //       return h - (d.forecast - d.actual) * 7
  //     })
  //     .curve(d3.curveBasis);

  //   d3.selectAll(`#linechart${type}${Num} svg`).remove();

  //   let svg = d3.select(`#linechart${type}${Num}`).append("svg")
  //   $(`#linechart${type}${Num} svg`).attr('width', w)
  //   $(`#linechart${type}${Num} svg`).attr('height', h)

  //   svg.append('line')
  //     .style("stroke", "#50E390")
  //     .attr("x1", 0)
  //     .attr("y1", 20)
  //     .attr("x2", 100)
  //     .attr("y2", 20);

  //   // function drawLinePoint(data,type ,Num) {
  //   let viz = svg.append("path")

  //   $(`#linechart${type}${Num} svg path`).attr({
  //     d: lineFun(data),
  //     "stroke": "#50E390",
  //     "stroke-width": 3,
  //     "fill": "none"
  //   })

  // }
}
