var express = require('express');
var router = express.Router();
var fs = require('fs');
const { parse, isSameDay, isBefore } = require("date-fns");

/* categories */
router.get('/:slug', function (req, res, next) {
  
  let rawdata = fs.readFileSync('./database/posts.json');

  let data = JSON.parse(rawdata).sort(function (a, b) {
    let dateOne = parse(a.created_at, 'yyyy-MM-dd', new Date());

    let dateTwo = parse(b.created_at, 'yyyy-MM-dd', new Date());

    if (isSameDay(dateOne, dateTwo)) {
      return 0;
    }

    if (isBefore(dateOne, dateTwo)) {
      return 1;
    }

    return -1;
  });

  let dates = data.map(function (post) {
    let [year, month] = post.created_at.split('-');
    return new Date(`${year}-${month}-01`);
  });

  const blogItem = data.find(item => item.slug === req.params.slug);

  res.render('blog', {
    title: 'She Code Queens',
    blog: blogItem,
    archives: Array.from(new Set(dates)),
  });
});

module.exports = router;
