
export const updateApartmentList = evt =>{
    fetch("http://192.168.0.185:8080/admins/consorce/"+evt.state.consorce.id+"/apartment",{
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
