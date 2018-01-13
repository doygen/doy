'use strict';

const fs = require('fs');
const Command = require('../api/command');
const Worker = require('../api/worker');

class ProjectCommand extends Command {

    get worker() {
        return new ProjectWorker();
    }
}

class ProjectWorker extends Worker {

    run(args) {

        console.log('[create] %s', args.project.name);
        fs.mkdirSync(args.project.name);

        var json = { 'project': 'HelloWorld' };

        console.log('[create] %s/metadata.json', args.project.name);
        fs.writeFile(args.project.name + '/metadata.json', JSON.stringify(json), function(err) {

        });
    }
}

module.exports.Command = ProjectCommand;