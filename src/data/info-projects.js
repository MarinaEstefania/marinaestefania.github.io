import organa from "../img/organamu.jpg";
import bq from "../img/bqmu.jpg";
import pokegoal from "../img/pokegoal.jpeg";
import mdlinks from "../img/mdlinksmu.jpg";

const data = {
  projects: [
    {
      id: "organa",
      name: "ORGANA",
      img: organa,
      stack: "React, Firebase, Javascript, CSS3, HTML5, Bootstrap, Libraries: QrReader, Moments.js.",
      description: "Currently used in Laboratoria's classroom. It's a Web Application that allows keeping attendance's records by reading QR codes.",
      features: "Authentication, attendances registration, successful registration alert, error alert, identify external codes, identify double attendance attempt.",
      role: "Frontend", 
      time: "2 weeks",
      devNum: "4 Developers",
      platform: "Responsive",
      website: "https://marinaestefania.github.io/open-house-organa/#/",
      github: "https://github.com/MarinaEstefania/open-house-organa/tree/master/organa"
    },
    {
      id: "burger",
      name: "BURGER QUEEN",
      img: bq,
      stack: "React, Firebase, Javascrip, HTML5, CSS3, Bootstrap, Libraries.",
      description:"It's an interface for a restaurant that allows the user to take orders and send them to the kitchen in real time.",
      features: "Add and remove items, get the total account, add the date and the waiters name. On the kitchen side: See and delete orders.",
      role: "Frontend",
      time: "3 weeks",
      devNum: "1 Developer",
      platform: "Tablet",
      website:
        "https://marinaestefania.github.io/gdl002-burger-queen/#/tomar-orden",
      github: "https://github.com/MarinaEstefania/gdl002-burger-queen"
    },
    {
      id: "pokegoal",
      name: "POKEGOAL",
      img: pokegoal,
      stack: "Pure Javascript, HTML5, CSS3",
      description: "It's a Web App aimed at Pokemon GO players interested in improving their competitive level. The interface shows all the information you have of the selected pokemon.",
      features: "Sort, Filter, Show information of each pokemon, Show graphs.",
      role: "Frontend",
      time: "2 weeks",
      devNum: "2 Developers",
      platform: "Responsive",
      website: "https://marinaestefania.github.io/GDL002-data-lovers/src/",
      github: "https://github.com/MarinaEstefania/GDL002-data-lovers"
    },
    {
      id: "mdlinks",
      name: ".MD LINKS",
      img: mdlinks,
      stack: "NodeJS, Javascript, Libraries: node-fetch, process, chalk.",
      description: "It's a NPM package used to review .md files and report some stadistics.",
      features: "Returns an object with the links found and its descriptive text, validates the status of the links, returns the total number of links found and returns the total number of links found, the total number of links running and the total number of broken links.",
      role: "Backend",
      time: "3 weeks",
      devNum: "1 Developer",
      platform: "npm Package",
      website: "https://github.com/MarinaEstefania/GDL002-md-links",
      github: "https://github.com/MarinaEstefania/GDL002-md-links"
    }
  ]
};

export default data;

const dataSpanish = {
  projects:[
    {
      id: "organa",
      name: "ORGANA",
      img: organa,
      stack: "React, Firebase, Javascript, CSS3, HTML5, Bootstrap, Libraries: QrReader, Moments",
      description: "Aplicación Web que permite llevar el registro de asistencias mediante la lectura de códigos QR. Actualmente se utiliza en el aula de Laboratoria.",
      features: "Registro de Asistencia, alerta de registro exitoso, alerta de error, identifica códigos externos, identifica doble asistencia ",
      role: "Frontend",
      platform: "Resoponsive",
      website: "https://shareazc.github.io/open-house-organa/#/",
      github: "https://github.com/MarinaEstefania/open-house-organa/tree/master/organa"
    },
    {
      id: "burger",
      name: "BURGER QUEEN",
      img: bq,
      stack: "React, Firebase, Javascrip, HTML5, CSS3, Bootstrap, Libraries.",
      description:"Es una interfaz para que un restaurante pueda tomar pedidos usando una tablet y enviarlos a cocina en tiempo real",
      features: "React, Firebase, Javascript, CSS3, HTML5, Bootstrap",
      role: "Frontend",
      platform: "Tablet",
      website:
        "https://marinaestefania.github.io/gdl002-burger-queen/#/tomar-orden",
      github: "https://github.com/MarinaEstefania/gdl002-burger-queen"
    },
    {
      id: "pokegoal",
      name: "POKEGOAL",
      img: pokegoal,
      stack: "Pure Javascript, Google Charts, HTML5, CSS3",
      description: "La interfaz muestra Toda la información que se tiene del pokemon seleccionado",
      features: "Ordenar, filtrar, muestra información de cada pokemon, muestra gráficas",
      role: "Frontend",
      platform: "Phone, Desktop",
      website: "https://marinaestefania.github.io/GDL002-data-lovers/src/",
      github: "https://github.com/MarinaEstefania/GDL002-data-lovers"
    },
    {
      id: "mdlinks",
      name: ".md LINKS",
      img: mdlinks,
      stack: "NodeJS, Javascript, Libraries: node-fetch, process, chalk",
      description: "Es una librería usada para revisar archivos .md y reportar algunas estadisticas",
      features: "1. Regresa un objeto con los links encontrados y su texto descriptivo. 2. Valida el estatus de los links, 3. Retorna el numero total de links encontrados, 4. Retorna el número total de links encontrados, el númeto total de links funcionando y el número total de links rotos.",
      role: "Backend",
      platform: "Command Line",
      website: "https://github.com/MarinaEstefania/GDL002-md-links",
      github: "https://github.com/MarinaEstefania/GDL002-md-links"
    }
  ]
};
