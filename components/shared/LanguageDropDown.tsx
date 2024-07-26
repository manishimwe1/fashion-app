import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const LanguageDropDown = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div className='flex gap1 items-center'>
					<span className='text-sm'>ENG</span>
					<ChevronDown className='h-4 w-4' />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>EUR</DropdownMenuItem>
				<DropdownMenuItem>CAD</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default LanguageDropDown;
