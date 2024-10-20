import { A } from "@solidjs/router";
import MenuDashboard from '../components/MenuDashboard';

export default function Home() {
  return (
    <main class="text-gray-700">
      <div class="flex h-svh divide-x-2 divide-black bg-">
        <div class="w-1/4 bg-cyan-900" id="Navigation-Pane">
          <div class="appname justify-center items-center flex my-[39px]">
            <img src="/assets/svg/App Title.svg" alt="" srcset="" />
          </div>
          <div class="searchConversation justify-center items-center flex">
            <input type="text" name="conversation" id="conversation" class="block w-full mx-10 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-100 sm:text-sm sm:leading-6 outline-none" placeholder="Search" />
          </div>
        </div>
        <div class="w-3/4 bg-cyan-900 relative" id="Conversation-Pane">
          <div class=" p-10  bottom-0">
            <input type="text" name="message" id="" class="rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-100 sm:text-sm sm:leading-6 outline-none" />
          </div>
        </div>
      </div>
    </main>
  );
}