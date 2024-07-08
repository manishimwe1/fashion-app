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

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}

export function DataTable<TData, TValue>({
	columns,
	data,
}: DataTableProps<TData, TValue>) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className='rounded-md border'>
			<Table className='border border-stone-300/20 bg-dark-2 rounded-lg'>
				<TableHeader className='border border-stone-400/20'>
					{table
						.getHeaderGroups()
						.map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map(
									(header) => {
										return (
											<TableHead
												key={
													header.id
												}>
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
				<TableBody className='border border-stone-400/20'>
					{table.getRowModel().rows?.length ? (
						table
							.getRowModel()
							.rows.map((row) => (
								<TableRow
									className=' border border-stone-400/20'
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
												}>
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
