const fetch = require('node-fetch');

/**
 * Resolve a Roblox username to a userId
 */
async function getUserIdFromUsername(username) {
  const url = 'https://users.roblox.com/v1/usernames/users';
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ usernames: [username], excludeBannedUsers: false })
  });
  if (!response.ok) {
    throw new Error(`Failed to resolve username: ${response.statusText}`);
  }
  const json = await response.json();
  if (!json.data || json.data.length === 0) {
    throw new Error('Username not found');
  }
  return json.data[0].id;
}

/**
 * Get friends for a given userId
 */
async function getFriendsForUserId(userId) {
  const url = `https://friends.roblox.com/v1/users/${userId}/friends`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch friends: ${response.statusText}`);
  }
  const json = await response.json();
  return Array.isArray(json.data) ? json.data : [];
}

module.exports = {
  getUserIdFromUsername,
  getFriendsForUserId
};
