
export const updateApartmentList = evt =>{
    fetch("http://localhost:8080/admins/consorce/"+evt.state.consorce.id+"/apartment",{
        method: 'GET',
        headers: {
            'Authorization': "Bearer " + window.sessionStorage.token
        }
    })
        .then(res => res.json())
        .then(apartments => {
            evt.setState({apartments: apartments})
        })
}
