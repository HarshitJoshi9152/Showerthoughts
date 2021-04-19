import React from "react";
import "./header.css";

import constructionSign from "./../assets/icons/construction.svg";

const icon = {
	width: "32px",
	height: "32px",
	color: "white"
};

export default function Header(props) {
	return (
		<header>
			{/*welcome to The Open Source reddit client focused on browsing{" "}*/}
			<span>
				<img
					src="https://styles.redditmedia.com/t5_2szyo/styles/communityIcon_x3ag97t82z251.png?width=256&s=33531dceba6466953aadef3073f36cfc2e267175"
					alt="showerthoughts subreddit logo"
					width="50px"
					height="50px"
				/>
				<a
					href="https://reddit.com/r/showerthoughts"
					className="banner"
				>
					r/showerthoughts
				</a>
			</span>
			{/* SITE STILL IN DEVELOPMENT NOTICE */}
			<NOTICE />
		</header>
	);
}

function NOTICE() {
	return (
		<span
			style={{
				marginLeft: "10px",
				backgroundColor: "#ffc861",
				color: "#2f4360",
				borderRadius: "10px"
			}}
		>
			<img src={constructionSign} alt="construction sign" style={icon} />
			this website is still a work in progress check sometime later ...
			thanks!
		</span>
	);
}
