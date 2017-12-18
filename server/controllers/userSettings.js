const db = require('../../db/db-config');
const Promise = require('bluebird');

// Shopping List Handlers

exports.createSettings = (username, data = []) => {
  console.log('Hit createSettings')
>>>>>>> added first version of push notification
  return new Promise((resolve, reject) => {
    db.collection('userSettings').doc(username).set({
      emailNotificationSettings: data,
    })
    .then(() => {
      resolve("We updated your changes", username);
    })
    .catch(error => {
      reject("We couldn't update your changes please try again later", error);
    });
  });
}



exports.getSettings = (username) => {
  return new Promise((resolve, reject) => {
    db.collection('userSettings').doc(username).get()
    .then((doc) => {
      resolve(doc.data().emailNotificationSettings);
    })
    .catch(() => {
      module.exports.createSettings(username);
      console.log('no email list')
      reject({});
    });
  })
}