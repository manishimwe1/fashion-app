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
import { Textarea } from "../ui/textarea";
import { formSchema, itemSchema } from "@/lib/validations";
import { createProduct } from "@/actions/productActions";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { createItemAction } from "@/actions/ItemsAction";

export function CreateItemForm({
	id,
	setShowAddItemsModel,
}: {
	id: string | undefined;
	setShowAddItemsModel: Dispatch<SetStateAction<boolean>>;
}) {
	const [submitting, setsubmitting] = useState(false);
	const router = useRouter();
	const form = useForm<z.infer<typeof itemSchema>>({
		resolver: zodResolver(itemSchema),
		defaultValues: {
			title: "",
			brand: "",
			description: "",
			price: 0,
			itemsInProduct: 0,
		},
	});

	function onSubmit(values: z.infer<typeof itemSchema>) {
		setsubmitting(true);
		createItemAction(values, id)
			.then((res) => {
				toast.success(
					"Item has been added successfully.",
				);
				setShowAddItemsModel(false);
				console.log(res, "this is comming results");

				router.push(`/product/${id}`);
			})
			.catch((error: any) => {
				toast.error("Error>>>", error.message);
				console.log(
					error.message,
					"Error in creating Product>>>>>",
				);
			})
			.finally(() => {
				form.reset();
			});
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8'>
				<div className='w-full flex justify-between items-center gap-4'>
					<FormField
						control={form.control}
						name='title'
						render={({ field }) => (
							<FormItem className=' w-[50%] flex-1 text-start'>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input
										placeholder='Enter product title'
										className='text-sm placeholder:text-xs focus-visible:border-white/20 focus:border-white/20 focus-visible:ring-white/20'
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='itemsInProduct'
						render={({ field }) => (
							<FormItem className='text-start w-[50%]'>
								<FormLabel>
									How many items in this
									product
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

				<div className='w-full flex justify-between items-center gap-4'>
					<FormField
						control={form.control}
						name='brand'
						render={({ field }) => (
							<FormItem className=' w-[50%] flex-1 text-start'>
								<FormLabel>
									Brand of item
								</FormLabel>
								<FormControl>
									<Input
										placeholder='Enter product title'
										className='text-sm placeholder:text-xs focus-visible:border-white/20 focus:border-white/20 focus-visible:ring-white/20'
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='price'
						render={({ field }) => (
							<FormItem className='text-start w-[50%]'>
								<FormLabel>
									Price per items
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

				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem className='text-start'>
							<FormLabel>
								Description
							</FormLabel>
							<FormControl>
								<Textarea
									rows={5}
									placeholder='Description'
									className='text-sm placeholder:text-xs focus-visible:border-white/20 focus:border-white/20 focus-visible:ring-white/20'
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<div className=' w-full flex items-end justify-end gap-3'>
					{/* <Button
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
					</Button> */}
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
}
