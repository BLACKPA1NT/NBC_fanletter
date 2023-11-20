import React, { useState } from "react";
import styled from "styled-components";
import Letter from "./Letter";

const BigBoxStyle = styled.div`
	margin-top: 80px;
	display: flex;
	justify-content: center;
	text-align: center;
	font-family: "SCoreDream";
	// backgroundColor: aqua;
`;

const BoxStyle = styled.form`
	background-color: #fff;
	border-radius: 20px;
	width: 800px;
	padding: 15px;
	box-shadow: 0px 4px 53px 0px rgba(0, 0, 0, 0.15);
	margin-bottom: 50px;
`;

const IndexStyle = styled.section`
	margin: 40px;
	font-size: 24px;
	font-weight: 400;
	display: flex;
	justify-content: space-between;
	color: #85c9dc;
	display: flex;
	align-items: center;
`;

const Divstyle = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 40px;
`;

const ButtonStyle = styled.button`
	background-color: #85c9dc;
	color: #fff;
	padding: 10px;
	border-radius: 10px;
	font-weight: 600;
`;

const InputTextStyle = styled.input`
	width: 85%;
	background-color: #fafafa;
	border: none;
	border-radius: 10px;
	color: #85c9dc;
	font-size: 18px;
	padding: 10px;
	&::placeholder {
		color: #85c9dc;
	}
`;

function AddForm({
	submittedData,
	setSubmittedData,
	letterList,
	setLetterList,
}) {
	const [nickname, setNickname] = useState("");
	const [content, setContent] = useState("");
	const [recipient, setRecipient] = useState("효정");

	const handleNicknameChange = (event) => {
		setNickname(event.target.value);
	};

	const handleContentChange = (event) => {
		setContent(event.target.value);
	};

	const handleRecipientChange = (event) => {
		setRecipient(event.target.value);
	};

	const handleSubmit = (event) => {
		// 추출된 값으로 무언가 수행
		event.preventDefault();
		console.log("닉네임:", nickname);
		console.log("내용:", content);
		console.log("수신자:", recipient);
		const letter = { nickname, content, recipient, id: crypto.randomUUID() };
		setLetterList((prevList) => [letter, ...prevList]);
		// 입력 필드 초기화
		// setNickname("");
		// setContent("");
		// setRecipient("효정");
		alert(`${recipient}에게 팬레터 등록이 완료되었습니다!`);
	};

	return (
		<>
			<BigBoxStyle>
				<BoxStyle>
					<IndexStyle>
						<span>닉네임:</span>
						<InputTextStyle
							type="text"
							placeholder="최대 20글자까지 작성할 수 있습니다."
							maxLength="20"
							onChange={handleNicknameChange}
						></InputTextStyle>
					</IndexStyle>
					<IndexStyle>
						<span>내용:</span>
						<InputTextStyle
							type="text"
							placeholder="최대 100자까지만 작성할 수 있습니다."
							maxLength="100"
							onChange={handleContentChange}
						></InputTextStyle>
					</IndexStyle>
					<IndexStyle>
						<span>누구에게 보내실 건가요?</span>
						<select
							value={recipient}
							onChange={handleRecipientChange}
							style={{
								backgroundColor: "#fafafa",
								border: "none",
								borderRadius: "10px",
								color: "#85c9dc",
								fontSize: "18px",
								padding: "10px",
							}}
						>
							<option value={"효정"}>효정</option>
							<option value={"미미"}>미미</option>
							<option value={"유아"}>유아</option>
							<option value={"승희"}>승희</option>
							<option value={"유빈"}>유빈</option>
							<option value={"아린"}>아린</option>
						</select>
					</IndexStyle>
					<Divstyle>
						<ButtonStyle onClick={handleSubmit}>팬래터 등록</ButtonStyle>
					</Divstyle>
				</BoxStyle>
			</BigBoxStyle>
		</>
	);
}

export default AddForm;
