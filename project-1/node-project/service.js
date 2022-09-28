
var day,month,year;

exports.dateFun=()=>{
    init();
    return `${day} ${month} ${year}`;
}

const getDay=(date)=>{
    day = date.toLocaleDateString('en-us',{day:'2-digit'});
}

const getMonth=(date)=>{
    month = date.toLocaleDateString('en-us',{month:'short'});
}

const getYear=(date)=>{
    year = date.getFullYear();
}

const init=()=>{

    const date=new Date();
    getDay(date);
    getMonth(date);
    getYear(date);
}