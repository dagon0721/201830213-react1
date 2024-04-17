import React, { useState, useEffect } from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];
var timer;
// const NotificationList = () => {
//     const [notifications, setNotifications] = useState([]);

//     useEffect(() => {
//         let timer;
//         timer = setInterval(() => {
//             if (notifications.length < reservedNotifications.length) {
//                 const index = notifications.length;
//                 setNotifications(prevNotifications => [...prevNotifications, reservedNotifications[index]]);
//             } else {
//                 setNotifications([]);
//                 clearInterval(timer);
//             }
//         }, 1000);
        
//         return () => {
//             if (timer) {
//                 clearInterval(timer);
//             }
//         };
//     }, [notifications]);

//     return (
//         <div>
//             {notifications.map(notification => (
//                 <Notification
//                     key={notification.id}
//                     id={notification.id}
//                     message={notification.message}
//                 />
//             ))}
//         </div>
//     );
// };


class NotificationList extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            notifications: [],
        }; 
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
         //출력후 사라지지 않게 하려면 아래 3줄 주석처리
                // this.setState({
                //     notifications: [],
                // });
                // clearInterval(timer);
            }
        }, 1000);
    }

    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification
                            //하나를 전달하면 상관없지만 중복되는게 있으면 안되기에 key props를 같이 전달해줘야 유일한 값임을 알수 있음
                            key={notification.id}
                            id={notification.id}
                            message={notification.message}
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;
