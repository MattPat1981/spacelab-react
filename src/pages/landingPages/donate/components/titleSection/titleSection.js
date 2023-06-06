import React from "react";
import { Link } from "react-router-dom";
import DONATE_IMAGE from "../../assets/donate_title_section_image.png";
import ROCKET_ICON_IMAGE from "../../assets/icon _rocket.png";
import "./titleSection.scss";

const TitleSection = () => {
	return (
		<>
			<section id="title-container">
				<div className="title-content">
					<div className="title-section-form">
						<h2 className="form-title">
							DONATE TO SUPPORT DIVERSITY IN TECH
						</h2>
						<h4 className="custom-text--larger">
							With your support, we can create equal opportunities
							for underrepresented groups through paid programs
							and financial assistance.
						</h4>
						<Link
							to={"/campaigns/donate/donate-payment"}
							style={{ textDecoration: "none" }}
						>
							<button
								className="donate-button"
								component={Link}
								to={"/campaigns/donate/donate-payment"}
							>
								Donate
							</button>
						</Link>
					</div>
					<div className="title-image-container">
						<img
							src={DONATE_IMAGE}
							alt={
								"Women of color and non-binary, talking to each other in a group"
							}
							className="women-of-color"
							loading="lazy"
						/>
					</div>
				</div>
				<div className="icon-container-1">
					<img
						src={ROCKET_ICON_IMAGE}
						alt={"rocket ship icon"}
						className="rocket-ship-icon"
					/>
				</div>
			</section>
		</>
	);
};

export default TitleSection;
