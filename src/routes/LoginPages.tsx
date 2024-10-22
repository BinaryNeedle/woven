// import tailwind gimana
import { A } from "@solidjs/router";
import '../css/Login.css';

export default function LoginPages() {
      const handleGoogleLogin = async () => {
      // Create URL for API request to Google Auth
      const url = "https://accounts.google.com/o/oauth2/v2/auth";
      const clientId = "YOUR_CLIENT_ID"; // Replace with your client ID
      const redirectUri = "http://localhost:3000"; // Replace with your redirect URI
      const scope = "profile email";
      const responseType = "code";

      // Create API request URL
      const authUrl = `${url}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;

      // Redirect to Google Auth
      // window.location.href = authUrl; // Use the authUrl instead of a static URL
      window.location.href = "http://localhost:3000"; // Use the authUrl instead of a static URL
      };


      return (
            <main class="flex items-center justify-center h-screen bg-[#17394D]">
                  {/* From Uiverse.io by D3OXY  */}
                  <form action="" class="form shadow-xl w-96 p-5">
                        <p>
                              Welcome,<span>sign in to continue</span>
                        </p>
                        <button class="oauthButton w-full" type="button" onClick={handleGoogleLogin}>
                              <svg class="icon" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                                    <path d="M1 1h22v22H1z" fill="none"></path>
                              </svg>
                              Continue with Google
                        </button>
                        <div class="separator">
                              <div></div>
                              <span>OR</span>
                              <div></div>
                        </div>
                        <input type="email" placeholder="Email" name="email" class="w-full" />
                        <button class="oauthButton w-full">
                              Continue
                              <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path></svg>
                        </button>
                  </form>
            </main>
      );
}
