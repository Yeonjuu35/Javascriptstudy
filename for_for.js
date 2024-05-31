let dayoutput = "";



for(let weeknm = 0; weeknm < 4; weeknm++){

    dayoutput += `\n`
    
    for(let daynm = 1; daynm < 8; daynm++){
        dayoutput += `${daynm}\t`;
    }
}


console.log(dayoutput)