/*
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FileSpreadsheet } from 'lucide-react';

export default function Login() {
  const { user, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const redirectData = localStorage.getItem('redirectState');
      if (redirectData) {
        const { path, state } = JSON.parse(redirectData);
        localStorage.removeItem('redirectState');
        navigate(path, { state });
      } else {
        navigate('/');
      }
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <FileSpreadsheet className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to ExcelEasy
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Access all features and save your progress
          </p>
        </div>
        <div className="mt-8">
          <button
            onClick={signInWithGoogle}
            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <img
              className="h-5 w-5 mr-2"
              src="https://www.google.com/favicon.ico"
              alt="Google"
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
*/