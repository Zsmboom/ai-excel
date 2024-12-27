import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

export default function LoginButton() {
  const { user, signInWithGoogle, signOut } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return user ? (
    <div className="flex items-center gap-4">
      {user.user_metadata.avatar_url && (
        <img
          src={user.user_metadata.avatar_url}
          alt={user.user_metadata.full_name || 'User avatar'}
          className="w-8 h-8 rounded-full"
        />
      )}
      <button
        onClick={() => signOut()}
        className="text-gray-600 hover:text-blue-600 transition-colors"
      >
        Sign Out
      </button>
    </div>
  ) : (
    <button
      data-login-button
      onClick={handleGoogleLogin}
      className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-full border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
    >
      <img
        src="https://www.google.com/favicon.ico"
        alt="Google"
        className="w-4 h-4"
      />
      Sign in with Google
    </button>
  );
}