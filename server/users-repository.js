
function getUserByUsername(username) {
  if (username === 'rafa') {
    return Promise.resolve({
      role: 'admin',
      // Hash generated with bcrypt.hash(value, 10)
      hash: '$2b$10$UWPrJLUSJ65ziNbLYQstS.POy.6udXEtBNCaMbQ/k5lEpGCtcvCFu'
    })
  }
  return Promise.resolve({
    role: 'normal',
    // Hash generated with bcrypt.hash(value, 10)
    hash: '$2b$10$UWPrJLUSJ65ziNbLYQstS.POy.6udXEtBNCaMbQ/k5lEpGCtcvCFu'
  })
}

module.exports = {
  getUserByUsername
}