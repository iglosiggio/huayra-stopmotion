/* nw-wrapper.js: Hacky wrapper around electron exposing the node-webkit API
 * 
 * This wrapper is meant to be built with only the needed API for the current
 * project, we don't need to have a perfect wrapper for everyone. Just a good
 * enough one for our uses (that can be extended and polished if needed).
 */

const electron = require('electron');

module.exports = {
	Window: {
		get: electron.remote.getCurrentWindow,
	},
	App: {
		quit: electron.remote.app.quit,
		argv: electron.remote.process.argv.slice(2),
	},
	Shell: electron.remote.shell,
	Menu: electron.remote.Menu,
	MenuItem: electron.remote.MenuItem,
};
