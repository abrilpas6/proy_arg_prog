const ctrlIndex = {};

ctrlIndex.getIndex = (req, res) => {
  res.render("index");
};

module.exports = { ctrlIndex };
