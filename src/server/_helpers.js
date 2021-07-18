const moment = require('moment');

/**
 * Get days difference
 */
const getDayDifference = (date) => {
  const currentMoment = moment();
  const tripMoment = moment(date);
  const momentDifference = moment.duration(tripMoment.diff(currentMoment));

  const daysDifference = Math.floor(momentDifference.asDays());

  return daysDifference;
};

exports.helpers = {
  getDayDifference,
};
