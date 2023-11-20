import Ohmygirl from "assets/ohmygirl.png";
import { useState } from "react";
import styled from "styled-components";
const members = ["효정", "미미", "유아", "승희", "유빈", "아린"];

const Bg = styled.div`
	background-image: url(${Ohmygirl});
	background-size: cover;
	background-position: center;
	height: 500px;
	width: 100%;
	margin-bottom: 20px;
`;

const ButtonBox = styled.ul`
	background-color: blue;
	display: flex;
	position: relative;
	left: 50vw;
	transform: translate(-50%, -50%);
	top: 500px;
	width: 800px;
	border-radius: 20px;
	box-shadow: 0px 4px 53px 0px rgba(0, 0, 0, 0.15);
	// border: 1px solid #cfcfcf;
	background: rgba(104, 202, 255, 0.15);
	backdrop-filter: blur(10.5px);
	padding: 20px 25px;
`;

const LiStyle = styled.button`
	color: ${(props) => (props.$isSelected ? "#fff" : "#85c9dc")};
	padding: 15px;
	margin: 0 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 200px;
	background-color: ${(props) => (props.$isSelected ? "#EEA8CC" : "#fff")};
	border-radius: 10px;
	font-family: "SCoreDream";
	cursor: pointer;
	transition: all 0.5s ease;
	&:hover {
		transform: scale(1.1);
	}
`;

function Header({ selectedMember, setSelectedMember }) {
	const memberSelectHandler = (e) => {
		setSelectedMember(e.target.innerHTML);
		console.log(selectedMember);
	};
	return (
		<Bg>
			<ButtonBox>
				{members.map((member) => {
					return (
						<LiStyle
							$isSelected={member === selectedMember}
							onClick={memberSelectHandler}
						>
							{member}
						</LiStyle>
					);
				})}
			</ButtonBox>
		</Bg>
	);
}

export default Header;
