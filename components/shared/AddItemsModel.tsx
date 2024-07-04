import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Dispatch, SetStateAction } from "react";
import HeaderTitle from "./HeaderTitle";
import { CreateForm } from "./createForm";
import { CreateItemForm } from "./CreateItemForm";

type Props = {
	showAddItemsModel: boolean;
	setShowAddItemsModel: Dispatch<SetStateAction<boolean>>;
	id: string | undefined;
};
const AddItemsModel = ({
	setShowAddItemsModel,
	showAddItemsModel,
	id,
}: Props) => {
	return (
		<Dialog
			open={showAddItemsModel}
			onOpenChange={setShowAddItemsModel}
			modal>
			<DialogContent className='border border-white/20'>
				<DialogHeader>
					<HeaderTitle title='Create new item' />
					<DialogDescription>
						<CreateItemForm
							id={id}
							setShowAddItemsModel={
								setShowAddItemsModel
							}
						/>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default AddItemsModel;
