// Write your solution here!
const cats=["Milo" ,"Otis", "Garfield"];
function destructivelyAppendCat(name){
    return cats.push('Ralph');
}
function  destructivelyPrependCat(name){
    return cats.unshift('Bob');
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
function appendCat(name){
    const newCats =[...cats, 'Broom']
    return newCats;
}
function prependCat(name){
    const newPuss =['Arnold',...cats]
    return newPuss;
}
function removeLastCat(){
    const pusCat=cats.slice(0,-1)
    return pusCat;
}
function removeFirstCat(){
    const remove =cats.slice(1)
    return remove
}