var GetAllUsers = function () {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://165.232.181.217:8000/GetAllUsersAsJson', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const jsondata = JSON.parse(xhr.responseText);
            // for key value in json console key value
            Object.keys(jsondata).forEach(function (key) {
                document.getElementById('userlist').appendChild(GetTemplate(key));
                document.getElementsByClassName("uuidvalue")[key - 1].innerHTML = jsondata[key].uuid;
                document.getElementsByClassName("companyname")[key - 1].innerHTML = jsondata[key].company;
                document.getElementsByClassName("macidvalues")[key - 1].innerHTML = jsondata[key].macid;
            });
        }
    }
}

var GetTemplate = function (id) {
    let template = document.getElementsByTagName('template')[0];
    let clone = template.content.cloneNode(true);
    // set id of li in clone 
    clone.querySelector('li').id = 'user' + id;
    return clone;
}
var deleteuser = function (node) {
    let parent = node.parentNode.parentNode;
    let uuid = parent.getElementsByClassName("uuidvalue")[0].innerHTML;
    let company = parent.getElementsByClassName("companyname")[0].innerHTML;
    console.log(uuid, company);
    let xhr = new XMLHttpRequest();
    const baseurl = "http://165.232.181.217:8000/DeleteUser"
    const companyname = "company=" + company
    const uuidvalue = "&uuid=" + uuid
    xhrurl = baseurl + "?" + companyname + uuidvalue
    xhr.open('GET', xhrurl, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const jsondata = JSON.parse(xhr.responseText);
            alert(jsondata.message);
            location.reload();
        }
    }

}
var viewgraph = function (node) {
    let id=node.id
    console.log(id);
}

var GetAllCompanies = function () {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://165.232.181.217:8000/GetAllCompanies')
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const jsondata = JSON.parse(xhr.responseText);
            let companylist = document.getElementById('companylist')
            let selecter = document.getElementsByTagName('select')[0]
            for (x in jsondata) {
                console.log(jsondata[x]);
                let p = document.createElement('p');
                p.classList.add("inline-block", "bg-blue-700", "border", "text-white", "rounded-md", "px-6", "py-2", "m-4");
                p.innerHTML = jsondata[x];
                companylist.appendChild(p);
                let option = document.createElement('option');
                option.value = jsondata[x];
                option.innerHTML = jsondata[x];
                selecter.appendChild(option);
            }
        }
    }
}
GetAllUsers();
GetAllCompanies();