const yo = require('yo-yo')
const func = (todo, index) => {
    return yo`<div><div>
    <tr>
    <th>${todo.text}</th>
    <th>${todo.priority}</th>
    <th>${todo.date_added}</th>
    <th>${todo.completed_str}</th>
    <th><button onclick=${onclick(index, render)}>Complete</button></th>
</tr>
</div>`
}
module.exports = function (todos, onclick, render) {
    return yo`<div>
    <tr>
        <th>To-Do Item</th>
        <th>Priority</th>
        <th>Date Added</th>
        <th>Complete</th>
        <th></th>
    </tr>
    </div>
    ${todos.map((todo, index) => func(todo, index))}</div>`
}


// ${todos.map(function (todo, index) {
//     return yo`<div>
//     <tr>
//     <th>${todo.text}</th>
//     <th>${todo.priority}</th>
//     <th>${todo.date_added}</th>
//     <th>${todo.completed_str}</th>
//     <th><button onclick=${onclick(index, render)}>Complete</button></th>
// </tr>
// </div>`
// }
// })}