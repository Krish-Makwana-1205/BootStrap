// let iid = document.getElementById("ID");
// let iname = document.getElementById("Name");
// let irate = document.getElementById("Rate");
let arr = [];
let count = 1;
let obj = {
    docid : document.getElementById("row1")
};
arr.push(obj);
function change(event) {
    let iid = document.getElementById("ID");
    let iname = document.getElementById("Name");
    let irate = document.getElementById("Rate");
    for(let i = 0; i < count; ++i){
        if(event.target.parentElement.parentElement == arr[i].docid){
            console.log(arr[i].docid.childNodes[0]);
            arr[i].docid.childNodes[0].innerHTML = iid.value;
            arr[i].docid.childNodes[1].innerHTML = iname.value;
            arr[i].docid.childNodes[2].innerHTML = irate.value;
            break;
        }
    }
}
function add(x) {
    let iid = document.getElementById("ID");
    let iname = document.getElementById("Name");
    let irate = document.getElementById("Rate");
    ++count;
    let dets = {};
    Newr = document.createElement("div");
    dets.docid=Newr;
    arr.push(dets);
    Newr.setAttribute("class", "row");
    Newr.setAttribute("id", "row");
    let col1 = document.createElement("div");
    let col2 = document.createElement("div");
    let col3 = document.createElement("div");
    let col4 = document.createElement("div");
    let col5 = document.createElement("div");
    let editb = document.createElement("button");
    let deleteb = document.createElement("button");
    col1.setAttribute("class", "col");
    col1.innerHTML = iid.value;
    col2.setAttribute("class", "col");
    col2.innerHTML = iname.value;
    col3.setAttribute("class", "col");
    col3.innerHTML = irate.value;
    col4.setAttribute("class", "col");
    editb.addEventListener("click", change);
    console.log(count);
    editb.setAttribute("class", "btn btn-info");
    editb.innerHTML = "Edit";
    col4.appendChild(editb);
    col5.setAttribute("class", "col");
    deleteb.addEventListener("click", Delete);
    deleteb.setAttribute("class", "btn btn-danger");
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
    event.target.parentElement.parentElement.remove();
    for(let i = 0; i < count; ++i){
        if(event.target.parentElement.parentElement == arr[i].docid){
            arr.splice(count, count);
            break;
        }
    }
    --count;
}