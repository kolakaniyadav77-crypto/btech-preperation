// Initialize Demo Account in localStorage
export const initializeDemoAccount = () => {
  const existingUsers = localStorage.getItem('education_path_users');
  
  if (!existingUsers) {
    const demoUsers = [
      {
        id: 'demo-user-001',
        email: 'demo@example.com',
        password: 'Demo@123!',
        fullName: 'Demo User',
        createdAt: new Date().toISOString()
      }
    ];
    
    localStorage.setItem('education_path_users', JSON.stringify(demoUsers));
    console.log('✓ Demo account initialized');
  }
};
