import React from "react";
import Header from "components/Header";
import AddForm from "components/AddForm";
import LetterList from "components/LetterList";
import { useState } from "react";

function HomePage() {
	const [letterList, setLetterList] = useState([]);
	const [selectedMember, setSelectedMember] = useState("효정");
	return (
		<>
			<Header
				selectedMember={selectedMember}
				setSelectedMember={setSelectedMember}
			/>
			<AddForm letterList={letterList} setLetterList={setLetterList} />
			<LetterList
				letterList={letterList}
				setLetterList={setLetterList}
				selectedMember={selectedMember}
			/>
		</>
	);
}

export default HomePage;
