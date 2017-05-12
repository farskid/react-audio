function generateUniqueId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  })
}

function logger(msgs) {
  msgs.split(',').map(msg => msg.trim()).forEach(msg => {
    console.log(msg)
  })
}

module.exports = {
  generateUniqueId,
  logger
}