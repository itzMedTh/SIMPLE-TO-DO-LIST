let input = prompt("What would you like to do? (add, list, remove, quit)").toLowerCase();
const todos = [];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log("**********");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("**********");
    } else if (input === 'add') {
        const newTodo = prompt("OK, what is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if (input === 'remove') {
        const index = parseInt(prompt("OK, enter an index to delete:"));
        if (!Number.isNaN(index) && index >= 0 && index < todos.length) {
            const deleted = todos.splice(index, 1);
            console.log(`OK, deleted ${deleted[0]}`);
        } else {
            console.log("Unknown or invalid index");
        }
    } else {
        console.log("Unknown command");
    }

    input = prompt("What would you like to do? (add, list, remove, quit)").toLowerCase();
}

console.log("OK, YOU QUIT THE APP!");
