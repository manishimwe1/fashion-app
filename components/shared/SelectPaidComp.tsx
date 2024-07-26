import {
	Tabs,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs";
import { PurchaseStatus } from "@/lib/validations";

import {
	Dispatch,
	MouseEvent,
	SetStateAction,
	useEffect,
	useState,
} from "react";

type Props = {
	status: PurchaseStatus;
	setStatus: Dispatch<SetStateAction<PurchaseStatus>>;
};

const SelectPaidComp = ({ status, setStatus }: Props) => {
	useEffect(() => {
		setStatus(PurchaseStatus.notYet);
	}, []);

	console.log(status);
	const handlePaidStatus = (
		e: MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		e.preventDefault();
		console.log(e.currentTarget, "here");
	};
	return (
		<div className='w-full flex justify-between items-center gap-4'>
			<Tabs
				//@ts-ignore
				onValueChange={(value) => setStatus(value)}
				defaultValue={PurchaseStatus.notYet}
				className='w-full'>
				<TabsList className='bg-dark-2'>
					{Object.values(PurchaseStatus).map(
						(status) => (
							<TabsTrigger
								key={status}
								value={status}
								onChange={() =>
									setStatus(status)
								}>
								{status}
							</TabsTrigger>

							// <Badge
							// 	onClick={() => {
							// 		setStatus(status);
							// 	}}
							// 	className={cn(
							// 		"bg-transparent text-white font-normal hover:bg-transparent cursor-pointer",
							// 	)}>
							// 	{status}
							// </Badge>
						),
					)}
				</TabsList>
				{/* <TabsContent value='account'>
							Make changes to your account
							here.
						</TabsContent>
						<TabsContent value='password'>
							Change your password here.
						</TabsContent> */}
			</Tabs>
		</div>
	);
};

export default SelectPaidComp;
