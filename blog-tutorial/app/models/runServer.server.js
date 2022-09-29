const { exec } = require('child_process');

const API_KEY = 'xyz';
const Port = 8000;

const command = `docker run -d -p ${Port}:8000 -v/typesense-server-data/:/data \ typesense/typesense:0.22.2 --data-dir /data --api-key=${API_KEY} --listen-port ${Port} --enable-cors`;

exec(command, (err, stdout, stderr) => {
  if (!err && !stderr) console.log("Typesense Server is up and running...✰✨");
  if (err) {
    console.log("Error running server: ", err);
  }
  if (stderr) {
    console.log("Error running server: ", stderr);
  }
  if (stdout) {
    console.log("server output: ", stdout);
  }
});

