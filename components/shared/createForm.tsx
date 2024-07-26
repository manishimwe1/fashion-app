"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { formSchema } from "@/lib/validations";
import { useFormState } from "react-dom";
import {
	createProduct,
	EditProduct,
} from "@/actions/productActions";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { ProductType } from "@/types";
import Link from "next/link";

export function CreateForm({
	product,
}: {
	product?: ProductType;
}) {
	const [submitting, setsubmitting] = useState(false);
	const router = useRouter();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: product?.title ?? "",
			inStock: product?.inStock ?? 0,
			description: product?.description ?? "",
			buyedAt: product?.buyedAt ?? 0,
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
		setsubmitting(true);
		if (product) {
			EditProduct(values, product._id).finally(() => {
				toast.success(
					"Product has been edit successfully.",
				);
				form.reset();
				setsubmitting(false);
				router.push("/");
			});
		} else {
			createProduct(values).finally(() => {
				toast.success(
					"Product has been added successfully.",
				);
				form.reset();
				setsubmitting(false);
				router.push("/");
			});
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8'>
				<div className='w-full flex flex-col sm:flex-row justify-between items-center gap-4'>
					<FormField
						control={form.control}
						name='title'
						render={({ field }) => (
							<FormItem className=' w-full flex-1'>
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
						name='inStock'
						render={({ field }) => (
							<FormItem className='sm:w-fit w-full'>
								<FormLabel>
									Product in stock
								</FormLabel>
								<FormControl className='w-full border'>
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

				<div className='flex w-full gap-4 sm:flex-row flex-col'>
					<div className='flex flex-row sm:flex-col sm:w-fit w-full gap-4'>
						<FormField
							control={form.control}
							name='buyedAt'
							render={({ field }) => (
								<FormItem className='w-full sm:w-fit'>
									<FormLabel>
<<<<<<< HEAD
										Yaranguwe
=======
										Buyed at
>>>>>>> c0a725d794c10a1486bd56c17b71dddaa06c3253
									</FormLabel>
									<FormControl>
										<Input
											placeholder='eg:100'
											type='number'
											className='text-sm placeholder:text-xs focus-visible:border-white/20 focus:border-white/20 focus-visible:ring-white/20 flex-1'
											min={0}
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='buyedAt'
							render={({ field }) => (
								<FormItem className='w-full sm:w-fit'>
									<FormLabel>
<<<<<<< HEAD
										Yaranguwe
=======
										Buyed at
>>>>>>> c0a725d794c10a1486bd56c17b71dddaa06c3253
									</FormLabel>
									<FormControl>
										<Input
											placeholder='eg:100'
											type='number'
											className='text-sm placeholder:text-xs focus-visible:border-white/20 focus:border-white/20 focus-visible:ring-white/20 flex-1'
											min={0}
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className='flex-1 w-full'>
						<FormField
							control={form.control}
							name='description'
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Description
									</FormLabel>
									<FormControl>
										<Textarea
											rows={6}
											placeholder='Description'
											className='text-sm placeholder:text-xs focus-visible:border-white/20 focus:border-white/20 focus-visible:ring-white/20'
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>
				<div className='w-full flex justify-end items-center gap-6'>
					<Button
						asChild
						type='button'
						className='text-white font-bold hover:bg-destructive border border-white/10 bg-transparent hover:transition-all duration-200 hover:ease-in-out '>
						<Link href='/'>
							<p>cancel</p>
						</Link>
					</Button>
					<Button
						type='submit'
						className='text-white font-bold hover:bg-[#141416] bg-[#212124] '
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
