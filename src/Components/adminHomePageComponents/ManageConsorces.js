import React, {Component} from "react";
import AddConsorceButton from "./addConsorceButton";

export class ManageConsorces extends Component {

    doNothing = () => {
        console.log("im bored")
    }

    getConsorceInfo = e =>{
        e.target.onclick = undefined;
        fetch("http://localhost:8080/admins/"+ window.sessionStorage.id+"/consorce/"+e.target.id+"/apartment",{
            method: 'GET',
            headers: {
                'Authorization': "Bearer " + window.sessionStorage.token
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    const consorce = document.getElementById("consorce"+e.target.id);//li with the consorce name
                    for (const element of data) {
                        //create containers
                        const apartment = document.createElement("LI")
                        const apartmentInfo = document.createElement('H4')
                        //get data into containers
                        apartmentInfo.innerHTML = element.apartmentCode + "        Propietario: " + element.owner + "        Inquilino: " + element.tenant
                        //set onclicks
                        //append childs
                        apartment.appendChild(apartmentInfo)
                        //insert into element
                        consorce.appendChild(apartment)
                    }
                }else{
                    const apartment = document.createElement("LI")
                    const apartmentInfo = document.createElement('H4')
                    apartmentInfo.innerHTML = "NO APARTMENTS FOUND"
                    apartment.appendChild(apartmentInfo)
                    e.target.appendChild(apartment)
                }
            })
    }

    updateConsorcesList = () => {
        setTimeout(() => {
            this.emptyConsorcesList();
            this.fillConsorcesList();
        }, 100);
    }

    emptyConsorcesList = () =>{
        const consorceList = document.getElementById("consorces");
        while (consorceList.firstChild)
            consorceList.removeChild(consorceList.firstChild)
    }

    fillConsorcesList = () =>{
        console.log("geting consorces");
        fetch("http://localhost:8080/admins/"+ window.sessionStorage.id +"/consorce", {
            method: 'GET',
            headers: {
                'Authorization': "Bearer " + window.sessionStorage.token
            }
        })
            .then(res => res.json())
            .then(consorces => {
                const consorceList = document.getElementById("consorces");
                for (const consorce of consorces) {

                    const consorceContainer = document.createElement("div");

                    const consorceInfo = document.createElement("H4");
                    consorceInfo.innerHTML = consorce.name;

                    const consorceListItem = document.createElement("UL");
                    consorceListItem.id = "consorce"+consorce.id;
                    consorceListItem.name = consorce.name;

                    consorceContainer.appendChild(this.createDeployButton(consorce));
                    consorceContainer.appendChild(consorceInfo)
                    consorceContainer.appendChild(consorceListItem)

                    consorceList.appendChild(consorceContainer)
                }
            })
    }

    createDeployButton = consorce => {
        const deployButton = document.createElement("input");
        deployButton.type = "checkbox"
        deployButton.innerHTML = "more info about "+ consorce.name;
        // console.log(consorce.id)
       deployButton.id = consorce.id;
       //  deployButton.setAttribute("consorce-id", id);
        deployButton.onclick = this.getConsorceInfo;
        return deployButton;
    }

    componentWillMount() {
        this.fillConsorcesList()
    }


    render() {
        return (

            <div className="no-margin no-padding full-size">
                <ul id="consorces" className="consorce-list"/>
                <AddConsorceButton updateConsorcesList={this.updateConsorcesList}/>
            </div>

        )
    }

}