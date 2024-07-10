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
import CreateSelledItemForm from "./CreateSelledItemForm";
import { ProductType } from "@/types";

type Props = {
	showAddItemsModel: boolean;
	setShowAddItemsModel: Dispatch<SetStateAction<boolean>>;
	id?: string | undefined;
	sellProduct?: ProductType;
};
const AddItemsModel = ({
	setShowAddItemsModel,
	showAddItemsModel,
	id,
	sellProduct,
}: Props) => {
	return (
		<Dialog
			open={showAddItemsModel}
			onOpenChange={setShowAddItemsModel}
			modal>
			<DialogTitle></DialogTitle>
			<DialogContent className='border border-white/10 '>
				<DialogHeader>
					<HeaderTitle>
						{sellProduct ? (
							<p className='text-base mb-4'>
								Sell this{" "}
								<span className='text-lg text-green-300 font-semibold'>
									{sellProduct.title}
								</span>
							</p>
						) : (
							<p>Create new item</p>
						)}
					</HeaderTitle>
					<div>
						{sellProduct ? (
							<CreateSelledItemForm
								sellProduct={sellProduct}
								setShowAddItemsModel={
									setShowAddItemsModel
								}
							/>
						) : (
							<CreateItemForm
								id={id}
								setShowAddItemsModel={
									setShowAddItemsModel
								}
							/>
						)}
					</div>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default AddItemsModel;
