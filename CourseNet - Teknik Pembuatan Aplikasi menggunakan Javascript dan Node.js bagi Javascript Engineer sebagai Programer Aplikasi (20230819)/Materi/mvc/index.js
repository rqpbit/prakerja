

// Process argv : mengambil inputan dari terminal
const command = process.argv[2]
const params = process.argv.slice(3)
const TodoController = require('./controllers/TodoController')

switch (command) {
    case 'help':
        TodoController.help()
        break;
    case 'show':
        TodoController.show()
        break;
    case 'add':
        TodoController.add(params)
        break;
    case 'delete':
        TodoController.delete(params)
        break;
    case 'edit':
        TodoController.edit(params)
        break;
    case 'changeStatus':
        TodoController.changeStatus(params)
        break;
    case undefined:
        TodoController.message(`Command tidak boleh empty`)
        break;
    default:
        TodoController.message(`Command tidak dikenal!`)
        break;
}

// console.log(command, params)