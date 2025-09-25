const https = require('https');
const http = require('http');

const testData = JSON.stringify({
  name: "Test User",
  email: "test@example.com", 
  message: "Testing email functionality!"
});

const options = {
  hostname: 'localhost',
  port: 3003,
  path: '/api/send-email',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': testData.length
  }
};

console.log('Testing email API...');

const req = http.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Headers:`, res.headers);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('Response:', data);
    if (res.statusCode === 200) {
      console.log('✅ Email API test successful!');
    } else {
      console.log('❌ Email API test failed!');
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Request error:', error.message);
});

req.write(testData);
req.end();