import ChatContent from "./ChatContent";

export default function Message() {
	return (
		<section class="row-span-8 text-white flex flex-col-reverse overflow-y-auto mt-1 py-4">
			<div class="grid grid-cols-2 mx-5 gap-4">
				{/* <div class="col-span-2 flex justify-center ">
					<div class="shadow-xl bg-[#17394D] rounded-lg px-5 py-1 border-b-4 border-[#0E8388]">
						Friday
					</div>
				</div> */}
				<ChatContent
					sender="listener"
					message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
							commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!"
					time="12.00"
				/>
				<ChatContent
					sender="sender"
					message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
							commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!"
					time="12.01"
				/>
				<ChatContent
					sender="listener"
					message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
							commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!"
					time="12.00"
				/>
				<ChatContent
					sender="sender"
					message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
							commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!"
					time="12.01"
				/>
				<ChatContent
					sender="listener"
					message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
							commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!"
					time="12.00"
				/>
				<ChatContent
					sender="sender"
					message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
							commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!"
					time="12.01"
				/>
				<ChatContent
					sender="listener"
					message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
							commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!"
					time="12.00"
				/>
				<ChatContent
					sender="sender"
					message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
							commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!"
					time="12.01"
				/>
				{/* You can add more message divs here */}
			</div>
		</section>
	);
}
