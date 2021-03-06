var width = 360;
var height = 360;
var radius = Math.min(width, height) / 2;
var donutWidth = 90;

var color = d3.scale.category20b();

var svg = d3.select('#colorado-flag')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

var arc = d3.svg.arc()
    .innerRadius(radius - donutWidth)
    .outerRadius(radius)
    .startAngle(.65 * Math.PI)
    .endAngle(2.35 * Math.PI);

var innerArc = d3.svg.arc()
    .innerRadius(0)
    .outerRadius(donutWidth)
    .startAngle(0 * Math.PI)
    .endAngle(1.5 * Math.PI);

svg.append('path')
    .attr('d', arc)
    .attr('fill', 'rgb(194, 27, 43)');

/*svg.append('circle')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', 90)
    .attr('fill', 'rgb(255, 235, 102)');*/

var countdown = svg.append('path')
    .attr('d', innerArc)
    .attr('fill', 'rgb(255, 217, 0');


//Todo: Add transition with timer associated with countdown
