module.exports = app => {
  const save = (req, res) => {
    res.send('user saved')
  }

  return { save }
}
