// Roblox OAuth2.0 Configuration
// To use this application, you need to:
// 1. Create an OAuth2.0 app at https://create.roblox.com/credentials
// 2. Replace the CLIENT_ID below with your app's client ID
// 3. Add your GitHub Pages URL to the redirect URIs in your Roblox app settings

const CONFIG = {
    // Your actual Roblox OAuth2.0 Client ID
    CLIENT_ID: '9072113906187878278',

    // OAuth2.0 endpoints
    AUTHORIZE_URL: 'https://apis.roblox.com/oauth/v1/authorize',
    TOKEN_URL: 'https://apis.roblox.com/oauth/v1/token',

    // Required scopes for friend tracking
    SCOPES: ['openid', 'profile'],

    // Redirect URI — MUST be a fixed string, not window.location.href
    REDIRECT_URI: 'https://tchiemny.github.io/roblox-friend-tracker/callback.html',

    // API endpoints
    API_BASE_URL: 'https://apis.roblox.com',
    USERS_API: 'https://users.roblox.com',
    FRIENDS_API: 'https://friends.roblox.com',
    PRESENCE_API: 'https://presence.roblox.com',
    THUMBNAILS_API: 'https://thumbnails.roblox.com',
    GAMES_API: 'https://games.roblox.com',

    // Backend server configuration
    BACKEND_URL: 'http://205.137.245.182:3001',
    AUTH_START_URL: 'http://205.137.245.182:3001/auth/start',

    // Enable backend tracking (optional)
    ENABLE_BACKEND_TRACKING: false
};

console.log("Redirect URL: " + CONFIG.REDIRECT_URI);

// FIX: Remove the broken placeholder check
// Old version incorrectly warned even when Client ID was correct
if (!CONFIG.CLIENT_ID || CONFIG.CLIENT_ID.trim() === '') {
    console.warn('⚠️ OAuth Client ID not configured. Please update config.js with your Roblox OAuth2.0 credentials.');
}
