import React, {Component} from 'react';
import UpdateNotificationStateButton from "./UpdateNotificationStateButton";

export default class Notification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notification: props.notification,
            showDetails: false,
        }
    }

    toggleShowDetails = e =>{
        e.preventDefault();
        this.setState(prev => {return {showDetails: !prev.showDetails}})
    };

    render() {

        const {notification, showDetails} = this.state;
        const {apartment, category, description} = notification;
        const {consorce, apartmentCode,tenant, owner} = apartment;
        const {important} = category;
        const {refresh} = this.props;

        return (
            <li className={notification.state.status + (notification.category.important? " important" : "")}>
                <div>
                <h4>{consorce.name}</h4>
                <h4>{apartmentCode}</h4>
                <p id="category">{category.name}</p>
                    <div className="notification-buttons">
                        <div>
                            {window.sessionStorage.role === "admin" && <UpdateNotificationStateButton  notification={notification} refresh={refresh}/>}
                            {window.sessionStorage.role === "admin" && <input type="submit" value={showDetails ? "hide details" : "show details"} onClick={this.toggleShowDetails}/>}
                        </div>
                        {window.sessionStorage.role === "admin" && important && <div className="important-icon"><i className="fas fa-exclamation-triangle fa-2x"/></div>}
                    </div>
                </div>
                    {showDetails &&
                    <div className={"notification-details"}>
                        <p><span>{"Owner: "}</span>{owner.name}</p>

                        {tenant !== null && <p><span>{"Tennant: "}</span>{tenant.name}</p>}
                        <p><span>{"Email: "}</span>{owner.email}</p>

                        <p><span>{"Description: "}</span>{description}</p>

                    </div>

                        }
            </li>
        )
    }
}
