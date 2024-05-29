import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const MobileMenu = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<MenuIcon className='h-10 w-10 text-stone-600' />
			</SheetTrigger>
			<SheetContent side={"right"}>
				<SheetHeader>
					<SheetTitle>
						Are you absolutely sure?
					</SheetTitle>
					<SheetDescription>
						This action cannot be undone. This
						will delete your account
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default MobileMenu;
