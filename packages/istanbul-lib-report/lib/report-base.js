'use strict';

// TODO: switch to class private field when targetting node.js 12
const _summarizer = Symbol('ReportBase.#summarizer');

class ReportBase {
    constructor(summarizer) {
        this[_summarizer] = summarizer;
    }

    execute(context) {
        context.getTree(this[_summarizer]).visit(this, context);
    }
}

module.exports = ReportBase;