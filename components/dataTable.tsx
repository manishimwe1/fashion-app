"use client";

import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

interface DataTableProps<ProductType, TValue> {
	columns: ColumnDef<ProductType, TValue>[];
	data: ProductType[];
}

export function DataTable<ProductType, TValue>({
	columns,
	data,
}: DataTableProps<ProductType, TValue>) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className=''>
			<Table className=' bg-dark-2 rounded-md'>
				<TableHeader className={""}>
					{table
						.getHeaderGroups()
						.map((headerGroup) => (
							<TableRow
								key={headerGroup.id}
								className=' border-white/20 rounded-md'>
								{headerGroup.headers.map(
									(header) => {
										return (
											<TableHead
												key={
													header.id
												}
												className='font-semibold text-base text-nowrap text-stone-400'>
												{header.isPlaceholder
													? null
													: flexRender(
															header
																.column
																.columnDef
																.header,
															header.getContext(),
													  )}
											</TableHead>
										);
									},
								)}
							</TableRow>
						))}
				</TableHeader>
				<TableBody className='border border-stone-400/20 rounded-md'>
					{table.getRowModel().rows?.length ? (
						table
							.getRowModel()
							.rows.map((row) => (
								<TableRow
									className=' border border-stone-400/20 rounded-md'
									key={row.id}
									data-state={
										row.getIsSelected() &&
										"selected"
									}>
									{row
										.getVisibleCells()
										.map((cell) => (
											<TableCell
												key={
													cell.id
												}
												className='rounded-md text-stone-400 cursor-pointer hover:transition-all hover:scale-105 hover:duration-200 hover:ease-in-out hover:text-green-200 !py-3 !border-white/5 text-xs md:text-sm'>
												{flexRender(
													cell
														.column
														.columnDef
														.cell,
													cell.getContext(),
												)}
											</TableCell>
										))}
								</TableRow>
							))
					) : (
						<TableRow>
							<TableCell
								colSpan={columns.length}
								className='h-24 text-center'>
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	);
}
