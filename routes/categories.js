var express = require('express');
var router = express.Router();
var fs = require('fs');
const { parse, isSameDay, isBefore } = require("date-fns");

/* categories */
router.get('/:category_slug', function (req, res, next) {
  
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

  let navigationSet = new Set();
  data.forEach((post) => {
    let categoryObject = JSON.stringify({ category: post.category, slug: post.category_slug });
    navigationSet.add(categoryObject);
  });

  let navigationLinks = Array.from(navigationSet).map(item => JSON.parse(item)).sort((a, b) => a.category.localeCompare(b.category));

  let dates = data.map(function (post) {
    let [year, month] = post.created_at.split('-');
    return new Date(`${year}-${month}-01`);
  });

  const navItem = data.find(data => data.category_slug === req.params.category_slug)

  let slugCategoriesData = data.filter((category) => category.category_slug === req.params.category_slug)

  res.render('categories', {
    title: 'She Code Queens',
    links: navigationLinks,
    posts: slugCategoriesData,
    navItem: navItem,
    archives: Array.from(new Set(dates)),
  });
});

module.exports = router;
