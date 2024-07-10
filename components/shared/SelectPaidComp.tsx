import { cn } from "@/lib/utils";
import { PurchaseStatus } from "@/lib/validations";
import { Badge } from "../ui/badge";
import { Checkbox } from "../ui/checkbox";

const SelectPaidComp = () => {
	const paidStatus = [1, 2, 3];
	const handlePaidStatus = () => {};
	return (
		<div className='w-full flex justify-between items-center gap-4'>
			{Object.values(PurchaseStatus).map((status) => (
				<div
					className={cn(
						"flex w-fit gap-2 items-center rounded-full text-white px-2 py-1 cursor-pointer",
						status === "not yet" &&
							"bg-red-500  hover:bg-red-700",
						status === "pending" &&
							"bg-blue-500  hover:bg-blue-700",
						status === "success" &&
							"bg-green-500  hover:bg-green-700",
					)}>
					<Checkbox
						id={status}
						value={status}
						onChange={(e) => {
							handlePaidStatus;
						}}
					/>
					<label htmlFor={status}>
						<Badge
							onClick={handlePaidStatus}
							className={cn(
								"bg-transparent text-white font-normal hover:bg-transparent cursor-pointer",
							)}>
							{status}
						</Badge>
					</label>
				</div>
			))}
		</div>
	);
};

export default SelectPaidComp;
