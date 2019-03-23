import { paths } from './paths.js'

function addEdge(map, from, to){
    if (map[from] === undefined){
        map[from] = [to];
    }else {
        map[from].push(to);
}
};

function buildGraph(){
    let map = Object.create(null)
    for(let i=0; i < paths.length; i++) {
        let [from,to] = paths[i].split('-')
        addEdge(map, from, to);
        addEdge(map, to, from);
    };
    return map 
};

export let map = buildGraph();
export let places = Object.keys(map);
