import FriendCard from "../friend/friendCard";
import { clientEnv } from "~/env/client";


export default function SearchFriend() {
      const hostName = clientEnv.VITE_HOSTNAME;
      return (
            <section class="col-span-4 h-screen justify-center items-center">
                  <div class="justify-center items-center text-center flex my-10 text-4xl">
                        <img src={hostName + "/assets/svg/users.svg"} class="w-12 mr-4" alt="" srcset="" />
                        <h1 class="h1 flex text-white">
                              SEARCH FRIENDS
                        </h1>
                  </div>
                  <div class="flex grid-rows-1 h-fit w-full items-center justify-center mb-5">
                        <input
                              type="text"
                              placeholder="Search by username..."
                              class="block w-full mx-10 rounded border-0 py-1.5 pl-7 pr-14 bg-[#17394D] text-gray-900 border-b-2 border-cyan-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 outline-none"
                        />
                  </div>
                  <div class="grid grid-rows row-auto">
                        <div class="flex justify-center items-center">
                              <div class="w-full mx-10 cursor- hover:bg-[#17394D] rounded border-t-2 border-[#17394D] p-3 h-fit">
                                    <section class="flex grid-cols-3">
                                          <div class="flex grid-cols-3 col-span-3 w-full">
                                                <img class="mx-2"
                                                      src={hostName + "/assets/svg/Conversation Image.svg"}
                                                      alt="Profile Image"
                                                />
                                                <div class="relative group mx-2 col-span-2">
                                                      <h2 class="text-lg font-bold text-white">Rey</h2>
                                                      <p class="text-sm text-slate-200 truncate w-80">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores id, neque voluptatem sit temporibus tempore repellendus reprehenderit accusamus sequi explicabo?
                                                      </p>
                                                      <div class="absolute z-10 invisible group-hover:visible bg-gray-800 text-white text-xs rounded p-2 mt-2 w-full">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores id, neque voluptatem sit temporibus tempore repellendus reprehenderit accusamus sequi explicabo?
                                                      </div>
                                                </div>
                                          </div>
                                          <section class="w-fit">
                                                <div class="h-full flex float-end my-2">
                                                      <img src={hostName + "/assets/svg/message.svg"} class="w-12 h-12 p-3 bg-cyan-700 hover:bg-[#17394D] hover:cursor-pointer rounded-full" alt="message.svg" />
                                                      <img src={hostName + "/assets/svg/plus.svg"} class="w-12 h-12 p-3 mx-5 bg-cyan-700 hover:bg-[#17394D] hover:cursor-pointer rounded-full" alt="addfriend.svg" />
                                                </div>
                                          </section>
                                    </section>
                              </div>
                        </div>
                  </div>
            </section>
      );
}
