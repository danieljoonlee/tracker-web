const d3 = require('d3');

/**
Percentage is a decimal integer.  

Function creates a donut chart based on percentage and color to differentiate
between Complete, In Progress, and Todo.
**/

export function createTaskChart(percentage, color) {
  //Node is used because of the React D3 Library
  var node = document.createElement('div');

  var τ = 2 * Math.PI,
      width = 100,
      height = 100,
      outerRadius = Math.min(width,height)/2,
      innerRadius = (outerRadius/5)*4 - 3,
      fontSize = (Math.min(width,height)/6);
  
  var arc = d3.svg.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .cornerRadius(outerRadius - innerRadius)
      .startAngle(-.2);

  var svg = d3.select(node).append("svg")
      .attr('width', '200px')
      .attr('height', '200px')
      .attr('viewBox','0 0 '+Math.min(width,height) +' '+Math.min(width,height) )
      .attr('preserveAspectRatio','xMinYMin')
      .append('g')
      .attr('transform', 'translate(' + Math.min(width,height) / 2 + ',' + Math.min(width,height) / 2 + ')');
  
  var text = svg.append('text')
      .text(Math.round((percentage)*100)+'%')
      .attr('text-anchor', 'middle')
      .style('font-size',fontSize+'px')
      .style('fill', '#888888')
      .style('box-shadow', 'inset 0 0 7px 4px rgba(255,255,255,.5)')
      .attr('dy',fontSize/3)
      .attr('dx',5);
      
  var background = svg.append('path')
      .datum({endAngle: τ})
      .style('fill', '#F0F0F0')
      .attr('d', arc);

  var midground = svg.append('path')
      .datum({endAngle: percentage * τ})
      .style('fill', color)
      .attr('d', arc);

  return node;
}