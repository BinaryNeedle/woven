import FriendCard from "./FriendCard";

export default function FriendList() {
      const hostName = import.meta.env.VITE_HOSTNAME;

      return (
            <section class="w-4/5 justify-center items-center">
                  <div class="justify-center items-center text-center flex my-10 text-4xl">
                        <img src={hostName + "/assets/svg/users.svg"} class="w-12 mr-4" alt="" srcset="" /> 
                        <h1 class="h1 flex text-white">
                              FRIENDS LIST
                        </h1>
                  </div>
                  <div class="flex grid-rows-1 h-fit w-full items-center justify-center mb-5">
                        <input
						type="text"
						placeholder="Search"
						class="block w-full mx-10 rounded border-0 py-1.5 pl-7 pr-14 bg-[#17394D] text-gray-900 border-b-2 border-cyan-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 outline-none"
					/>
                  </div>
                  <div class="grid grid-rows-9 h-fit">
                        <FriendCard/>
                        <FriendCard/>
                        <FriendCard/>
                        <FriendCard/>
                        <FriendCard/>
                        <FriendCard/>
                        <FriendCard/>
                        <FriendCard/>
                        <FriendCard/>
                  </div>
            </section>
      );
}