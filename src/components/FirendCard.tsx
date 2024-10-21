export default function FriendsCard() {
      const hostName = import.meta.env.VITE_HOSTNAME;
      
      return (
            <div class="flex justify-center items-center">
                  <div class="w-full mx-10 hover:bg-[#17394D] cursor-pointer rounded border-t-2 border-[#17394D]  p-3">
                        <section class="grid grid-cols-3">
                              <div class="flex grid-cols-3 col-span-2 w-fit">
                                    <img class="mx-2"
                                          src={hostName + "/assets/svg/Conversation Image.svg"}
                                          alt="Profile Image"
                                          />
                                    <div class="text mx-2 col-span-2">
                                          <h2 class="text-lg font-bold text-white">Ius</h2>
                                          <p class="text-sm text-slate-200">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, architecto.</p>
                                    </div>
                              </div>
                              <section>
                                    <div class=" h-full flex float-end">
                                          <img src={hostName + "/assets/svg/dot-menu-more-svgrepo-com.svg"} alt="" />
                                    </div>
                              </section>
                        </section>
                  </div>
            </div>
      );
}