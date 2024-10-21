// import { authenticate, getToken, getUserInfo } from '../auth/google-auth';

// const handleGoogleLogin = async () => {
//       const url = await authenticate();
//       window.location.href = url;
// };

// const handleGoogleCallback = async (code:any) => {
//       const token = await getToken(code);
//       const userInfo = await getUserInfo(token);
//       // Lakukan autentikasi dengan userInfo
// };

// return (
//       <main>
//       <button onClick={handleGoogleLogin}>Login dengan Google</button>
//       <div>
//             {userInfo && (
//             <div>
//             <h2>{userInfo.names[0].displayName}</h2>
//             <p>{userInfo.emailAddresses[0].value}</p>
//             </div>
//             )}
//       </div>
//       </main>
// );