//main.js

const webpage = document.querySelector("#webpage");
const movie = {
    title:"GLASS ONION: A KNIVES OUT MYSTERY",
    actors:["Daniel Craig", "Edward Norton", "Dave Bautista", "Kate Hudson"],
    director:"Rian Johnson",
    audienceScore: 93,
    link:"https://www.rottentomatoes.com/m/glass_onion_a_knives_out_mystery"
};

const h1 = document.createElement("h1");
const span = document.createElement("span");
const h2 = document.createElement("h2");
const p = document.createElement("p");
const a = document.createElement("a");

const h1Text = document.createTextNode(movie.title);
const spanText = document.createTextNode(movie.audienceScore);
const h2Text = document.createTextNode("Actors");
const ul = document.createElement("ul");
for(let i = 0; i < movie.actors.length; i++){
    const li = document.createElement("li");
    const liText = document.createTextNode(movie.actors[i]);

    li.appendChild(liText);
    ul.appendChild(li);
}
const pText = document.createTextNode("Directed by: " + movie.director);
const aText = document.createTextNode(movie.link);

h1.appendChild(h1Text);
span.appendChild(spanText);
h2.appendChild(h2Text);
p.appendChild(pText);
a.appendChild(aText);

webpage.appendChild(h1);
webpage.appendChild(span);
webpage.appendChild(h2);
webpage.appendChild(ul);
webpage.appendChild(p);
webpage.appendChild(a);

a.setAttribute("href", "https://www.rottentomatoes.com/m/glass_onion_a_knives_out_mystery");
a.setAttribute("target", "_blank");