const type1=(word )=> {
    if(typeof word ==='number'){
        return word*3;
    }
    else if(typeof word ==='string'){
        return "RRRA!";
    }
    else {
        return"data unchanged";
    }   
};
type1 (3);
console.log(type1 (3));