const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 3000 //50541
    //192.168.168.76
    //10.0.2.15
  });

  conn.on('data', (data) => {
  	console.log('Server says: ' , data);
  });

  conn.on('connect', () => {
  conn.write('Hello from client!');
});
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}


module.exports = { connect };