import React from "react";
import Letter from "./Letter";
import AddForm from "./AddForm";
function LetterList({ letterList, setLetterList, selectedMember }) {
	return (
		<>
			{letterList
				.filter((letter) => {
					return letter.recipient === selectedMember;
				})
				.map((letter) => {
					return <Letter key={letter?.id} letter={letter}></Letter>;
				})}
		</>
	);
}

export default LetterList;

// setsubmittedData 관련한 것을 다 지우자
