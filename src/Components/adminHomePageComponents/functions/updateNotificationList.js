

export const updateNotificationList = evt => {
    fetch("http://localhost:8080/notifications/" + window.sessionStorage.id + "/" + window.sessionStorage.role,{
        method: 'GET',
        headers: {

        }
    }).then(res => {
        if (res.ok) {
           return res.json()
        }})
        .then(data=> {
            evt.setState({notifications: [] })
            evt.setState({notifications: data})
        })
        // .catch(e => window.open("/", "_self"))

};
