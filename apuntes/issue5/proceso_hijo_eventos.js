const { spawn } = require('child_process');
const ping = spawn('ping', ['osweekends.com']);

ping.stdout.on('data', (msg) => {
  console.log(`[stdout][${new Date().getTime()}]: ${msg}`);
});

ping.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ping.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});