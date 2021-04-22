module.exports = function (todos, onclick, render) {
    return yo`<tr>
    ${todos.map(function (todo, index) {
        return yo`<th>${todo.text}</th>
        <th>${todo.priority}</th>
        <th>${todo.date_added}</th>
        <th>${todo.completed_str}</th>
        <th>${onclick(index)}</th>`
    })}
    </tr>`
}