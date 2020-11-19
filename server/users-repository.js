
function getUserByUsername(username) {
  if (username === 'rafa') {
    return Promise.resolve({
      role: 'admin',
      identity: {
        id : '1',
				fullName : 'Rafael Garrido',
				avatar : 'http://localhost:3001/public/assets/images/avatar1.png'
      },
      // Hash generated with bcrypt.hash(value, 10)
      hash: '$2b$10$UWPrJLUSJ65ziNbLYQstS.POy.6udXEtBNCaMbQ/k5lEpGCtcvCFu'
    })
  } else if (username === 'chamil') {
    return Promise.resolve({
      role: 'admin',
      identity: {
        id : '2',
				fullName : 'Chamil Sala',
				avatar : 'http://localhost:3001/public/assets/images/avatar2.png'
      },
      // Hash generated with bcrypt.hash(value, 10)
      hash: '$2b$10$UWPrJLUSJ65ziNbLYQstS.POy.6udXEtBNCaMbQ/k5lEpGCtcvCFu'
    })
  }
  return Promise.resolve({
    role: 'normal',
    identity: {
      id : '3',
      fullName : 'test',
      avatar : 'http://localhost:3001/public/assets/images/avatar3.png'
    },
    // Hash generated with bcrypt.hash(value, 10)
    hash: '$2b$10$UWPrJLUSJ65ziNbLYQstS.POy.6udXEtBNCaMbQ/k5lEpGCtcvCFu'
  })
}

module.exports = {
  getUserByUsername
}