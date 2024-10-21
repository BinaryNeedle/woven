import FriendCard from "./FirendCard";

export default function FriendList() {
      const hostName = import.meta.env.VITE_HOSTNAME;

      return (
            <section class="w-4/5 justify-center items-center">
                  <div class="justify-center items-center text-center flex my-10">
                        <h1 class="h1 text-white text-5xl">
                              <i class="fa fa-users"></i> FRIENDS
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