$(function() {
  var myChart=echarts.init(document.getElementById('main'));
  
  var xData=[];
  var yData=[];

  for(var i=2000;i<=2020;i+=5){
    xData.push(i);
    if(i>=2000&&i<=2005){
      yData.push(i*0.6-1194)
    }
    else if(i>2005&&i<=2010){
      yData.push(i*(-0.2)+410)
    }
    else if(i>2010&&i<=2015){
      yData.push(8)
    }
    else if(i>2015){
      yData.push(i*(-0.2)+411)
    }
  }
  var option={
    title:{
      text:'JavaScript语言排名变化'
    },
    tooltip:{
      trigger:'axis',
      axisPointer:{
        type:'line'
      },
      formatter:function(params){
        //console.log(params[0]);
        return "<div style='text-align:center'>"+'排名'+'<br>'+params[0].name+':'+params[0].value+'</div>'
      }
    },
    xAxis:{
      type:'category',
      data:xData
    },
    yAxis:{
      type:"value"
    },
    series:[{
      type:'line',
      data:yData
    }]
  }
  myChart.setOption(option);
});
