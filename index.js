var index = 0;

function changeQuotes(){
    var quotes = ['"rose by any other name would smell as sweet."','"All that glitters is not gold","All the worlds a stage, and all the men and women merely players."','"Ask, and it shall be given you; seek, and you shall find."','"Eighty percent of success is showing up."'];
    document.querySelector('#quotes').innerText = quotes[index++];
    if(index>quotes.length-1){
        index = 0;
    }
    document.querySelector('body').style.backgroundColor = 'blue'
    
}