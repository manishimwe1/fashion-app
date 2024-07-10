"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	PurchaseStatus,
	selledItemSchema,
} from "@/lib/validations";
import { ProductType } from "@/types";
import { Loader2 } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import SelectPaidComp from "./SelectPaidComp";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

const CreateSelledItemForm = ({
	setShowAddItemsModel,
	sellProduct,
}: {
	setShowAddItemsModel: Dispatch<SetStateAction<boolean>>;
	sellProduct: ProductType;
}) => {
	const [submitting, setsubmitting] = useState(false);

	if (!sellProduct)
		return (
			<div className='flex justify-center items-center h-screen'>
				<Loader2 size={64} />
			</div>
		);
	const form = useForm<z.infer<typeof selledItemSchema>>({
		resolver: zodResolver(selledItemSchema),
		defaultValues: {
			product: sellProduct.title,
			paid: PurchaseStatus.notYet,
			selledOn: 0,
			buyedAt: sellProduct.buyedAt,
			date: "",
			selledTo: "",
		},
	});

	function onSubmit(
		values: z.infer<typeof selledItemSchema>,
	) {
		setsubmitting(true);
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8 flex-1 '>
				<div className='w-full flex justify-between items-center gap-4'>
					<FormField
						control={form.control}
						name='product'
						render={({ field }) => (
							<FormItem className=' w-[50%] flex-1 text-start'>
								<FormLabel>
									Product name
								</FormLabel>
								<FormControl>
									<Input
										placeholder='Enter product name you sell'
										className='text-sm placeholder:text-xs focus-visible:border-white/20 focus:border-white/20 focus-visible:ring-white/20'
										disabled
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='selledTo'
						render={({ field }) => (
							<FormItem className=' w-[50%] flex-1 text-start'>
								<FormLabel>
									Client name
								</FormLabel>
								<FormControl>
									<Input
										placeholder='Unknown'
										className='text-sm placeholder:text-xs focus-visible:border-white/20 focus:border-white/20 focus-visible:ring-white/20'
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className='w-full flex justify-between items-center gap-4'>
					<FormField
						control={form.control}
						name='buyedAt'
						render={({ field }) => (
							<FormItem className='text-start w-[50%]'>
								<FormLabel>
									Buyed at
								</FormLabel>
								<FormControl>
									<Input
										placeholder='eg:100'
										type='number'
										className='text-sm placeholder:text-xs focus-visible:border-white/20 focus:border-white/20 focus-visible:ring-white/20 flex-1'
										disabled
										min={1}
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='selledOn'
						render={({ field }) => (
							<FormItem className='text-start w-[50%]'>
								<FormLabel>
									Selled on
								</FormLabel>
								<FormControl>
									<Input
										placeholder='eg:100'
										type='number'
										className='text-sm placeholder:text-xs focus-visible:border-white/20 focus:border-white/20 focus-visible:ring-white/20 flex-1'
										min={1}
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className='w-full flex items-center justify-between'>
					<FormField
						control={form.control}
						name='selledOn'
						render={({ field }) => (
							<FormItem className=''>
								<FormLabel>Paid</FormLabel>
								<FormControl>
									<SelectPaidComp />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className=' w-full flex items-end justify-end gap-3'>
					<Button
						type='button'
						className='text-white font-bold hover:bg-[#141416]  bg-stone-800 '
						disabled={submitting}>
						{submitting ? (
							<div className='flex items-center gap-2 w-full'>
								<p>Scan Qrcode</p>{" "}
								<Loader2 className='animate-spin h-5 w-5' />
							</div>
						) : (
							<p className='font-normal'>
								Scan Qrcode
							</p>
						)}
					</Button>
					<Button
						type='submit'
						className='text-white font-bold hover:bg-[#141416] bg-[#000000] '
						disabled={submitting}>
						{submitting ? (
							<div className='flex items-center gap-2 w-full'>
								<p>Adding</p>{" "}
								<Loader2 className='animate-spin h-5 w-5' />
							</div>
						) : (
							<p>Add</p>
						)}
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default CreateSelledItemForm;
