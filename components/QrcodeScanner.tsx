//@ts-nocheck
"use client";

import React, { Component } from "react";
import QrReader from "react-qr-scanner";

const QrcodeScanner = () => {
	const handleScan = (data) => {
		state.result = data;
		console.log(data);
	};
	const handleError = (err) => {
		console.error(err);
	};

	const previewStyle = {
		height: 240,
		width: 320,
	};
	const state = {
		delay: 100,
		result: "No result",
	};

	return (
		<div>
			<QrReader
				delay={state.delay}
				style={previewStyle}
				onError={handleError}
				onScan={handleScan}
			/>
			<p>{state.result}</p>
		</div>
	);
};

export default QrcodeScanner;
