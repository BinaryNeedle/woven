import FriendCard from "./FriendCard";
import users from "../testing/users.json";

export default function FriendList() {
      const hostName = import.meta.env.VITE_HOSTNAME;
      const LoggedId = 3; // Ini adalah user_id dari pengguna yang sedang login
      const currentUser = users.find(user => user.user_id === LoggedId);

      // Filter pengguna selain pengguna yang sedang login
      const otherUsers = users.filter(user => user.user_id !== LoggedId);

      return (
      <section class="col-span-4 h-fit justify-center items-center">
            <div class="justify-center h-fit items-center text-center flex my-10 text-4xl">
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
            <div class="grid grid-rows row-auto">
                  {otherUsers.map(user => (
                  <FriendCard key={user.user_id} user={user} />
                  ))}
            </div>
      </section>
      );
}