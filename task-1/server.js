const http = require('http');
const os = require('os');

const startTime = Date.now();

const server = http.createServer((req, res) => {
  const { method, url } = req;

  
  console.log(`[${new Date().toISOString()}] ${method} ${url}`);

  
  res.setHeader('Content-Type', 'application/json');

  
  const sendJSON = (statusCode, data) => {
    res.statusCode = statusCode;
    res.end(JSON.stringify(data, null, 2));
  };

  
  if (method === 'GET' && url === '/') {
    return sendJSON(200, {
      message: 'Welcome to Elevvo Backend Internship - Task 1',
      description: 'Raw Node.js HTTP Server (no Express)',
      endpoints: [
        'GET /',
        'GET /api/users',
        'GET /api/health'
      ]
    });
  }

  
  if (method === 'GET' && url === '/api/users') {
    return sendJSON(200, {
      users: [
        { id: 1, name: 'Ahmad Yaar', role: 'Intern' },
        { id: 2, name: 'Elevvo Admin', role: 'Admin' },
        { id: 3, name: 'Sara Khan', role: 'Mentor' }
      ]
    });
  }

  
  if (method === 'GET' && url === '/api/health') {
    const uptimeSeconds = Math.floor((Date.now() - startTime) / 1000);

    return sendJSON(200, {
      status: 'OK',
      uptime: `${uptimeSeconds} seconds`,
      platform: os.platform(),
      timestamp: new Date().toISOString()
    });
  }

  
  sendJSON(404, {
    error: 'Not Found',
    message: `Route ${method} ${url} does not exist`
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`\nServer is running on http://localhost:${PORT}`);
  console.log('Available routes:');
  console.log('  GET /');
  console.log('  GET /api/users');
  console.log('  GET /api/health   ← bonus\n');
});