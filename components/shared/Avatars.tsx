import { createAvatar } from "@dicebear/core";
import { lorelei, rings } from "@dicebear/collection";
import Image from "next/image";

type Props = {
	seed: string;
	width: number;
	height: number;
};

const Avatars = ({ seed, width, height }: Props) => {
	const avatar = createAvatar(rings, {
		seed,
		// ... other options
	});
	const svg = avatar.toDataUri();
	return (
		<img
			src={svg}
			width={width}
			height={height}
			alt='avatars'
		/>
	);
};

export default Avatars;
