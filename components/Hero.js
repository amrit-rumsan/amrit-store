import Image from 'next/image';
import { FaRegLightbulb } from 'react-icons/fa';

export default function Hero() {
	return (
		<div className="h-[400px] flex items-center justify-center relative">
			<Image src="/images/bg.jpg" width={600} height={300} alt="bg" />
			<div className="w-10 h-10 grid place-items-center bg-red-500 rounded-full absolute top-2 left-[360px]">
				<span className="animate-ping bg-red-500 w-14 h-14 absolute rounded-full"></span>
				<span className="animate-ping w-10 h-10 bg-red-500 rounded-full absolute"></span>
				<span className="w-8 h-8 rounded-full grid place-items-center absolute text-white">
					<FaRegLightbulb />
				</span>
			</div>
		</div>
	);
}
