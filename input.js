// input.js
// Stores the active TCP connection object.
let connection;


const handleUserInput = (key) => {
	if(key === '\u0003') process.exit();
	if(key === 'w') {
		connection.write('Move: up');
	}
	if(key === 'a') {
		connection.write('Move: left');
	}
	if(key === 's') {
		connection.write('Move: down');
	}
	if(key === 'd') {
		connection.write('Move: right');
	}

	if(key === 'z') {
		connection.write('Say: SNEK');
	}
	if(key === 'x') {
		connection.write('Say: ATTAK!');
	}

	// const say = key.match(/Say: (.*)/);
	// if(say) {
	// 	connection.write(say[1].trim().substring(0));
	// }



}

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data' , (data) => {
  	return handleUserInput(data);
  });
}



module.exports = { setupInput };