import React from "react";
import { useNavigate } from "react-router-dom";
// import FakeData from "../db/fakeData.json";
import styled from "styled-components";
import { Link } from "react-router-dom";

const members = ["효정", "미미", "유아", "승희", "유빈", "아린"];

const BigBoxStyle = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	font-family: "SCoreDream";
	margin-bottom: 80px;
	/* background-color: aqua; */
`;

const BoxStyle = styled.form`
	background-color: #fff;
	border-radius: 20px;
	width: 800px;
	padding: 10px;
	box-shadow: 0px 4px 53px 0px rgba(0, 0, 0, 0.15);
	transition: all 0.5s ease;
	cursor: pointer;
	&:hover {
		transform: scale(1.05);
	}
`;

const IndexStyle = styled.section`
	margin: 35px;
	font-size: 18px;
	font-weight: 400;
	line-height: 30px;
	display: flex;
	justify-content: left;
	align-items: center;
	color: #85c9dc;
	text-align: left;
`;

const SmallIndexStyle = styled.section`
	margin-right: 40px;
`;

const Sentence = styled.p`
	overflow: hidden;
	text-overflow: ellipsis;
	height: 20px;
	word-wrap: break-word;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
`;

const IconImage = styled.p`
	background-color: "#EFE59D";
	width: "80px";
	height: "80px";
	border-radius: "100px";
	box-shadow: "0px 4px 53px 0px rgba(0, 0, 0, 0.15)";
`;

function Letter({ letter }) {
	console.log(
		"받은 데이터:",
		letter?.nickname,
		letter?.content,
		letter?.recipient
	);

	const navigate = useNavigate();

	return (
		<BigBoxStyle>
			<BoxStyle>
				<Link to={{ pathname: "/detail", state: { letterData: letter } }}>
					<IndexStyle>
						<SmallIndexStyle>
							<p
								style={{
									backgroundColor: "#EFE59D",
									width: "80px",
									height: "80px",
									borderRadius: "100px",
									boxShadow: "0px 4px 53px 0px rgba(0, 0, 0, 0.15)",
								}}
							></p>
						</SmallIndexStyle>
						<section>
							<h1>To.{`${letter?.recipient}`}</h1>
							<p style={{ color: "#EFE59D" }}>From.{`${letter?.nickname}`}</p>
							<Sentence
								style={{ color: "#EEA8CC" }}
							>{`${letter?.content}`}</Sentence>
						</section>
					</IndexStyle>
				</Link>
			</BoxStyle>
		</BigBoxStyle>
	);
}

export default Letter;
