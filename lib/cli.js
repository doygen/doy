#!/usr/bin/env node

'use strict';

const program = require('commander');

const ProjectCmd = require('./core/project').Command;

/* CLI Configuration */
program.version('0.0.1');
program.command('new [project]').action(newProject);
program.arguments('<cmd> [options]').action(doCommand);

program.parse(process.argv);

/* No Command Specified */
if (program.args.length === 0) { program.help(); }

/* Configuration */
function init() {

}

/* Commands */
function doCommand(cmd, options) {
    if (typeof cmd === 'undefined') {
        noCommandGiven();
    }

    if (cmd.endsWith(':generate')) {
        generate(cmd.split(':')[0]);
        return;
    }

    commandNotFound(cmd);
}

function newProject(project) {
    console.log('Creating project: ' + project);

    const args = { project: { name: project } };

    new ProjectCmd().execute(args);
}

function generate(type) {
    console.log('Generating for: ' + type)
}

/* Errors */
function noCommandGiven() {
    console.error('No command given. For more information, use --help.');
    process.exit(1);
}

function commandNotFound(cmd) {
    console.error('Command not found: %s. For more information, use --help.', cmd);
    process.exit(1);
}