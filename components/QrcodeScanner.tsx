//@ts-nocheck
"use client";

import React, { Component } from "react";
import QrReader from "react-qr-scanner";

// class Test extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			delay: 100,
// 			result: "No result",
// 		};

// 		this.handleScan = this.handleScan.bind(this);
// 	}
// 	handleScan(data) {
// 		this.setState({
// 			result: data,
// 		});
// 	}
// 	handleError(err) {
// 		console.error(err);
// 	}
// 	render() {
// 		const previewStyle = {
// 			height: 240,
// 			width: 320,
//         };

// 		return (
// 			<div>
// 				<QrReader
// 					delay={this.state.delay}
// 					style={previewStyle}
// 					onError={this.handleError}
// 					onScan={this.handleScan}
// 				/>
// 				<p>{this.state.result}</p>
// 			</div>
// 		);
// 	}
// }

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
