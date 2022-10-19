import React from "react";
import SliderComponent from "./SliderComponent/sliderComponent";
import {
	boardOfDirectors,
	teamLeads,
	uxDesigners,
	frontEnd,
	backEnd,
	dataScience,
	webGL,
	writers,
} from "../aboutHelper";
import CurrentTeamSliderNav from "./currentTeamSliderNav/currentTeamSliderNav";

export default function CurrentTeamSlider() {
	const {title: boardTitle, members: boardMembers} = boardOfDirectors;
	const {title: teamLeadTitle, members: teamLeadMembers} = teamLeads;
	const {title: uxTitle, members: uxMembers} = uxDesigners;
	const {title: frontEndTitle, members: frontEndMembers} = frontEnd;
	const {title: backEndTitle, members: backEndMembers} = backEnd;
	const {title: dataScienceTitle, members: dataScienceMembers} = dataScience;
	const {title: webGLTitle, members: webGLMembers} = webGL;
	const {title: writersTitle, members: writersMembers} = writers;

	return (
		<div className={"team-slider-component-container"}>
			<CurrentTeamSliderNav />
			<SliderComponent title={boardTitle} members={boardMembers}/>
		</div>
	);
};
