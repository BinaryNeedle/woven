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