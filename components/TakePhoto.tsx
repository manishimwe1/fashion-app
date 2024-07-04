"use client";

import React from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

function TakePhotoApp(props: any) {
	console.log(props);

	function handleTakePhoto(dataUri: string) {
		// Do stuff with the photo...
		console.log("takePhoto");
	}

	return (
		<Camera
			onTakePhoto={(dataUri) => {
				handleTakePhoto(dataUri);
			}}
		/>
	);
}

export default TakePhotoApp;
