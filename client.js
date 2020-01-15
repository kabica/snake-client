const net = require('net');
const stdin = process.stdin;
const { IP, PORT } = require('./constants');


const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
    //192.168.168.76
    //10.0.2.15
  });

  // CONNECTION STATUS - to server
  conn.on('connect', () => {
    conn.write('Hello from client!');
    stdin.setEncoding('utf8');
    conn.setEncoding('utf8'); 
    console.log('Successfully connected to game server!');
    conn.write("Name: ALX");
    //conn.write("Move: up");
    

  });


  
   // DATA - from server
   conn.on('data', (data) => {
    console.log('Server says: ' , data);
  });

  //  stdin.on('data', (data) => {
    
  //   conn.write(data);
  // });



  
  

  return conn;
}


module.exports = { connect };