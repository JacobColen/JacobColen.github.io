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


var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
chart.fontFamily = "Anton";
chart.background.fill = "#ebebe2";
var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
series.randomness = 0.1;
series.rotationThreshold = 0.5;

series.data = [{
	"tag": "Schaamte",
	"weight": 300
  }, {
	"tag": "Queer",
	"weight": 80
  }, {
	"tag": "Woede",
	"weight": 90
  }, {
	"tag": "Stigma",
	"weight": 25
  }, {
	"tag": "Guilty Pleasure",
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
	"tag": "Narcisme",
	"weight": 78
}, {
	"tag": "Acceptatie",
	"weight": 40
}, {
	"tag": "Narratief",
	"weight": 30
}, {
	"tag": "Cultuur",
	"weight": 25
}, {
	"tag": "Rouw",
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

series.labels.template.url = "https://jacobcolen.github.io/afstudeeronderzoek/{word}";
series.labels.template.urlTarget = "_blank";

series.labels.template.tooltipText = "{word}";

var subtitle = chart.titles.create();
subtitle.text = "(klik op een woord om het te openen)";
subtitle.fontFamily = "Roboto"

var title = chart.titles.create();
title.text = "Afstudeeronderzoek";
title.fontSize = 20;
title.fontSize = "Roboto";
title.fontWeight = "800";
title.fontFamily = "Roboto"
