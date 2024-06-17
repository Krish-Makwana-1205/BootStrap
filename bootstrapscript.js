//localStorage['0'] = '0';
let count = 1;
document.onload = render();
function render() {
    let mynodelist = document.querySelectorAll("div");
    console.log(mynodelist);
    if (document.title != "Bootstrap demo") {
        return;
    }
    console.log(document.title);
    //localStorage.clear();
    let x;
    console.log(localStorage.length);
    for (let i = count; i <= localStorage.length; ++i) {
        x = JSON.parse(localStorage.getItem(i));
        console.log(x);
        if (x != null){
            make(x);
        }
        ++count;
    }
    //localStorage.setItem('0','0');
}
function make(x) {
    console.log("loj");
    console.log(x);
    console.log("loj");
    let newr = document.createElement('div');
    newr.setAttribute('class', 'row');
    let col1 = document.createElement('div');
    col1.setAttribute('class', 'col');
    col1.innerHTML = x.id;
    let col2 = document.createElement('div');
    col2.setAttribute('class', 'col');
    col2.innerHTML = x.name;
    let col3 = document.createElement('div');
    col3.setAttribute('class', 'col');
    col3.innerHTML = x.rate;
    let col4 = document.createElement('div');
    col4.setAttribute('class', 'col');
    let editb = document.createElement('button');
    editb.innerHTML = 'Edit';
    editb.setAttribute('class', 'btn btn-info');
    editb.setAttribute('onclick', 'change(event)');
    col4.appendChild(editb);
    let col5 = document.createElement('div');
    col5.setAttribute('class', 'col');
    let deleteb = document.createElement('button');
    deleteb.innerHTML = 'Delete';
    deleteb.setAttribute('class', 'btn btn-danger');
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
function add() {
    console.log(document.title);
    let id = document.getElementById("ID");
    let name = document.getElementById("name");
    let rate = document.getElementById("rate");
    //console.log(name);
    console.log(localStorage.length);
    let obj = {
        id: id.value,
        name: name.value,
        rate: rate.value
    }
    let ins = JSON.stringify(obj);
    console.log(ins);
    localStorage.setItem(localStorage.length + 1, ins);
    console.log(localStorage.length);
    console.log(localStorage);
    window.location.replace("bootstrap.html");
}
let toggle = false;
let prev = null;
let preid = null;
function same(x){
    let i = document.getElementById('i');
    let n = document.getElementById('n');
    let r = document.getElementById('r');
    let ti = i.value;
    let tn = n.value;
    let tr = r.value;
    i.remove();
    n.remove();
    r.remove();
    x.parentElement.parentElement.childNodes[0].innerHTML = ti;
    x.parentElement.parentElement.childNodes[1].innerHTML = tn;
    x.parentElement.parentElement.childNodes[2].innerHTML = tr;
}
function change(event) {
    if (toggle && prev == event.target) {
        let i = document.getElementById('i');
        let n = document.getElementById('n');
        let r = document.getElementById('r');
        let obj = {
            id : i.value,
            name : n.value,
            rate : r.value
        }
        event.target.parentElement.parentElement.childNodes[0].innerHTML = i.value;
        event.target.parentElement.parentElement.childNodes[1].innerHTML = n.value;
        event.target.parentElement.parentElement.childNodes[2].innerHTML = r.value;
        i.remove();
        n.remove();
        r.remove();
        toggle = false;
        for(let j = 1; j <= localStorage.length; ++j){
            x = JSON.parse(localStorage.getItem(j));
            console.log(x);
            console.log("Runnnr");
            console.log(preid);
            if(x.id == preid){
                let z = JSON.stringify(obj);
                localStorage.setItem(j, z);
            }
        }
    }
    else {
        if(toggle){
            same(prev);
        }
        let ipi = document.createElement('input');
        ipi.setAttribute('id', 'i');
        let ipn = document.createElement('input');
        ipn.setAttribute('id', 'n');
        let ipr = document.createElement('input');
        ipr.setAttribute('id', 'r');
        ipi.value = event.target.parentElement.parentElement.childNodes[0].innerHTML;
        preid = ipi.value;
        console.log(preid);
        event.target.parentElement.parentElement.childNodes[0].innerHTML = "";
        event.target.parentElement.parentElement.childNodes[0].appendChild(ipi);
        ipn.value = event.target.parentElement.parentElement.childNodes[1].innerHTML;
        event.target.parentElement.parentElement.childNodes[1].innerHTML = "";
        event.target.parentElement.parentElement.childNodes[1].appendChild(ipn);
        ipr.value = event.target.parentElement.parentElement.childNodes[2].innerHTML;
        event.target.parentElement.parentElement.childNodes[2].innerHTML = "";
        event.target.parentElement.parentElement.childNodes[2].appendChild(ipr);
        toggle = true;
        prev = event.target;
    }

}
function Delete(event) {
    //localStorage.clear();
    for (let i = 1; i <= localStorage.length; ++i) {
        x = JSON.parse(localStorage.getItem(i));
        console.log(x.id);
        if (x.id == event.target.parentElement.parentElement.childNodes[0].innerHTML) {
            localStorage.removeItem(i);
            console.log("I run");
            console.log(i + 1);
            console.log(localStorage.length + 1);
            for (let j = i + 1; j <= localStorage.length + 1; ++j) {
                localStorage.setItem(j - 1, localStorage.getItem(j));
                console.log(JSON.parse(localStorage.getItem(j - 1)))
                localStorage.removeItem(j);
            }
        }
    }
    event.target.parentElement.parentElement.remove();
}