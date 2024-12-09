export default function Message() {
	return (

		// TODO: pemanggilan pesan menggunakan foreach dari database
		<section class="row-span-8 text-white flex flex-col-reverse overflow-y-auto mt-1">
			<div class="grid grid-cols-2 mx-5 mt-5 gap-4">

				{/* TODO: penambahan hari atau tanggal relatif dan dinamis */}
				<div class="col-span-2 flex justify-center">
					<div class="text-lg w-fit bg-[#17394D] rounded-lg px-5 py-1 border-b-2 border-cyan-700">Friday</div>
				</div>

				{/* TODO: percantik desain bubble chatnya */}
				<div class="receive col-span-2">
					<div class="card w-1/2 h-fit bg-[#17394D] border-l-8 border-cyan-700 p-4 rounded-lg">
						<div class="message">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!
							<br />
							<br />
							Lorem ipsum dolor
							<br />
							<br />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!
						</div>
						<div class="timestamp flex justify-end mt-3">
							<span class="text-sm text-gray-400">12:00</span>
						</div>
					</div>
				</div>
				<div class="sent col-span-2 flex justify-end">
					<div class="card w-1/2 h-fit bg-[#17394D] border-r-8 border-cyan-700 p-4 rounded-lg">
						<div class="message">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!
						</div>
						<div class="timestamp flex justify-end mt-3">
							<span class="text-sm text-gray-400">12:00</span>
						</div>
					</div>
				</div>
				{/* You can add more message divs here */}
			</div>
		</section>
	);
}
