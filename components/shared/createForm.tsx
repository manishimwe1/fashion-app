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

const formSchema = z.object({
	title: z.string().min(2, {
		message: "Title must be at least 2 characters.",
	}),
	inStock: z.coerce.number(),
	description: z.string(),
});

export function CreateForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			inStock: 0,
			description: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
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
							<FormItem>
								<FormLabel>
									Product in stock
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
						<FormItem>
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

				<Button
					type='submit'
					className='text-white font-bold hover:bg-[#141416] bg-[#212124]'>
					Submit
				</Button>
			</form>
		</Form>
	);
}
