import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/AdminPanel.css';

export default function AdminPanel() {
  const { currentUser } = useAuth();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    try {
      setLoading(true);
      const storedUsers = localStorage.getItem('education_path_users');
      const usersList = storedUsers ? JSON.parse(storedUsers) : [];
      setUsers(usersList);
      setFilteredUsers(usersList);
      setError('');
    } catch (err) {
      setError('Failed to load users');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(user =>
        user.email.toLowerCase().includes(term) ||
        user.fullName.toLowerCase().includes(term)
      );
      setFilteredUsers(filtered);
    }
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const updatedUsers = users.filter(u => u.id !== userId);
        localStorage.setItem('education_path_users', JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers);
      } catch (err) {
        setError('Failed to delete user');
      }
    }
  };

  const handleExportUsers = () => {
    try {
      const dataStr = JSON.stringify(users, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `users_${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      setError('Failed to export users');
    }
  };

  if (!currentUser) {
    return (
      <div className="admin-container">
        <div style={{ padding: '20px', color: '#ef4444' }}>
          You must be logged in to access this page.
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>👨‍💼 Admin Panel</h1>
        <p>Manage all users and their data</p>
      </div>

      {error && (
        <div style={{
          background: '#fee2e2',
          color: '#991b1b',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '20px',
          border: '1px solid #fecaca'
        }}>
          {error}
        </div>
      )}

      <div className="admin-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by email or name..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        <div className="admin-actions">
          <button onClick={handleExportUsers} className="action-btn export-btn">
            📥 Export JSON
          </button>
          <button onClick={loadUsers} className="action-btn refresh-btn">
            🔄 Refresh
          </button>
        </div>
      </div>

      <div className="admin-stats">
        <div className="stat-card">
          <div className="stat-number">{users.length}</div>
          <div className="stat-label">Total Users</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{filteredUsers.length}</div>
          <div className="stat-label">Showing</div>
        </div>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>
          Loading users...
        </div>
      ) : filteredUsers.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>
          {searchTerm ? 'No users found matching your search.' : 'No users yet.'}
        </div>
      ) : (
        <div className="users-table-container">
          <table className="users-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td className="name-cell">{user.fullName || 'N/A'}</td>
                  <td className="email-cell">{user.email}</td>
                  <td className="date-cell">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className="action-cell">
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="delete-btn"
                      title="Delete user"
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
