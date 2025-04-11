// Auth.js - Basic user authentication for The World Bank application

// User database
const users = [
  { id: 1, username: 'sr', password: '1234', fullName: 'Sam Rodriguez', balance: 5000 },
  { id: 2, username: 'sba', password: '5678', fullName: 'Sarah Banks', balance: 7500 },
  { id: 3, username: 'mrs', password: '9999', fullName: 'Mike Richards', balance: 12000 },
  { id: 4, username: 'hh', password: '1122', fullName: 'Helen Harris', balance: 3200 }
];

// Login function
function login(username, password) {
  const user = users.find(user => user.username === username && user.password === password);
  
  if (user) {
    console.log(`Login successful: Welcome ${user.fullName}`);
    return { 
      userId: user.id, 
      username: user.username, 
      fullName: user.fullName 
    };
  } else {
    console.log('Login failed: Invalid credentials');
    return null;
  }
}

// Logout function
function logout(userId) {
  console.log(`User ${userId} logged out successfully`);
  return true;
}

// Export functions
module.exports = {
  login,
  logout,
  users // Export for testing purposes
};
