// Transactions.js - Basic transaction processing for The World Bank application

// Import user database
const { users } = require('./auth');

// Transaction types
const TRANSACTION_TYPES = {
  DEPOSIT: 'deposit',
  WITHDRAWAL: 'withdrawal', 
  TRANSFER: 'transfer'
};

// Process deposit
function deposit(userId, amount) {
  if (amount <= 0) {
    return { success: false, message: 'Amount must be positive' };
  }
  
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex === -1) {
    return { success: false, message: 'User not found' };
  }
  
  users[userIndex].balance += amount;
  
  return {
    success: true,
    message: `Deposited $${amount}`,
    newBalance: users[userIndex].balance,
    transaction: {
      type: TRANSACTION_TYPES.DEPOSIT,
      amount,
      timestamp: new Date().toISOString()
    }
  };
}

// Process withdrawal
function withdraw(userId, amount) {
  if (amount <= 0) {
    return { success: false, message: 'Amount must be positive' };
  }
  
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex === -1) {
    return { success: false, message: 'User not found' };
  }
  
  if (users[userIndex].balance < amount) {
    return { success: false, message: 'Insufficient funds' };
  }
  
  users[userIndex].balance -= amount;
  
  return {
    success: true,
    message: `Withdrew $${amount}`,
    newBalance: users[userIndex].balance,
    transaction: {
      type: TRANSACTION_TYPES.WITHDRAWAL,
      amount,
      timestamp: new Date().toISOString()
    }
  };
}

// Get account balance
function getBalance(userId) {
  const user = users.find(user => user.id === userId);
  if (!user) {
    return { success: false, message: 'User not found' };
  }
  
  return {
    success: true,
    balance: user.balance,
    userId: user.id,
    username: user.username
  };
}

// Export functions
module.exports = {
  deposit,
  withdraw,
  getBalance,
  TRANSACTION_TYPES
};
