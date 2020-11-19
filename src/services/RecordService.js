const moment = require('moment');
const Record = require('../models/Record');

const RecordService = {};

RecordService.filter = async ({
  startDate, endDate, minCount, maxCount,
}) => {
  const records = await Record.aggregate()
    .project({
      _id: 0,
      key: 1,
      createdAt: 1,
      totalCount: { $sum: '$counts' },
    })
    .match({
      createdAt: {
        $gte: moment.utc(startDate, 'YYYY-MM-DD').toDate(),
        $lt: moment.utc(endDate, 'YYYY-MM-DD').toDate(),
      },
    })
    .match({
      totalCount: {
        $gte: minCount,
        $lt: maxCount,
      },
    })
    .sort({ totalCount: 1 })
    .exec();

  return records;
};

module.exports = RecordService;
