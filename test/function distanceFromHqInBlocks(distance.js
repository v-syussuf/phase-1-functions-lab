function distanceFromHqInBlocks(distance){
    return(Math.abs(distance - 42));
}
const result = distanceFromHqInBlocks(43);
console.log(result);
const dist = distanceFromHqInBlocks(50);
console.log(dist);
const range = distanceFromHqInBlocks(34);
console.log(range);

function distanceFromHqInFeet(feet) {
    const block = distanceFromHqInBlocks(feet);
    const results = block * 264;
    return results;
}
const results43 = distanceFromHqInFeet(43);
console.log(results43);
const results50 = distanceFromHqInFeet(50);
console.log(results50);
const results34 = distanceFromHqInFeet(34);
console.log(results34);

function distanceTravelledInFeet(start, destination){
    const travel = (Math.abs(destination - start)*264);
    return travel;
}
const travel43 = distanceTravelledInFeet(43, 48);
console.log(travel43);
const travel50 = distanceTravelledInFeet(50, 60);
console.log(travel50);
const travel34 = distanceTravelledInFeet(34, 28);
console.log(travel34);

function calculatesFarePrice(start, destination){
    const feetlength = distanceTravelledInFeet(start, destination);
    if(feetlength <= 400){
       return 0;
    }
    else if(feetlength > 400 || feetlength <= 2000){
        return (feetlength - 400) * 0.02;
    }
    else if(feetlength > 2000 && feetlength <= 2500){
        return 25;
    }
    else {
        return "Cannot travel that far";
    }   
}
const feetlength43 = (calculatesFarePrice(43, 44));
console.log( feetlength43);
const feetlength34 = (calculatesFarePrice(34, 32));
console.log( feetlength34);
const feetlength50 = (calculatesFarePrice(50, 58));
console.log( feetlength50);
const feetlength24 = (calculatesFarePrice(34, 24));
console.log( feetlength24);




