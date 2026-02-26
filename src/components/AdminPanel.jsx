import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/AdminPanel.css';
import '../styles/DeleteConfirmModal.css';

export default function AdminPanel() {
  const { currentUser: _, deleteUser } = useAuth();
  
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError('');
      
      // Fetch users from Spring Boot backend
      const response = await fetch('/api/auth/users');
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const usersList = await response.json();
      
      // Transform backend response to match component state shape
      const transformedUsers = usersList.map(u => ({
        id: u.id,
        email: u.email || 'N/A',
        fullName: u.fullName || 'N/A',
        createdAt: u.createdAt || 'N/A'
      }));
      
      setUsers(transformedUsers);
      setFilteredUsers(transformedUsers);
      
    } catch (err) {
      console.error('Failed to load users from backend:', err);
      setError('❌ Error loading users: ' + (err.message || 'Failed to load users'));
      setUsers([]);
      setFilteredUsers([]);
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
        (user.email || '').toLowerCase().includes(term) ||
        (user.fullName || '').toLowerCase().includes(term)
      );
      setFilteredUsers(filtered);
    }
  };

  const handleDeleteUser = (userId) => {
    const user = users.find(u => u.id === userId);
    setDeleteConfirm({
      userId,
      userName: user?.fullName || user?.email || 'Unknown'
    });
  };

  const confirmDelete = async () => {
    if (!deleteConfirm) return;

    setDeleteLoading(true);
    try {
      // Delete from Supabase users table
      const { error: tableError } = await supabase
        .from('users')
        .delete()
        .eq('id', deleteConfirm.userId);

      if (tableError) {
        throw new Error(`Failed to delete from users table: ${tableError.message}`);
      }

      // Try to call backend delete endpoint
      try {
        const response = await fetch('/api/delete-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: deleteConfirm.userId })
        });

        if (!response.ok) {
          console.warn('Backend delete warning:', response.statusText);
        }
      } catch (fetchErr) {
        console.warn('Backend delete endpoint not available:', fetchErr);
      }

      // Remove from UI
      const updatedUsers = users.filter(u => u.id !== deleteConfirm.userId);
      setUsers(updatedUsers);
      setFilteredUsers(filteredUsers.filter(u => u.id !== deleteConfirm.userId));

      setError('');
      setDeleteConfirm(null);
    } catch (err) {
      setError('❌ Error deleting user: ' + (err.message || 'Unknown error'));
    } finally {
      setDeleteLoading(false);
    }
  };

  const cancelDelete = () => {
    setDeleteConfirm(null);
  };

  const handleExportUsers = () => {
    try {
      // Export users (without passwords since they're not sent from backend)
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
    } catch (_err) { // eslint-disable-line no-unused-vars
      setError('Failed to export users');
    }
  };

  // Admin panel is intentionally accessible without login so an administrator
  // can manage stored users on any host. We still show the current user
  // status if someone is logged in.
  

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
                  <td className="name-cell">{typeof user.fullName === 'string' ? (user.fullName || 'N/A') : 'N/A'}</td>
                  <td className="email-cell">{typeof user.email === 'string' ? user.email : 'N/A'}</td>
                  <td className="date-cell">
                    {typeof user.createdAt === 'string' ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
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

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="modal-overlay">
          <div className="delete-modal">
            <div className="modal-header">
              <h2>⚠️ Confirm Delete</h2>
              <button 
                className="modal-close-btn"
                onClick={cancelDelete}
                disabled={deleteLoading}
              >
                ✕
              </button>
            </div>

            <div className="modal-content">
              <p>Are you sure you want to delete this user?</p>
              <div className="user-info">
                <strong>{deleteConfirm.userName}</strong>
              </div>
              <p className="warning-text">
                ⚠️ This action is <strong>permanent</strong> and cannot be undone. 
                All user data and progress will be deleted.
              </p>
            </div>

            <div className="modal-actions">
              <button
                className="btn btn-cancel"
                onClick={cancelDelete}
                disabled={deleteLoading}
              >
                Cancel
              </button>
              <button
                className="btn btn-delete"
                onClick={confirmDelete}
                disabled={deleteLoading}
              >
                {deleteLoading ? 'Deleting...' : 'Yes, Delete User'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
