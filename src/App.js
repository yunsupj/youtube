import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<NavBar />
			<YoutubeApiProvider>
				<QueryClientProvider client={queryClient}>
					<Outlet />
				</QueryClientProvider>
			</YoutubeApiProvider>
		</>
	);
}

export default App;
