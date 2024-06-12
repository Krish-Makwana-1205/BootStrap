//localStorage['0'] = '0';
function render(){
    //localStorage.clear();
    let x;
    for(let i = 1; i <= localStorage.length; ++i){
        x = JSON.parse(localStorage.getItem(i+1));
        if(x != null){
            make(x); 
        }
    }
    //localStorage.setItem('0','0');
}
function make(x){
    console.log("loj");
    console.log(x);
    console.log("loj");
    let newr = document.createElement('div');
    newr.setAttribute('class','row');
    let col1 = document.createElement('div');
    col1.setAttribute('class','col');
    col1.innerHTML = x.id;
    let col2 = document.createElement('div');
    col2.setAttribute('class','col');
    col2.innerHTML = x.name;
    let col3 = document.createElement('div');
    col3.setAttribute('class','col');
    col3.innerHTML = x.rate;
    let col4 = document.createElement('div');
    col4.setAttribute('class','col');
    let editb = document.createElement('button');
    editb.innerHTML = 'Edit';
    editb.setAttribute('class','btn btn-info');
    col4.appendChild(editb);
    let col5 = document.createElement('div');
    col5.setAttribute('class','col');
    let deleteb = document.createElement('button');
    deleteb.innerHTML = 'Delete';
    deleteb.setAttribute('class','btn btn-danger');
    deleteb.setAttribute('onclick', 'Delete(event)')
    col5.appendChild(deleteb);
    newr.appendChild(col1);
    newr.appendChild(col2);
    newr.appendChild(col3);
    newr.appendChild(col4);
    newr.appendChild(col5);
    let ref = document.getElementById('ref');
    document.body.insertBefore(newr, ref);
}
function add(){
    let id = document.getElementById("ID");
    let name = document.getElementById("name");
    let rate = document.getElementById("rate");
    //console.log(name);
    console.log(localStorage.length);
    let obj = {
        id : id.value,
        name : name.value,
        rate : rate.value
    }
    let ins = JSON.stringify(obj);
    console.log(ins);
    localStorage.setItem(localStorage.length+1, ins);
    console.log(localStorage.length);
    console.log(localStorage);
    window.location.replace("bootstrap.html");
}
function Delete(event) {
    //localStorage.clear();
    for(let i = 1; i <= localStorage.length-1; ++i){
        x = JSON.parse(localStorage.getItem(i+1));
        if(x.id == event.target.parentElement.parentElement.childNodes[0].innerHTML){
            localStorage.removeItem(i+1);
        }
    }
    event.target.parentElement.parentElement.remove();
}