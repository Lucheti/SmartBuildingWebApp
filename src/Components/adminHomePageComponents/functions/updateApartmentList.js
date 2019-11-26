
export const updateApartmentList = evt =>{
    fetch(BASE_URL + "/admins/consorce/"+evt.state.consorce.id+"/apartment",{
        method: 'GET',
        headers: {
        }
    })
        .then(res => res.json())
        .then(apartments => {
            evt.setState({apartments: apartments})
        })
}
