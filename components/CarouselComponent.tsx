import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselComponent = () => {
	return (
		<Carousel>
			<CarouselContent>
				<CarouselItem>...</CarouselItem>
				<CarouselItem>...</CarouselItem>
				<CarouselItem>...</CarouselItem>
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};

export default CarouselComponent;
