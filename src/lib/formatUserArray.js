import moment from 'moment';

const formatUserArray = users => users.map((myObj) => {
  const obj = {};
  Object.keys(myObj).forEach((element) => {
    if (element === 'first_name' || element === 'last_name') {
      if (obj.Name === undefined || obj.Name === '') {
        obj.Name = myObj.first_name;
      } else {
        obj.Name += ` ${myObj.last_name}`;
      }
    } else if (element === 'dob') {
      obj['Date Of Birth'] = moment(myObj[element]).format('DD MMM YYYY');
      obj.Age = moment().diff(myObj[element], 'years');
    } else {
      obj[element[0].toUpperCase() + element.substr(1).toLowerCase()] = myObj[element];
    }
  });
  return obj;
});

export default formatUserArray;
