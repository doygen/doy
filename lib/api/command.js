'use strict';

const Worker = require('./worker');

class Command {

    get worker() {
      return new Worker();
    }

    execute(args) {
        this.worker.run(args);
    }
}

module.exports = Command;