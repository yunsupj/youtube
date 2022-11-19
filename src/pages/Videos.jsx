import React from "react";
import { useParams } from "react-router-dom";

export default function Video() {
	const { query } = useParams();

	return (
		<>
			<div>Video {query ? `👀${query}` : `😄`}</div>
		</>
	);
}
