/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
am4core.options.queue = true;
am4core.options.deferredDelay = 500;


var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
chart.fontFamily = "Anton";
chart.background.fill = "#ebebe2";
var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
series.randomness = 0.2;
series.rotationThreshold = 0.5;

series.data = [{
	"tag": "Schaamte",
	"weight": 300
  }, {
	"tag": "Queer",
	"weight": 80
  }, {
	"tag": "Cultuur",
	"weight": 90
  }, {
	"tag": "Definities",
	"weight": 25
  }, {
	"tag": "Forum",
	"weight": 30
  }, {
	"tag": "Schuld",
	"weight": 45
  }, {
	"tag": "Vergiffenis",
	"weight": 160
  }, {
	"tag": "Joods",
	"weight": 20
  }, {
	"tag": "Acceptatie",
	"weight": 78
}, {
	"tag": "We zien",
	"weight": 40
}, {
	"tag": "Narratief",
	"weight": 30
}, {
	"tag": "Normaal",
	"weight": 25
}, {
	"tag": "We zijn",
	"weight": 35

  }];

series.dataFields.word = "tag";
series.dataFields.value = "weight";

series.labelsContainer.rotation = -5;

series.heatRules.push({
 "target": series.labels.template,
 "property": "fill",
 "min": am4core.color("#1464dc"),
 "max": am4core.color("#DC143C"),
 "dataField": "value"
});

var hoverState = series.labels.template.states.create("hover");
hoverState.properties.fill = am4core.color("#dcc814");

series.labels.template.url = "/0/afstudeeronderzoek/pages/{word}.html";
series.labels.template.urlTarget = "_self";

var subtitle = chart.titles.create();
subtitle.text = "(klik op een woord om het te openen)";
subtitle.fontFamily = "Roboto"

var title = chart.titles.create();
title.text = "";
title.fontSize = 40;
title.fontWeight = "800";
title.fontFamily = "Anton"
