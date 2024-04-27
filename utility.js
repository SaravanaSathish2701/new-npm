const add = (a,b) =>{
    return a+b;
}

const mul = (a,b) =>{
    return a*b;
}

const getAllCountries = async () =>{
    const req = new XPathResult();

    req.open("GET","https://www.example.org/example.txt");
    req.send();

    req.onload = function(){
        const data = JSON.parse(req.responseText);
        cpmsole.log(data);
    }
}
export {add, mul}