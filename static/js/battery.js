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
    const companyEdit = document.getElementById("companypopup").value;
    const uuidEdit = document.getElementById("uuidpopup").value;
    const passwordEdit = document.getElementById("passwordpopup").value;
    const macidEdit = document.getElementById('macidpopup').value;
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
        .then(response => response.json()).then(()=>{
            fetch('http://localhost:3001/UserData').then((data) =>{
                console.log("data",data)
                return data.json();
            })
        })
    }
}
let deleteuser = (id) =>{
    fetch(`http://localhost:3001/UserData/${id}`, { method: 'DELETE' }).then(()=>{
        fetch('http://localhost:3001/UserData').then((data) =>{
            console.log("data",data)
            return data.json();
        })
    })
}