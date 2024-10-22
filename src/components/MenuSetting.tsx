import users from "../testing/users.json";
import SmallProfileChat from './SmallProfileChat';

export default function MenuSetting() {
	const hostName = import.meta.env.VITE_HOSTNAME;
      const LoggedId = 3; // Misalnya, ini adalah user_id pengguna yang sedang login
	const currentUser  = users.find(user => user.user_id === LoggedId);

      return(
            <section class="grid mx-3 py-5 bg-[#17394D] rounded-lg overflow-y-hidden overflow-x-hidden">
                  {/* <section class="mx-5 pb-5 px-10 bg-[#17394D] border-b border-cyan-700">
				<section class="flex items-center">
					<img
						src={`${hostName}/assets/svg/Conversation Image.svg`}
						alt="Image Profile"
						class="mr-10 w-20"
					/>
                              <div class="display-name">
                                    <h2 class="text-lg font-bold text-white">{currentUser  ? currentUser .nickname : 'User  not found'}</h2>
                                    <h2 class="text-lg font-semibold text-slate-300">{currentUser  ? "@" + currentUser .username : 'User  not found'}</h2>
                              </div>
				</section>
			</section> */}
                  <div class="grid mx-5 text-slate-200 text-lg">
                        {/* halaman aktif akan menambahkan class bg-[#728895] border-l-4 border-cyan-700 */}
                        <div class="py-5 border-b border-cyan-700">
                              <h1 class="text-base m-0 p-0 g-0">ACCOUNT</h1>
                              <div class="hover:bg-[#26485C] bg-[#26485C] font-semibold border-l-4 border-cyan-700 rounded pl-2 py-2 my-3 cursor-pointer">
                                    My Account
                              </div>
                        </div>
                        <div class="py-5 border-b border-cyan-700">
                              <h1 class="text-base m-0 p-0 g-0">PRIVACY AND SECURITY</h1>
                              <div class="hover:bg-[#26485C] rounded pl-2 py-2 my-3 cursor-pointer">
                                    Privacy
                              </div>
                              <div class="hover:bg-[#26485C] rounded pl-2 py-2 my-3 cursor-pointer">
                                    Security
                              </div>
                        </div>
                        <div class="py-5 border-b border-cyan-700">
                              <div class="hover:bg-[#26485C] rounded pl-2 py-2 my-3 cursor-pointer">
                                    About
                              </div>
                        </div>
                        <div class="py-5">
                              <div class="hover:bg-[#5c262665] rounded pl-2 py-2 my-3 text-red-600 cursor-pointer">
                                    <a href="" class="">
                                          Log Out
                                    </a>
                              </div>
                        </div>
                  </div>
            </section>
      );
}