// let iid = document.getElementById("ID");
// let iname = document.getElementById("Name");
// let irate = document.getElementById("Rate");
let count = 1;
function change(event) {
    let x = event.target.className[13];
    let iid = document.getElementById("ID");
    let iname = document.getElementById("Name");
    let irate = document.getElementById("Rate");
    let oid = document.getElementById("ID" + x);
    let oname = document.getElementById("Name" + x);
    let orate = document.getElementById("Rate" + x);
    oid.innerHTML = iid.value;
    oname.innerHTML = iname.value;
    orate.innerHTML = irate.value;
}
function add(x) {
    let iid = document.getElementById("ID");
    let iname = document.getElementById("Name");
    let irate = document.getElementById("Rate");
    ++count;
    let Newr = document.createElement("div");
    Newr.setAttribute("class", "row");
    Newr.setAttribute("id", "row" + (count))
    let col1 = document.createElement("div");
    let col2 = document.createElement("div");
    let col3 = document.createElement("div");
    let col4 = document.createElement("div");
    let col5 = document.createElement("div");
    let editb = document.createElement("button");
    let deleteb = document.createElement("button");
    col1.setAttribute("class", "col");
    col1.setAttribute("id", "ID" + (count));
    col1.innerHTML = iid.value;
    col2.setAttribute("class", "col");
    col2.setAttribute("id", "Name" + (count));
    col2.innerHTML = iname.value;
    col3.setAttribute("class", "col");
    col3.setAttribute("id", "Rate" + (count));
    col3.innerHTML = irate.value;
    col4.setAttribute("class", "col");
    console.log("run");
    editb.addEventListener("click", change);
    console.log(count);
    editb.setAttribute("class", "btn btn-info" + " " + count);
    console.log("run");
    editb.innerHTML = "Edit";
    col4.appendChild(editb);
    col5.setAttribute("class", "col");
    deleteb.addEventListener("click", Delete);
    deleteb.setAttribute("class", "btn btn-danger" + " " + count);
    deleteb.innerHTML = "Delete";
    col5.appendChild(deleteb);
    Newr.appendChild(col1);
    Newr.appendChild(col2);
    Newr.appendChild(col3);
    Newr.appendChild(col4);
    Newr.appendChild(col5);
    document.body.appendChild(Newr)
}
function Delete(event) {
    --count;
    console.log(event.target.className);
    let deli = document.getElementById("row" + event.target.className[15]);
    deli.remove();
}