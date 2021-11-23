var moment = require("moment");
moment.locale("es");

console.log("Naci "+ moment("13/11/1999", "DD/MM/YYYY").fromNow());
