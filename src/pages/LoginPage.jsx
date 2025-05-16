// pages/LoginPage.jsx - Login Page Component
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import { validateCredentials } from '../utils/authUtils';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { login, isAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   // If already authenticated, redirect to dashboard
//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/dashboard');
//     }
//   }, [isAuthenticated, navigate]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const user = validateCredentials(email, password);
    
//     if (user) {
//       login(user);
//       navigate('/dashboard');
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h1 className="text-center text-3xl font-extrabold text-gray-900">
//             ENTNT Ship Maintenance Dashboard
//           </h1>
//           <h2 className="mt-6 text-center text-xl text-gray-600">
//             Please sign in to access the dashboard
//           </h2>
//         </div>
        
//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
//             <span className="block sm:inline">{error}</span>
//           </div>
//         )}

//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//               />
//             </div>
//             <div>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 placeholder="Password"
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Sign in
//             </button>
//           </div>
//         </form>

//         <div className="mt-6">
//           <h3 className="text-center text-sm text-gray-600">Demo accounts:</h3>
//           <div className="mt-2 text-center text-xs text-gray-500 space-y-1">
//             <p>admin@entnt.in / admin123</p>
//             <p>inspector@entnt.in / inspect123</p>
//             <p>engineer@entnt.in / engine123</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


// pages/LoginPage.jsx - Enhanced Login Page Component
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import { validateCredentials } from '../utils/authUtils';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { login, isAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/dashboard');
//     }
//   }, [isAuthenticated, navigate]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const user = validateCredentials(email, password);

//     if (user) {
//       login(user);
//       navigate('/dashboard');
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-4">
//       <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-10 max-w-md w-full animate-fadeInUp transition duration-500">
//         <div className="mb-8 text-center">
//           <h1 className="text-3xl font-extrabold text-indigo-700 drop-shadow-lg">
//             ENTNT 
//           </h1>
//           <h2 className="text-3xl font-extrabold text-indigo-700 drop-shadow-lg">
//             SHIP MAINTENANCE
//           </h2>
//           <p className="mt-2 text-gray-600 text-sm">
//             Your dashboard is one step away – sign in
//           </p>
//         </div>

//         {error && (
//           <div className="mb-4 p-3 bg-red-50 border border-red-300 text-red-700 text-sm rounded-lg shadow-sm animate-shake">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="space-y-4">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               placeholder="Email address"
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 outline-none transition duration-300 text-gray-800 placeholder-gray-400 shadow-md"
//             />
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               placeholder="Password"
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 outline-none transition duration-300 text-gray-800 placeholder-gray-400 shadow-md"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 transform hover:-translate-y-0.5 active:scale-95"
//           >
//             Sign In
//           </button>
//         </form>

//         <div className="mt-6 text-center">
//           <h3 className="text-gray-500 text-sm font-medium">Demo accounts</h3>
//           <div className="mt-2 text-xs text-gray-600 space-y-1">
//             <p>admin@entnt.in / admin123</p>
//             <p>inspector@entnt.in / inspect123</p>
//             <p>engineer@entnt.in / engine123</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import { validateCredentials } from '../utils/authUtils';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { login, isAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/dashboard');
//     }
//   }, [isAuthenticated, navigate]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const user = validateCredentials(email, password);

//     if (user) {
//       login(user);
//       navigate('/dashboard');
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 transition-all duration-500">
//       <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-md shadow-2xl rounded-3xl p-10 max-w-md w-full animate-fadeInUp transition duration-500">
//         <div className="mb-8 text-center">
//           <h1 className="text-3xl font-extrabold text-indigo-700 dark:text-indigo-400 drop-shadow-lg">
//             ENTNT
//           </h1>
//           <h2 className="text-3xl font-extrabold text-indigo-700 dark:text-indigo-400 drop-shadow-lg">
//             SHIP MAINTENANCE
//           </h2>
//           <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
//             Your dashboard is one step away – sign in
//           </p>
//         </div>

//         {error && (
//           <div className="mb-4 p-3 bg-red-50 dark:bg-red-800/50 border border-red-300 dark:border-red-500 text-red-700 dark:text-red-100 text-sm rounded-lg shadow-sm animate-shake">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="space-y-4">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               placeholder="Email address"
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 outline-none transition duration-300 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 shadow-md"
//             />
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               placeholder="Password"
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 outline-none transition duration-300 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 shadow-md"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 bg-indigo-600 dark:bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition duration-300 transform hover:-translate-y-0.5 active:scale-95"
//           >
//             Sign In
//           </button>
//         </form>

//         <div className="mt-6 text-center">
//           <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Demo accounts</h3>
//           <div className="mt-2 text-xs text-gray-600 dark:text-gray-300 space-y-1">
//             <p>admin@entnt.in / admin123</p>
//             <p>inspector@entnt.in / inspect123</p>
//             <p>engineer@entnt.in / engine123</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { validateCredentials } from '../utils/authUtils';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = validateCredentials(email, password);

    if (user) {
      login(user);
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 transition-all duration-500 relative">

      {/* Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-5 right-5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-lg shadow-md text-sm font-medium transition"
      >
        {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
      </button>

      <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-md shadow-2xl rounded-3xl p-10 max-w-md w-full animate-fadeInUp transition duration-500">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-indigo-700 dark:text-indigo-400 drop-shadow-lg">
            ENTNT
          </h1>
          <h2 className="text-3xl font-extrabold text-indigo-700 dark:text-indigo-400 drop-shadow-lg">
            SHIP MAINTENANCE
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
            Your dashboard is one step away – sign in
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-800/50 border border-red-300 dark:border-red-500 text-red-700 dark:text-red-100 text-sm rounded-lg shadow-sm animate-shake">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 outline-none transition duration-300 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 shadow-md"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 outline-none transition duration-300 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 shadow-md"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 dark:bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition duration-300 transform hover:-translate-y-0.5 active:scale-95"
          >
            Sign In
          </button>
        </form>

        {/* <div className="mt-6 text-center">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Demo accounts</h3>
          <div className="mt-2 text-xs text-gray-600 dark:text-gray-300 space-y-1">
            <p>admin@entnt.in / admin123</p>
            <p>inspector@entnt.in / inspect123</p>
            <p>engineer@entnt.in / engine123</p>
          </div>
        </div> */}
        <div className="mt-6 text-center">
  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">
    Try with one of our demo users
  </h3>
  <ul className="mt-2 text-xs text-gray-700 dark:text-gray-400 space-y-1">
    <li><strong>Admin:</strong> admin@entnt.in / admin123</li>
    <li><strong>Inspector:</strong> inspector@entnt.in / inspect123</li>
    <li><strong>Engineer:</strong> engineer@entnt.in / engine123</li>
  </ul>
</div>

      </div>
    </div>
  );
};

export default LoginPage;
