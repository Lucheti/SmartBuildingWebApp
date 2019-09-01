export const toggleApartmentList = evt =>{
    evt.setState(prev => {
        return{
            showApartments: !prev.showApartments
            }
    })
}

