import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 0,
        message: "message0"
    },
    {   
        id: 1,
        message: "message1"
    },
    {
        id: 2,
        message: "message2"
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notifications: []
        };
    }

    componentDidMount(){
        const {notifications} = this.state;//map this.state var
        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length){
                notifications.push(reservedNotifications[notifications.length]);
                this.setState({
                    notifications: notifications
                });
            }
            else{
                this.setState({
                    notifications: []
                })
                clearInterval(timer);//Stop setInterval
            }
        }, 1000);
    }

    render(){
        return(
            <div>
                {this.state.notifications.map((notification) => {
                    return(<Notification 
                            key={notification.id}
                            id={notification.id}
                            message={notification.message} />)
                })}
            </div>
        );
    }
}

export default NotificationList;