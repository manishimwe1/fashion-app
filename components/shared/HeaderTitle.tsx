"use client";

import React, { ReactNode, useState } from "react";
import { Button } from "../ui/button";
import AddItemsModel from "./AddItemsModel";

const HeaderTitle = ({
	title,
	element,
	button,
	btnText,
	id,
}: {
	title?: string;
	element?: ReactNode;
	button?: boolean;
	btnText?: string;
	id?: string;
}) => {
	const [showAddItemsModel, setShowAddItemsModel] =
		useState(false);

	return (
		<div className='flex items-center w-full gap-4 justify-between relative'>
			{title && (
				<h2 className='text-white text-lg text-start'>
					{title}
				</h2>
			)}
			{element && (
				<div className='flex items-center gap-2'>
					{element}
				</div>
			)}
			{button && (
				<Button
					className='bg-[#27272A] text-white hover:bg-[#1c1c20]'
					onClick={() =>
						setShowAddItemsModel(
							!showAddItemsModel,
						)
					}>
					{btnText}
				</Button>
			)}
			{/* showAddItemsModel */}
			{showAddItemsModel && (
				<AddItemsModel
					id={id}
					showAddItemsModel={showAddItemsModel}
					setShowAddItemsModel={
						setShowAddItemsModel
					}
				/>
			)}
		</div>
	);
};

export default HeaderTitle;
