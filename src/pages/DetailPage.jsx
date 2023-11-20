import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import OhmygirlLogo from "assets/ohmygirlLogo.png";

const TopStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-family: "SCoreDream";
	height: 100vh;
`;

const MainBox = styled.div`
	background-color: #fff;
	border-radius: 20px;
	width: 800px;
	padding: 20px;
	box-shadow: 0px 4px 53px 0px rgba(0, 0, 0, 0.15);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Info = styled.div`
	background-image: url(${OhmygirlLogo});
	background-size: cover;
	background-position: center;
	width: 318px;
	height: 268px;
	margin-bottom: 20px;
`;

function DetailPage() {
	return (
		<TopStyle>
			<p
				style={{
					color: "#EEA8CC",
					marginBottom: "20px",
				}}
			>
				* 해당 자세히 보기 기능은 추후 업데이트 예정입니다 : ) *
			</p>
			<MainBox>
				<Info></Info>
				<Link
					to={`/`}
					style={{
						color: "#fff",
						backgroundColor: "#85c9dc",
						padding: "13px",
						borderRadius: "10px",
						boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.05)",
						transition: "all 0.5s ease",
					}}
				>
					페이지 이동
				</Link>
			</MainBox>
		</TopStyle>
	);
}

export default DetailPage;
