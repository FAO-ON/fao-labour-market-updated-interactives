import define1 from "./defines.js";
function _1(md){return(
    md`# Labour Market Report
    `
    )}
    
    function _2(htl){return(
    htl.html`  <style>
       body{
          max-width: 800px;
          margin-inline: auto;
        }
    
        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
        /* OP charts */
    
        /* figure container */
      .labour-market-chart line{
        display: none;
      }
        .labour-market-chart {
            font-family: Helvetica, Arial;
            font-size: 14px;
            overflow: visible;
            margin: 0;
            margin-bottom: 20px;
        }
    
      .labour-market-chart g[aria-label="x-axis tick"]{
        display:none;
      }
    
      .labour-market-chart text{
        font-size: 1.2rem;
      }
    
    
    
        /* legend container */
        .labour-market-chart-swatches,
        .labour-market-chart-swatch{
            font-size: 13px;
            font-family: Helvetica, Arial;
            justify-content: center;
        }
    
      #observablehq-viewof-filtered2-8deb58ae > div{
        justify-content: center;
      }
    
        /* legend entries */
        .fig-legend-swatch{
            font-size: 13px;
            font-family: Helvetica, Arial;
            /*equal spacing between the swatch and the text*/
            margin-right: 10px;
        }
    
        /* y axis */
        .labour-market-chart g[aria-label="y-axis label"] text{
        font-size: 1.2rem;
        font-family: Helvetica, Arial;
        
        }
    
      #observablehq-fig1_plot-8deb58ae > svg > g[aria-label="y-axis label"] > text{
        transform: translate(20px, 390px) rotate(270deg);
      }
    
      #observablehq-fig1_plot-8deb58ae > svg > svg > g[aria-label="y-axis label"] > text{
        transform: translate(1305px, 375px) rotate(90deg);
      }
    
      .labour-market-chart g[aria-label="y-axis tick"]{
        display: none;
      }
    
        /* x axis */
     
    
        .labour-market-chart g[aria-label="x-axis label"] text{
            font-size: 1.2rem;
            
        }
    
      .labour-market-chart  g[aria-label="x-axis tick label"] :is(text){
        /*rotate the x axis label 90 degrees*/
        /*move down the x axis label*/
    
      }
    
      .labour-market-chart g[aria-label="text"]{
        /*move to the right*/
        transform: translate(-265px, 30px);
        
      }
    
      .labour-market-chart g[aria-label="text"] text{
        font-size: 20px;
        color: '#e23e94';
      }
    
        .labour-market-chart g[aria-label="tip"] text{
            font-size: 1.2rem;
            font-family: Helvetica, Arial;
        }
    
    
    
        /* grey-out columns that aren't being hovered */
      /*
        .labour-market-chart g[aria-label="bar"]:has(rect:hover) rect:not(:hover),
        .labour-market-chart g[aria-label="dot"]:has(circle:hover) circle:not(:hover){
            fill:#eee;
        }
      */
    
    
    
      /* override x axis position */
      .report-chart:not(#fig8-5-image) .labour-market-chart g[aria-label="x-axis label"]{
        transform: translateY(24px);
      }
    
      .labour-market-chart g[aria-label="x-axis tick label"]{
      }
      /* bold the first line in the tooltip */
      .labour-market-chart [aria-label="tip"] tspan:nth-child(1) {
        font-weight: bold;
      }
    
      </style>`
    )}
    
    function _year_vs_employmentchange(fig1){return(
    fig1.map(d => Object.keys(d).slice(1).map(k => ({Type: "Year vs Employment Change", Year: k.toString(), "Change": +d[k]})))[0]
    )}
    
    function _combined(year_vs_employmentchange,year_vs_unemploymentrate){return(
    year_vs_employmentchange.map((d, i) => ({...d, "Unemployment Rate": +[year_vs_unemploymentrate[i].Change], "y": (d.Change+ year_vs_unemploymentrate[i].Change*3)/2}))
    )}
    
    function _year_vs_unemploymentrate(fig1){return(
    fig1.map(d => Object.keys(d).slice(1).map(k => ({Type: "Year vs Unemployment Rate", Year: k.toString(), "Change": +d[k]/100})))[1]
    )}
    
    function _plot(Plot,year_vs_unemploymentrate,year_vs_employmentchange){return(
    Plot.plot({
                        width: 1000,
                        height: 600,
                        marginLeft: 55,
                        marginRight: 50,
                        marginBottom: 80,
       x:{type: "band", label: "Year", domain: year_vs_unemploymentrate.map(d => d.Year), padding: 0.2},
            y:{axis: "left", label:"", labelArrow: "none", domain: [-400,400], nice: true, line: true},
            marks:[
                Plot.barY(year_vs_employmentchange, {x: "Year", y: "Change", fill: '#9ec2f5'}),
                
                () => 
                    Plot.plot({
                        
                        width: 1000,
                        height: 600,
                        marginLeft: 55,
                        marginRight: 27,
                        marginBottom: 80,
                        className:  "labour-market-chart",
                        x:{type: "band", label: "", domain: year_vs_unemploymentrate.map(d => d.Year), padding: 0.2, tickFormat: d => null},
                        y:{axis: "right", label: "", labelArrow: "none", domain: [0,12], nice: true, line: true},
                        marks:[
                            Plot.line(year_vs_unemploymentrate, {x: "Year", y: "Change", stroke: '#0f60d5', strokeWidth: 5}),                    
                        ],
                    })
                
                
            ],
            color: {legend: true, domain:["Year vs Employment Change", "Year vs Unemployment Rate"], range: ['#9ec2f5', '#0f60d5']},
    
    })
    )}
    
    function _color(plot){return(
    plot.scale("color")
    )}
    
    function _filtered(Inputs,color,htl,styles){return(
    Inputs.checkbox(
      new Map(color.domain.map((d, i) => [
        htl.html`<div style=${{...styles, background: color.range[i]}}></div> ${d}`, d
      ])),
      {value: color.domain}
    )
    )}
    
    function _domain(){return(
    ["Year vs Employment Change", "Year vs Unemployment Rate" ]
    )}
    
    function _range(){return(
    ["#9ec2f5", "#0f60d5"]
    )}
    
    function _filtered2(filterLegend,domain,range){return(
    filterLegend(domain, range)
    )}
    
    function _fig1_plot(Plot,year_vs_unemploymentrate,year_vs_employmentchange,filtered2,combined,domain,range){return(
    Plot.plot({
      width: 1300,
      height: 600,
      marginLeft: 55,
      marginRight: 27,
      marginBottom: 80,
      className: "labour-market-chart",
      x: { tickRotate: 270, type: "band", tickPadding: 40, label: "", domain: year_vs_unemploymentrate.map(d => d.Year), padding: 0.2, tickFormat: (d, i) => {
        // Display tick label for every other year
        return i % 2 === 0 ? d : "";
      } },
      y: { ticks: 9, axis: "left", label: "Change in Employment (Thousands)", labelArrow: "none", domain: [-400, 400], nice: true, line: true },
      marks: [
        Plot.barY(year_vs_employmentchange.filter(({ Type }) => filtered2.includes(Type)), { x: "Year", y: "Change", fill: '#9ec2f5' }),
    
        () => Plot.plot({
          width: 1300,
          height: 600,
          marginLeft: 55,
          marginRight: 27,
          marginBottom: 80,
          className: "labour-market-chart",
          x: { ticks: 24, type: "band", label: "", domain: year_vs_unemploymentrate.map(d => d.Year), padding: 0.2, tickFormat: d => null },
          y: { ticks: 7, axis: "right", labelArrow: "none", label: "Unemployment Rate (Per Cent)", percent: true, domain: [0,12.0], tickFormat: d => d.toFixed(1)},
          marks: [
            Plot.line(year_vs_unemploymentrate.filter(({ Type }) => filtered2.includes(Type)), { x: "Year", y: "Change", stroke: '#0f60d5', strokeWidth: 5 }),
            Plot.tip(combined, Plot.pointerX({
                x: (combined) => combined["Year"], // Set the x position of the tooltip
                y: (combined) => {
                  if (filtered2.includes("Year vs Unemployment Rate") && !(filtered2.includes("Year vs Employment Change"))) {
                    return combined["Unemployment Rate"]; // Set the y position based on the active plot
                  } 
            },
            title: (combined) => {
             
              let tooltipContent = `Year: ${combined["Year"]}\nUnemployment Rate: ${Intl.NumberFormat('en-CA', {maximumSignificantDigits: 2}).format(combined["Unemployment Rate"]*100)}%`;
              return tooltipContent;
            },
            lineWidth: 1000
            }))
          ],
        }),
        Plot.tip(combined, Plot.pointerX({
          x: (combined) => combined["Year"], // Set the x position of the tooltip
          y: (combined) => {
            if (filtered2.includes("Year vs Employment Change") && filtered2.includes("Year vs Unemployment Rate")) {
              return combined["y"]; // Set the y position based on the active plot
            } else if (filtered2.includes("Year vs Employment Change")) {
              return combined["Change"]; // Set the y position based on the active plot
            }
      },
      title: (combined) => {
        const yearVsEmploymentChangeActive = filtered2.includes("Year vs Employment Change");
        const yearVsUnemploymentRateActive = filtered2.includes("Year vs Unemployment Rate");
    
        let tooltipContent = "";
        if (yearVsEmploymentChangeActive && yearVsUnemploymentRateActive) {
          tooltipContent ="Year: " + `${combined["Year"]}` + "\n" +"Type: Year vs Employment Change" + '\n' + "Employment Change: " + `${Intl.NumberFormat('en-CA', { maximumSignificantDigits: 3 }).format(
        combined["Change"]*1000,
      )}` + "" +'\n' + '\n'+"Type: Year vs Unemployment Change" + "\n" + "Unemployment Change: " + `${Intl.NumberFormat('en-CA', {maximumSignificantDigits: 2}).format(combined["Unemployment Rate"]*100)}` + "%";
        } 
        else if(yearVsEmploymentChangeActive){
          tooltipContent = `Year: ${combined["Year"]}\nEmployment Change: ${Intl.NumberFormat('en-CA', { maximumSignificantDigits: 3 }).format(
        combined["Change"],
      )}`;
        }
        
        //else {
          //tooltipContent = `Year: ${combined["Year"]}\nUnemployment Rate: ${combined["Unemployment Rate"]}%`;
        //}
        return tooltipContent;
      },
      lineWidth: 1000
    }))
    
      ],
      color: { domain, range }
    })
    )}
    
    function _13(md){return(
    md`A More conventional method (possibly?)`
    )}
    
    function _fig1_plot_test(Plot,year_vs_unemploymentrate,dualAxisY,year_vs_employmentchange,filtered2){return(
    Plot.plot({
      width: 1300,
      height: 600,
      marginLeft: 55,
      marginRight: 27,
      marginBottom: 80,
      className: "labour-market-chart",
      x: { tickRotate: 270, type: "band", label: "Year", domain: year_vs_unemploymentrate.map(d => d.Year), padding: 0.2 },
      marks:[
        dualAxisY(year_vs_employmentchange, {y: "Change", anchor: "left"}),
        dualAxisY(year_vs_unemploymentrate, {y: "Change", anchor: "right"}),
        Plot.barY(
      year_vs_employmentchange.filter(({ Type }) => filtered2.includes(Type)), Plot.normalizeY("extent", { x: "Year", y: "Change", fill: '#9ec2f5', tip: true }), // Set the yAxis attribute to "left"
    ),
        Plot.line(year_vs_unemploymentrate.filter(({ Type }) => filtered2.includes(Type)), Plot.normalizeY("extent", { x: "Year", y: "Change", stroke: '#0f60d5', strokeWidth: 5, yAxis: "right" })),
    
        
      ]
    })
    )}
    
    function _dualAxisY(d3,Plot){return(
    function dualAxisY(data, {y, ticks = 9, tickFormat, ...options} = {}) {
      const [y1, y2] = d3.extent(Plot.valueof(data, y));
      const scale = d3.scaleLinear().domain([y1, y2]);
      return Plot.axisY(d3.ticks(y1, y2, ticks), {...options, y: scale, tickFormat: scale.tickFormat(ticks, tickFormat)});
    }
    )}
    
    function _filterLegend(set,htl){return(
    (domain, range) => {
      const value = new Map(domain.map(d => [d, true]));
      const _set = () => set(node, [...value].filter(d => d[1]).map(d => d[0]));
      const oninput = e => (value.set(e.target.id, e.target.checked), _set());
      const node = htl.html`<div style="font-family: var(--sans-serif); font-size: 13px; display: flex; gap: 1em;">
        ${domain.map((d, i) => htl.html`<div style="display: flex;">
          <input type="checkbox" id="${d}" name="${d}" checked style="accent-color: ${range[i]}" oninput=${oninput}>
          <label for="${d}">${d}</label>
        </div>`)}
      </div>`;
      _set();
      return node;
    }
    )}
    
    function _styles(){return(
    {width: "1em", height: "1em", display: "inline-block", verticalAlign: "middle"}
    )}
    
    function _fig1(__query,FileAttachment,invalidation){return(
    __query(FileAttachment("fig1.csv"),{from:{table:"fig1"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation)
    )}
    
    export default function define(runtime, observer) {
      const main = runtime.module();
      main.define("module 1", async () => runtime.module((await import("./runtime.js")).default));
      const fileAttachments = new Map([
        ["fig1.csv", {url: "files/fig1.csv", mimeType: "text/csv"}]
      ]);
      main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
      main.variable(observer()).define(["md"], _1);
      main.variable(observer()).define(["htl"], _2);
      main.variable(observer("year_vs_employmentchange")).define("year_vs_employmentchange", ["fig1"], _year_vs_employmentchange);
      main.variable(observer("combined")).define("combined", ["year_vs_employmentchange","year_vs_unemploymentrate"], _combined);
      main.variable(observer("year_vs_unemploymentrate")).define("year_vs_unemploymentrate", ["fig1"], _year_vs_unemploymentrate);
      main.variable(observer("plot")).define("plot", ["Plot","year_vs_unemploymentrate","year_vs_employmentchange"], _plot);
      main.variable(observer("color")).define("color", ["plot"], _color);
      main.variable(observer("viewof filtered")).define("viewof filtered", ["Inputs","color","htl","styles"], _filtered);
      main.variable(observer("filtered")).define("filtered", ["Generators", "viewof filtered"], (G, _) => G.input(_));
      main.variable(observer("domain")).define("domain", _domain);
      main.variable(observer("range")).define("range", _range);
      main.variable(observer("viewof filtered2")).define("viewof filtered2", ["filterLegend","domain","range"], _filtered2);
      main.variable(observer("filtered2")).define("filtered2", ["Generators", "viewof filtered2"], (G, _) => G.input(_));
      main.variable(observer("fig1_plot")).define("fig1_plot", ["Plot","year_vs_unemploymentrate","year_vs_employmentchange","filtered2","combined","domain","range"], _fig1_plot);
      main.variable(observer()).define(["md"], _13);
      main.variable(observer("fig1_plot_test")).define("fig1_plot_test", ["Plot","year_vs_unemploymentrate","dualAxisY","year_vs_employmentchange","filtered2"], _fig1_plot_test);
      main.variable(observer("dualAxisY")).define("dualAxisY", ["d3","Plot"], _dualAxisY);
      main.variable(observer("filterLegend")).define("filterLegend", ["set","htl"], _filterLegend);
      main.variable(observer("styles")).define("styles", _styles);
      main.variable(observer("fig1")).define("fig1", ["__query","FileAttachment","invalidation"], _fig1);
      const child1 = runtime.module(define1);
      main.import("set", child1);
      return main;
    }