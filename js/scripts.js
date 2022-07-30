const url='https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json';

async function countBoxes (x) {  
    let n =  x.split(',');
    let k =  x.split(',').map(element => { return Number(element); });
    let count = 0 ; 
    k.forEach(el => { count+=el  })  ;  
    if ( count%10 == 0 ) return count/10 ;
      else return   Math.ceil(count/10 );   
} 

async function storeData(e) {
    const name=e;
    await fetch(url).then((res) => {
        if (res.ok) {
        return res.json();
}else throw new Error("user doesn't exist");

}).then((data)=> {
    data.forEach(element => {
        if (name == element.name) { 
        document.getElementById('companyName').innerText=element.name;
        document.getElementById('contact').innerText=element.email;
        document.getElementById('input').value=element.boxes;
        const myElement = document.getElementById('input');
        countBoxes(element.boxes).then((res)=> document.getElementById('output').innerText=res)  ;
        myElement.addEventListener("input" , ()=>   countBoxes(document.getElementById('input').value)
        .then((res)=> document.getElementById('output').innerText=res));
    }
    });
})
}