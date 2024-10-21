export default function FriendsCard() {
      const hostName = import.meta.env.VITE_HOSTNAME;
      
      const nickName = "ius";
      const statusText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sed perspiciatis neque explicabo. Tempore magnam architecto iusto? Error, eos et!";

      return (
            <div class="flex justify-center items-center">
                  <div class="w-full mx-10 hover:bg-[#17394D] cursor-pointer rounded border-t-2 border-[#17394D] p-3 h-fit">
                        <section class="flex grid-cols-3">
                              <div class="flex grid-cols-3 col-span-3 w-full">
                                    <img class="mx-2"
                                          src={hostName + "/assets/svg/Conversation Image.svg"}
                                          alt="Profile Image"
                                          />
                                    <div class="relative group mx-2 col-span-2">
                                          <h2 class="text-lg font-bold text-white">{nickName}</h2>
                                          <p class="text-sm text-slate-200 truncate w-80">
                                                {statusText}
                                          </p>
                                          <div class="absolute z-10 invisible group-hover:visible bg-gray-800 text-white text-xs rounded p-2 mt-2 w-full">
                                                {statusText}
                                          </div>
                                    </div>
                              </div>
                              <section class="w-fit">
                                    <div class=" h-full flex float-end">
                                          <img src={hostName + "/assets/svg/dot-menu-more-svgrepo-com.svg"} alt="" />
                                    </div>
                              </section>
                        </section>
                  </div>
            </div>
      );
}