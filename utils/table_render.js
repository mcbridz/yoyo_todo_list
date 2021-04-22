const yo = require('yo-yo')
const row_render = require('./row_render')
module.exports = function (todos, todo_table, render, onclick) {
    let new_table = row_render(todos, onclick, render)
    yo.update(todo_table, new_table)
}