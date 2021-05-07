const EventEmitter = require('events');

class Server extends EventEmitter {
    constructor(client) {
        const count = { c: 0 };
        const map = new Map();
        super();
        setImmediate(() => {
            this.emit('response', 'Enter a command. Enter help to see all commands:')
        });
        client.on('command', (input, args) => {
            switch (input) {
                case 'help':
                case 'add':
                case 'ls':
                case 'delete':
                    this[input](args, count, map);
                    break;
                default:
                    this.emit('response', 'Unknown Command');
            }
        })

    }

    help() {
        this.emit('response', `The available commands are:
    add
    ls
    delete`);
    }

    add(args, count, map) {
        map.set(++count.c, args.join(' '));
        this.emit('response', `The task is set with id: ${count.c}`);
    }

    ls(args, count, map) {
        let string = '';
        map.forEach((key, value) => {
            string += key + ': ' + value + '\n';
        })
        this.emit('response', string);
    }

    delete(args, count, map) {
        map.delete((+args[0]));
        this.emit('response', `Deleted ${args[0]}`);
    }
}

module.exports = client => new Server(client);