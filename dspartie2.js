let regions = [];
for (let i = 0; i < ville.length; i++) {
    if (ville[i].population > 1000000) {
        regions.push(ville[i]);
    }
}
console.log(regions);

// On utilise filtrer 

let regions = ville.filter(function(h) {
    return h.population > 3000000;
});
console.log(regions);

// On peut reduire encore plus avec la flèche en ES6

let regions = ville.filter(v => v.population > 3000000);
console.log(regions);