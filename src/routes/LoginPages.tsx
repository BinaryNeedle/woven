// import tailwind gimana
import { A } from "@solidjs/router";

export default function LoginPages() {
      // const handleGoogleLogin = async () => {
      // // Buat URL untuk permintaan API ke Google Auth
      // const url = "https://accounts.google.com/o/oauth2/v2/auth";
      // const clientId = "YOUR_CLIENT_ID"; // Ganti dengan client ID Anda
      // const redirectUri = "http://localhost:3000"; // Ganti dengan redirect URI Anda
      // const scope = "profile email";
      // const responseType = "code";

      // // Buat URL permintaan API
      // const authUrl = `${url}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;

      // Lakukan permintaan API ke Google Auth
      // window.location.href = "localhost:3000/";
      // };

      return (
            <main class="flex items-center justify-center h-screen bg-gray-100">
                  <div class="max-w-md w-full h-60 p-5 bg-cyan-800 rounded shadow-md">
                        <h2 class="text-2xl font-bold p-4 mb-4 text-center text-white">Welcome to WOVEN</h2>
                        {/* Uncomment the error handling if needed
                        {error() && (
                        <div class="text-red-500 text-sm mb-2">{error()}</div>
                        )} */}
                        <button type="submit" class="w-full p-3 mb-4 bg-cyan-700 rounded hover:bg-cyan-600" onclick={() => window.location.replace("http://localhost:3000/")}>
                              <div class="row flex justify-center items-center">
                                    <div class="col-md">
                                          <img src="/assets/svg/7123025_logo_google_g_icon.svg" alt="google logo" class="w-10 me-5" srcset="" />
                                    </div>
                                    <div class="col-md">
                                          Continue with Google
                                    </div>
                              </div>
                        </button>
                        <p class="">
                              <a href="" class="text-blue-300">
                                    Lorem, ipsum dolor sit amet. Dicta, accusantium?
                              </a>
                        </p>
                  </div>
            </main>
      );
}
