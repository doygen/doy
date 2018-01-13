'use strict';

const fs = require('fs'),
    util = require('../util/utils'),
    Command = require('../api/command'),
    Worker = require('../api/worker');

class ProjectCommand extends Command {

    get worker() {
        return new ProjectWorker();
    }
}

class ProjectWorker extends Worker {

    run(args) {

        const projectName = args.project.name;

        console.log('[create] %s', projectName);
        util.mkdir(projectName);

        var json = { 'project': projectName };

        console.log('[create] %s/metadata.json', projectName);
        fs.writeFile(projectName + '/metadata.json', JSON.stringify(json), function(err) {  });

        fs.writeFile(projectName + '/.doygen', 'Doygen :: ' + projectName, function(err) {  });
    }
}

module.exports.Command = ProjectCommand;