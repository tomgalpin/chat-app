import moment from 'moment';

const FriendlyDate = (date) => {
  const formattedDate = moment(date).format('dddd MMMM DD, YYYY');
  const formattedTime = moment(date).format('h:mm a');

  return `${formattedDate} at ${formattedTime}`;
};

const FriendlyToIso = (friendlyDateString) => {
  return new Date(friendlyDateString);
};

export { FriendlyDate, FriendlyToIso };
