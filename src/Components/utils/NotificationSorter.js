
export const sortNotifications = (type, notificationList) =>{
  switch (type.toLowerCase()) {
    case "category": {
      return notificationList.sort((a, b) => {
        if (a.category.name > b.category.name) {
          return 1;
        }
        if (a.category.name < b.category.name) {
          return -1;
        }
        return 0;});
    }
    case "consorce": {
      return notificationList.sort((a, b) => {
        if (a.apartment.consorce.name > b.apartment.consorce.name) {
          return 1;
        }
        if (a.apartment.consorce.name < b.apartment.consorce.name) {
          return -1;
        }
        return 0;});
    }
    case "pending": {
      return sortNotificationsByState(1,notificationList);
    }
    case "seen": {
      return sortNotificationsByState(2,notificationList);
    }
    case "working": {
      return sortNotificationsByState(3,notificationList);
      break;
    }
    case "done": {
      return sortNotificationsByState(4,notificationList);
      break;
    }
    case "importance": {
      return notificationList.sort((a, b) => {
        if (a.category.important && !b.category.important) {
          return -1;
        }
        if (b.category.important && !a.category.important) {
          return 1;
        }
        return 0;});
    }
    case "default": {
      return []
    }
  }
};
const sortNotificationsByState = (stateId,notificationsList) =>{
  return notificationsList.sort((a, b) => {
    if (a.state.id === stateId) {
      return -1;
    }
    if (b.state.id === stateId){
      return 1;
    }
    return 0;});
}