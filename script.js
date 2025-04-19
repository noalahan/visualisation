var dataset,
  index,
  animation,
  day = 0,
  time = 0,
  size;
// stations and people counts
var stations = [];
// lines and station names
const lines = [
  {
    line: "bak",
    stations: [
      "Stonebridge Park",
      "Harlesden",
      "Willesden Junction",
      "Kensal Green",
      "Queen's Park",
      "Kilburn Park",
      "Maida Vale",
      "Warwick Avenue",
      "Paddington",
      "Edgware Road (Bak)",
      "Marylebone",
      "Baker Street",
      "Regent's Park",
      "Oxford Circus",
      "Piccadilly Circus",
      "Charing Cross",
      "Embankment",
      "Waterloo",
      "Lambeth North",
      "Elephant & Castle",
    ],
    name: "Bakerloo",
    color: "#a65a2a",
  },
  {
    line: "cen",
    stations: [
      "Ealing Broadway",
      "Hanger Lane",
      "West Acton",
      "North Acton",
      "East Acton",
      "White City",
      "Shepherd's Bush",
      "Holland Park",
      "Notting Hill Gate",
      "Queensway",
      "Lancaster Gate",
      "Marble Arch",
      "Bond Street",
      "Oxford Circus",
      "Tottenham Court Road",
      "Holborn",
      "Chancery Lane",
      "St. Paul's",
      "Bank and Monument",
      "Liverpool Street",
      "Bethnal Green",
      "Mile End",
      "Stratford",
      "Leyton",
      "Leytonstone",
    ],
    name: "Central",
    color: "#e1251b",
  },
  {
    line: "cir",
    stations: [
      "Hammersmith (H&C)",
      "Goldhawk Road",
      "Shepherd's Bush Market",
      "Wood Lane",
      "Latimer Road",
      "Ladbroke Grove",
      "Westbourne Park",
      "Royal Oak",
      "High Street Kensington",
      "Notting Hill Gate",
      "Gloucester Road",
      "Bayswater",
      "South Kensington",
      "Paddington",
      "Sloane Square",
      "Edgware Road (DIS)",
      "Victoria",
      "Baker Street",
      "St. James's Park",
      "Great Portland Street",
      "Westminster",
      "Euston Square",
      "Embankment",
      "King's Cross St. Pancras",
      "Temple",
      "Farringdon",
      "Blackfriars",
      "Barbican",
      "Mansion House",
      "Moorgate",
      "Cannon Street",
      "Liverpool Street",
      "Bank and Monument",
      "Aldgate",
      "Tower Hill",
    ],
    name: "Circle",
    color: "#ffcd00",
  },
  {
    line: "dis",
    stations: [
      "Kew Gardens",
      "Ealing Broadway",
      "Gunnersbury",
      "Ealing Common",
      "Wimbledon",
      "Acton Town",
      "Wimbledon Park",
      "Chiswick Park",
      "Southfields",
      "Turnham Green",
      "East Putney",
      "Stamford Brook",
      "Putney Bridge",
      "Ravenscourt Park",
      "Parsons Green",
      "Hammersmith (DIS)",
      "Fulham Broadway",
      "Barons Court",
      "Kensington (Olympia)",
      "West Brompton",
      "West Kensington",
      "Earl's Court",
      "Gloucester Road",
      "High Street Kensington",
      "South Kensington",
      "Notting Hill Gate",
      "Sloane Square",
      "Bayswater",
      "Victoria",
      "Paddington",
      "St. James's Park",
      "Edgware Road (DIS)",
      "Westminster",
      "Embankment",
      "Temple",
      "Blackfriars",
      "Mansion House",
      "Cannon Street",
      "Bank and Monument",
      "Tower Hill",
      "Aldgate East",
      "Whitechapel",
      "Stepney Green",
      "Mile End",
      "Bow Road",
      "Bromley-by-Bow",
      "West Ham",
      "Plaistow",
      "Upton Park",
      "East Ham",
    ],
    name: "District",
    color: "#007934",
  },
  {
    line: "hac",
    stations: [
      "Hammersmith (H&C)",
      "Goldhawk Road",
      "Shepherd's Bush Market",
      "Wood Lane",
      "Latimer Road",
      "Ladbroke Grove",
      "Westbourne Park",
      "Royal Oak",
      "Paddington",
      "Edgware Road (DIS)",
      "Baker Street",
      "Great Portland Street",
      "Euston Square",
      "King's Cross St. Pancras",
      "Farringdon",
      "Barbican",
      "Moorgate",
      "Liverpool Street",
      "Aldgate East",
      "Whitechapel",
      "Stepney Green",
      "Mile End",
      "Bow Road",
      "Bromley-by-Bow",
      "West Ham",
      "Plaistow",
      "Upton Park",
      "East Ham",
    ],
    name: "Hammersmith & City",
    color: "#ec9bad",
  },
  {
    line: "jub",
    stations: [
      "Neasden",
      "Dollis Hill",
      "Willesden Green",
      "Kilburn",
      "West Hampstead",
      "Finchley Road",
      "Swiss Cottage",
      "St. John's Wood",
      "Baker Street",
      "Bond Street",
      "Green Park",
      "Westminster",
      "Waterloo",
      "Southwark",
      "London Bridge",
      "Bermondsey",
      "Canada Water",
      "Canary Wharf",
      "North Greenwich",
      "Canning Town",
      "West Ham",
      "Stratford",
    ],
    name: "Jubilee",
    color: "#7b868c",
  },
  {
    line: "met",
    stations: [
      "Finchley Road",
      "Baker Street",
      "Great Portland Street",
      "Euston Square",
      "King's Cross St. Pancras",
      "Farringdon",
      "Barbican",
      "Moorgate",
      "Liverpool Street",
      "Aldgate",
    ],
    name: "Metropolitan",
    color: "#870f54",
  },
  {
    line: "nor",
    stations: [
      "Hendon Central",
      "East Finchley",
      "Brent Cross",
      "Highgate",
      "Golders Green",
      "Archway",
      "Hampstead",
      "Tufnell Park",
      "Belsize Park",
      "Kentish Town",
      "Chalk Farm",
      "Camden Town",
      "Mornington Crescent",
      "Euston",
      "King's Cross St. Pancras",
      "Warren Street",
      "Angel",
      "Goodge Street",
      "Old Street",
      "Tottenham Court Road",
      "Moorgate",
      "Leicester Square",
      "Bank and Monument",
      "Charing Cross",
      "London Bridge",
      "Embankment",
      "Borough",
      "Waterloo",
      "Elephant & Castle",
      "Kennington",
      "Oval",
      "Nine Elms",
      "Stockwell",
      "Battersea Power Station",
      "Clapham Common",
      "Clapham South",
      "Balham",
      "Tooting Bec",
      "Tooting Broadway",
      "Colliers Wood",
      "South Wimbledon",
    ],
    name: "Northern",
    color: "#000000",
  },
  {
    line: "pic",
    stations: [
      "Park Royal",
      "Northfields",
      "North Ealing",
      "South Ealing",
      "Ealing Common",
      "Acton Town",
      "Turnham Green",
      "Hammersmith (DIS)",
      "Barons Court",
      "Earl's Court",
      "Gloucester Road",
      "South Kensington",
      "Knightsbridge",
      "Hyde Park Corner",
      "Green Park",
      "Piccadilly Circus",
      "Leicester Square",
      "Covent Garden",
      "Holborn",
      "Russell Square",
      "King's Cross St. Pancras",
      "Caledonian Road",
      "Holloway Road",
      "Arsenal",
      "Finsbury Park",
      "Manor House",
      "Turnpike Lane",
      "Wood Green",
      "Bounds Green",
    ],
    name: "Picadilly",
    color: "#000f9f",
  },
  {
    line: "vic",
    stations: [
      "Walthamstow Central",
      "Blackhorse Road",
      "Tottenham Hale",
      "Seven Sisters",
      "Finsbury Park",
      "Highbury & Islington",
      "King's Cross St. Pancras",
      "Euston",
      "Warren Street",
      "Oxford Circus",
      "Green Park",
      "Victoria",
      "Pimlico",
      "Vauxhall",
      "Stockwell",
      "Brixton",
    ],
    name: "Victoria",
    color: "#00a0df",
  },
  {
    line: "wac",
    stations: ["Waterloo", "Bank and Monument"],
    name: "Waterloo & City",
    color: "#6bcdb2",
  },
];

$(document).ready(function () {
  // set hidden items
  $("#play").hide();
  $("#stop").hide();
  $("#time").hide();
  $("#line_map").hide();
  $(".ready").hide();
  // for tube line map photo sizes
  if ($(document).width() < 600) {
    size = "s";
  } else if ($(document).width() < 992) {
    size = "m";
  } else {
    size = "l";
  }

  // info
  $(".dropdown").click(function () {
    $(".dropdown-content").toggle();
  });

  // set up svg
  var margin = 35,
    w = $(document).width() * 0.85 - margin,
    h = $(document).height() * 0.7;
  var svg = d3
    .select("#svg_div")
    .append("svg")
    .attr("width", w + margin)
    .attr("height", h)
    .append("g")
    .attr("transform", "translate(" + margin + ", 0)");

  // create axes
  var x = d3.scaleBand().range([0, w]).padding(0.2);
  var y = d3.scaleLinear().range([h, 0]);
  var yAxis = d3
    .axisLeft(y)
    .tickSize(0)
    .tickFormat((x, i) => {
      return i !== 0 ? `${x / 1000}k` : null;
    }); // removes 0 and formats in k

  let roundelW = $("#landing img").width() * 0.99;
  /**
   * Gets TFL data from API
   */
  async function getData() {
    // MONDAY ENTRIES
    try {
      const response = await fetch(
        "https://opensheet.elk.sh/1cIc3nk0YNZ_pkD8H-TcT6Y_vrckbUNsY0H6uwtj1bfE/mon_en"
      );
      const data = await response.json();

      data.forEach((row) => {
        stations.push({
          station: row.Station,
          zone: parseInt(row.Zone),
          count: [
            parseInt(row.Early),
            parseInt(row.AM),
            parseInt(row.Midday),
            parseInt(row.PM),
            parseInt(row.Evening),
            parseInt(row.Late),
          ],
          lines: [],
        });
      });
    } catch (err) {
      console.log(err);
    }
    $("#load").width(roundelW * 0.1);

    // MONDAY EXITS
    try {
      const response = await fetch(
        "https://opensheet.elk.sh/1cIc3nk0YNZ_pkD8H-TcT6Y_vrckbUNsY0H6uwtj1bfE/mon_ex"
      );
      const data = await response.json();

      var i = 0;
      data.forEach((row) => {
        stations[i].count[0] += parseInt(row.Early);
        stations[i].count[1] += parseInt(row.AM);
        stations[i].count[2] += parseInt(row.Midday);
        stations[i].count[3] += parseInt(row.PM);
        stations[i].count[4] += parseInt(row.Evening);
        stations[i].count[5] += parseInt(row.Late);
        i++;
      });
    } catch (err) {
      console.log(err);
    }
    $("#load").width(roundelW * 0.2);

    // TUESDAY/WEDNESDAY/THURSDAY ENTRIES
    try {
      const response = await fetch(
        "https://opensheet.elk.sh/1cIc3nk0YNZ_pkD8H-TcT6Y_vrckbUNsY0H6uwtj1bfE/twt_en"
      );
      const data = await response.json();

      var i = 0;
      data.forEach((row) => {
        stations[i].count.push(parseInt(row.Early));
        stations[i].count.push(parseInt(row.AM));
        stations[i].count.push(parseInt(row.Midday));
        stations[i].count.push(parseInt(row.PM));
        stations[i].count.push(parseInt(row.Evening));
        stations[i].count.push(parseInt(row.Late));
        i++;
      });
    } catch (err) {
      console.log(err);
    }
    $("#load").width(roundelW * 0.3);

    // TUESDAY/WEDNESDAY/THURSDAY EXITS
    try {
      const response = await fetch(
        "https://opensheet.elk.sh/1cIc3nk0YNZ_pkD8H-TcT6Y_vrckbUNsY0H6uwtj1bfE/twt_ex"
      );
      const data = await response.json();

      var i = 0;
      data.forEach((row) => {
        stations[i].count[6] += parseInt(row.Early);
        stations[i].count[7] += parseInt(row.AM);
        stations[i].count[8] += parseInt(row.Midday);
        stations[i].count[9] += parseInt(row.PM);
        stations[i].count[10] += parseInt(row.Evening);
        stations[i].count[11] += parseInt(row.Late);
        i++;
      });
    } catch (err) {
      console.log(err);
    }
    $("#load").width(roundelW * 0.4);

    // FRIDAY ENTRIES
    try {
      const response = await fetch(
        "https://opensheet.elk.sh/1cIc3nk0YNZ_pkD8H-TcT6Y_vrckbUNsY0H6uwtj1bfE/fri_en"
      );
      const data = await response.json();

      var i = 0;
      data.forEach((row) => {
        stations[i].count.push(parseInt(row.Early));
        stations[i].count.push(parseInt(row.AM));
        stations[i].count.push(parseInt(row.Midday));
        stations[i].count.push(parseInt(row.PM));
        stations[i].count.push(parseInt(row.Evening));
        stations[i].count.push(parseInt(row.Late));
        i++;
      });
    } catch (err) {
      console.log(err);
    }
    $("#load").width(roundelW * 0.5);

    // FRIDAY EXITS
    try {
      const response = await fetch(
        "https://opensheet.elk.sh/1cIc3nk0YNZ_pkD8H-TcT6Y_vrckbUNsY0H6uwtj1bfE/fri_ex"
      );
      const data = await response.json();

      var i = 0;
      data.forEach((row) => {
        stations[i].count[12] += parseInt(row.Early);
        stations[i].count[13] += parseInt(row.AM);
        stations[i].count[14] += parseInt(row.Midday);
        stations[i].count[15] += parseInt(row.PM);
        stations[i].count[16] += parseInt(row.Evening);
        stations[i].count[17] += parseInt(row.Late);
        i++;
      });
    } catch (err) {
      console.log(err);
    }
    $("#load").width(roundelW * 0.6);

    // SATURDAY ENTRIES
    try {
      const response = await fetch(
        "https://opensheet.elk.sh/1cIc3nk0YNZ_pkD8H-TcT6Y_vrckbUNsY0H6uwtj1bfE/sat_en"
      );
      const data = await response.json();

      var i = 0;
      data.forEach((row) => {
        stations[i].count.push(parseInt(row.Early));
        stations[i].count.push(parseInt(row.AM));
        stations[i].count.push(parseInt(row.Midday));
        stations[i].count.push(parseInt(row.PM));
        stations[i].count.push(parseInt(row.Evening));
        stations[i].count.push(parseInt(row.Late));
        i++;
      });
    } catch (err) {
      console.log(err);
    }
    $("#load").width(roundelW * 0.7);

    // SATURDAY EXITS
    try {
      const response = await fetch(
        "https://opensheet.elk.sh/1cIc3nk0YNZ_pkD8H-TcT6Y_vrckbUNsY0H6uwtj1bfE/sat_ex"
      );
      const data = await response.json();

      var i = 0;
      data.forEach((row) => {
        stations[i].count[18] += parseInt(row.Early);
        stations[i].count[19] += parseInt(row.AM);
        stations[i].count[20] += parseInt(row.Midday);
        stations[i].count[21] += parseInt(row.PM);
        stations[i].count[22] += parseInt(row.Evening);
        stations[i].count[23] += parseInt(row.Late);
        i++;
      });
    } catch (err) {
      console.log(err);
    }
    $("#load").width(roundelW * 0.8);

    // SUNDAY ENTRIES
    try {
      const response = await fetch(
        "https://opensheet.elk.sh/1cIc3nk0YNZ_pkD8H-TcT6Y_vrckbUNsY0H6uwtj1bfE/sun_en"
      );
      const data = await response.json();

      var i = 0;
      data.forEach((row) => {
        stations[i].count.push(parseInt(row.Early));
        stations[i].count.push(parseInt(row.AM));
        stations[i].count.push(parseInt(row.Midday));
        stations[i].count.push(parseInt(row.PM));
        stations[i].count.push(parseInt(row.Evening));
        stations[i].count.push(parseInt(row.Late));
        i++;
      });
    } catch (err) {
      console.log(err);
    }
    $("#load").width(roundelW * 0.9);

    // SUNDAY EXITS
    try {
      const response = await fetch(
        "https://opensheet.elk.sh/1cIc3nk0YNZ_pkD8H-TcT6Y_vrckbUNsY0H6uwtj1bfE/sun_ex"
      );
      const data = await response.json();

      var i = 0;
      data.forEach((row) => {
        stations[i].count[24] += parseInt(row.Early);
        stations[i].count[25] += parseInt(row.AM);
        stations[i].count[26] += parseInt(row.Midday);
        stations[i].count[27] += parseInt(row.PM);
        stations[i].count[28] += parseInt(row.Evening);
        stations[i].count[29] += parseInt(row.Late);
        i++;
      });
    } catch (err) {
      console.log(err);
    }

    // sets station interchanges
    interchanges();

    // loading anim
    $("#load").width(roundelW);
    setTimeout(getCode, 30);
  }

  // note: mon:0-5, twt:6-11, fri:12-17, sat:18-23, sun:24-29
  /**
   * Ensures code isn't called before data is set. Called in getData()
   */
  function getCode() {
    // hide landing page when needed
    $("#load").hide();
    $(".ready").show();
    $("#landing").click(function () {
      $("#landing").hide();
    });

    // tube menu selector
    $("#lineSelect").change(function (event) {
      // reset any variables
      $("#time").show();
      $("#play").show();
      $("#stop").hide();
      $("#timeText").text("");
      $("#line_map").show();
      $("#line_map").attr("src", "img/" + event.target.value + size + ".png");
      animation = false;
      index = 0;

      // set the data
      dataset = [];
      const line = getLine(event.target.value);
      for (let i = 0; i < line.length; i++) {
        dataset[i] = getStation(line[i]);
      }
      graph(dataset);
    });

    // day menu selector
    $("#daySelect").change(function (event) {
      day = parseInt(event.target.value);
      index = day + time;
      text_update();
      svg
        .selectAll(".bar")
        .transition()
        .duration(400)
        .attr("y", (d) => {
          return y(d.count[index]);
        })
        .attr("height", (d) => {
          return h - y(d.count[index]);
        });
    });
    // time menu selector
    $("#timeSelect").change(function (event) {
      time = parseInt(event.target.value);
      index = day + time;
      text_update();
      svg
        .selectAll(".bar")
        .transition()
        .duration(400)
        .attr("y", (d) => {
          return y(d.count[index]);
        })
        .attr("height", (d) => {
          return h - y(d.count[index]);
        });
    });

    // animate
    $("#play")
      .click(function () {
        animation = true;

        $("#play").hide();
        $("#stop").show();
        $("#time").hide();
      })
      .click(animate);
    $("#stop").click(function () {
      animation = false;

      $("#play").show();
      $("#stop").hide();

      $("#daySelect").val("");
      day = 0;
      $("#timeSelect").val("");
      time = 0;
      $("#time").show();
    });
  }

  /**
   * Finds station interchanges by looping over tube lines
   */
  function interchanges() {
    for (let i = 0; i < lines.length; i++) {
      const stations = lines[i].stations;

      for (let j = 0; j < stations.length; j++) {
        const station = getStation(stations[j]);
        station.lines.push(lines[i].color);
      }
    }
  }

  /**
   * Makes a string for tooltip images
   * @param   {[String]} lines Station connections list
   * @returns {String}         HTML string for images
   */
  function getImages(lines) {
    str = "</br>Interchanges: ";
    for (let i = 0; i < lines.length; i++) {
      str += "<span style='color: " + lines[i] + ";'>#</span>";
    }
    return str;
  }

  /**
   * animates the graph
   */
  function animate() {
    if (animation) {
      text_update();
      svg
        .selectAll(".bar")
        .transition()
        .duration(900)
        .attr("y", (d) => {
          return y(d.count[index]);
        })
        .attr("height", (d) => {
          return h - y(d.count[index]);
        });
      index = index < 29 ? index + 1 : 0;
      setTimeout(animate, 900);
    }
  }

  /**
   * update time text
   */
  function text_update() {
    var dayt, timet;
    var j = index % 6;
    var i = (index - j) / 6;

    if (i == 0) {
      dayt = "Monday";
    } else if (i == 1) {
      dayt = "Tue/Wed/Thu";
    } else if (i == 2) {
      dayt = "Friday";
    } else if (i == 3) {
      dayt = "Saturday";
    } else if (i == 4) {
      dayt = "Sunday";
    }

    if (j == 0) {
      timet = "5:00 - 7:00";
    } else if (j == 1) {
      timet = "7:00 - 10:00";
    } else if (j == 2) {
      timet = "10:00 - 16:00";
    } else if (j == 3) {
      timet = "16:00 - 19:00";
    } else if (j == 4) {
      timet = "19:00 - 22:00";
    } else if (j == 5) {
      timet = "22:00 - 5:00";
    }

    $("#timeText").text(dayt + " " + timet);
  }

  /**
   * Graph the data
   * @param {[Station]} dataset station object list
   */
  function graph(dataset) {
    // clear out existing graph
    d3.selectAll(".bar").remove();

    // Create the X axis:
    // set domain/range values
    x.domain(
      dataset.map((d) => {
        return d.station;
      })
    );
    y.domain([0, 105000]);
    // set axes
    svg
      .append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .select(".domain")
      .remove();

    // hover info
    var Tooltip = d3
      .select("#svg_div")
      .append("tooltip")
      .style("opacity", 0)
      .attr("class", "tooltip");
    var mouseover = function (d) {
      Tooltip.style("opacity", 1);
      d3.select(this).style("fill", "#323e48");
    };
    var mousemove = function (d) {
      Tooltip.html(
        "Station: " +
          d.station +
          "</br>Zone: " +
          d.zone +
          "</br>Count: " +
          d.count[index] +
          getImages(d.lines)
      )
        .style("left", d3.mouse(this)[0] + 70 + "px")
        .style("top", d3.mouse(this)[1] + "px");
    };
    var mouseleave = function (d) {
      Tooltip.style("opacity", 0);
      d3.select(this).style("fill", "#7b868c");
    };

    // graph
    svg
      .selectAll(".bar")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .style("fill", "#7b868c")
      .attr("rx", 5)
      .attr("x", (d) => {
        return x(d.station);
      })
      .attr("width", x.bandwidth())
      //start with no bar
      .attr("y", (d) => {
        return y(0);
      })
      .attr("height", (d) => {
        return h - y(0);
      })
      // hover info
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);
  }

  /**
   * finds the right station names array
   * @param   {String}   name name of line
   * @returns {[String]}      stations name list
   */
  function getLine(name) {
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].line == name) {
        $("#title").text(lines[i].name).css("color", lines[i].color);
        $("#line_map").attr("alt", lines[i].name + " tube map");
        return lines[i].stations;
      }
    }
    console.log("ERROR getLine(): Couldn't find \"" + name + '"');
  }

  /**
   * finds station object
   * @param   {String} name station name
   * @returns {Station}     station object
   */
  function getStation(name) {
    for (let i = 0; i < stations.length; i++) {
      if (stations[i].station == name) {
        return stations[i];
      }
    }
    console.log("ERROR getStation(): Couldn't find \"" + name + '"');
  }

  // Gets tfl data from file
  getData();
});
