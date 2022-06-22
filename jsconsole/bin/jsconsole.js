// Copyright (c) Microsoft Corporation.  All Rights Reserved. Licensed under the MIT License. See License.txt in the project root for license information.
/*jshint ignore:start */
var require;
var define;
/*jshint ignore:end */

(function () {
    "use strict";

    var defined = {};
    define = function (id, dependencies, factory) {
        if (!Array.isArray(dependencies)) {
            factory = dependencies;
            dependencies = [];
        }

        var mod = {
            dependencies: normalize(id, dependencies),
            factory: factory
        };

        if (dependencies.indexOf('exports') !== -1) {
            mod.exports = {};
        }

        defined[id] = mod;
    };

    // WinJS/Core depends on ./Core/_Base
    // should return WinJS/Core/_Base
    function normalize(id, dependencies) {
        id = id || "";
        var parent = id.split('/');
        parent.pop();
        return dependencies.map(function (dep) {
            if (dep[0] === '.') {
                var parts = dep.split('/');
                var current = parent.slice(0);
                parts.forEach(function (part) {
                    if (part === '..') {
                        current.pop();
                    } else if (part !== '.') {
                        current.push(part);
                    }
                });
                return current.join('/');
            } else {
                return dep;
            }
        });
    }

    function resolve(dependencies, parent, exports) {
        return dependencies.map(function (depName) {
            if (depName === 'exports') {
                return exports;
            }

            if (depName === 'require') {
                return function (dependencies, factory) {
                    require(normalize(parent, dependencies), factory);
                };
            }

            var dep = defined[depName];
            if (!dep) {
                throw new Error("Undefined dependency: " + depName);
            }

            if (!dep.resolved) {
                dep.resolved = load(dep.dependencies, dep.factory, depName, dep.exports);
                if (typeof dep.resolved === "undefined") {
                    dep.resolved = dep.exports;
                }
            }

            return dep.resolved;
        });
    }

    function load(dependencies, factory, parent, exports) {
        var deps = resolve(dependencies, parent, exports);
        if (factory && factory.apply) {
            return factory.apply(null, deps);
        } else {
            return factory;
        }
    }
    require = function (dependencies, factory) { //jshint ignore:line
        if (!Array.isArray(dependencies)) {
            dependencies = [dependencies];
        }
        load(dependencies, factory);
    };


})();
define("amd", function(){});

define('utils/base',['require'],function(requirejs) {
    jsconsole = Object.create(Object.prototype);
    window.jsconsole = jsconsole;
    function define(name, obj) {
        jsconsole[name] = obj;
    }
    function defineWithParent(parent, name, obj) {
        parent[name] = obj;
    }
    defineWithParent(jsconsole, "setup", init);
    var configuration = {};
    function init(textarea, input, submit) {
        configuration = {
            commandWindow: textarea,
            commandInput: input,
            commandSubmit: submit,
        }
        defineWithParent(jsconsole, "configuration", configuration);
        //any code can be called here as this function is only ever called after the script is loaded
        //ie: all scripts were already loaded!
        jsconsole.commands.core.print("**START**\nThis code was called before any other code and right after configuration was defined and called.\n**END**\n");

        //event listeners hook to some bullshit somewhere im lost rn lol
        jsconsole.commands.engine.initializeExecutionProcessor();
    }
    return {
        jsconsole,
        define,
        defineWithParent,
        configuration
    }
});
define('commands/print',[
    "../utils/base"
], function(base) {
    function print(value) {
        base.jsconsole.configuration.commandWindow.value = base.jsconsole.configuration.commandWindow.value + "\n" + value;
    }
    return print;
});
define('commands/clear',[
    "../utils/base"
], function(base) {
    function clear() {
        base.jsconsole.configuration.commandWindow.value = "";
    }
    return clear;
});
//handles the execution of a command partially?
define('utils/execute',[
    "./base"
], (base) => {
    function initializeExecutionProcessor() {
        //remove the engine from public exposure(its shy!)
        delete(jsconsole.commands.engine);
        trigger = jsconsole.configuration.commandSubmit;
        output = jsconsole.configuration.commandWindow;
        input = jsconsole.configuration.commandInput;
        trigger.addEventListener("click", () => {
            executeCommands();
        });
        //event listener for the enter key being pressed IF the input element is active at time of the event!!
        input.addEventListener("keydown", (e) => {
            if(e.keyCode == 13) {
                executeCommands(); //all conditions met, run command.
            }
        });
    }

    var input;
    var output;
    var trigger;

    function executeCommands() {
        var commands = jsconsole.commands.registeredCommands;
        for(var i = 0; i < Object.keys(commands).length; i++) {
            var key = Object.keys(commands)[i];
            var value = input.value;
            value = value.split(":");
            value = value[0];
            if(value == key) {
                //perfom an action
                //let the action for the command handle parameter calls
                commands[key].action(input.value);
            }
        }
    }
    return {
        initializeExecutionProcessor,
    }
});
define('commands/commands',[
    "../utils/base",
    "./print",
    "./clear",
    "../utils/execute"
], function(base, print, clear, engine) {
    var register = (value) => {
        registeredCommands[value.name] = value;
    }
    var registeredCommands = {};
    var commands = {
        hello: () => {
            console.log("Hello, World!");
        }
    }
    var core = {};
    //core commands ie non registerable commands
    base.defineWithParent(core, "print", print);
    base.defineWithParent(core, "clear", clear)
    base.defineWithParent(commands, "core", core);
    //command registerables
    base.defineWithParent(commands, "registerCommand", register);
    base.defineWithParent(commands, "registeredCommands", registeredCommands);
    //open engine for initialization by base(it will be closed afterwards)
    base.defineWithParent(commands, "engine", engine);
    base.define("commands", commands);

    /* Command Execution Code */
    //assuming everything is met, add event listeners

});
require([
    "amd",
    "utils/base",
    "commands/commands",
], () => {
    //nocode?
});
define("jsconsole.js", function(){});

