var BatteryStat = function (StatusId) {
    if (StatusId == "BatteriesUsedToday") {
        document.getElementById(StatusId).innerHTML = "15";
    }
    else if (StatusId == "BatteriesDispatched") {
        document.getElementById(StatusId).innerHTML = "15";
    }
    else if (StatusId == "Batteries Power") {
        document.getElementById(StatusId).innerHTML = "800amps";
    }
}

let editUser = (id) =>{
    console.log("companyid",id);
    const companyEdit = document.getElementById("companypopup").value;
    const uuidEdit = document.getElementById("uuidpopup").value;
    const passwordEdit = document.getElementById("passwordpopup").value;
    const macidEdit = document.getElementById('macidpopup').value;
    //console.log("companyEdit",companyEdit,uuidEdit,passwordEdit,macidEdit)
    if(companyEdit && uuidEdit && passwordEdit && macidEdit){
        fetch(`http://localhost:3001/UserData/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                company: companyEdit,
                uuid: uuidEdit,
                password:passwordEdit,
                macid:macidEdit
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(data =>{ 
            console.log("companydata",data);
        });
    }
}
let deleteuser = (id) =>{
    console.log("companyDelete",id);
    fetch(`http://localhost:3001/UserData/${id}`, { method: 'DELETE' })
}