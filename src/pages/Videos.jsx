import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Video() {
	const { query } = useParams();
	const { youtube } = useYoutubeApi();
	const {
		isLoading,
		error,
		data: videos,
	} = useQuery(["videos", query], () => youtube.search(query));

	return (
		<>
			<div>Video {query ? `👀${query}` : `😄`}</div>
			{isLoading && <p>Loading...</p>}
			{error && <p>ERROR Found!!</p>}
			{videos && (
				<ul className="grid sm:grid-cols-1 md:sm:grid-cols-2 lg:sm:grid-cols-3 xl:sm:grid-cols-4 2xl:sm:grid-cols-5 gap-2 gap-y-4">
					{videos.map((video) => (
						<VideoCard key={video.id} video={video} />
					))}
				</ul>
			)}
		</>
	);
}
