import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import SiteHeader from "./components/SiteHeader";
import SeasonSection from "./components/SeasonSection";
import RankingSection from "./components/RankingSection";

import GlobalContextProvider from "./store/GlobalContextProvider";

function App() {
	return (
		<GlobalContextProvider>
			<ChakraProvider>
				<SiteHeader />
				<div className="flex flex-row w-screen justify-center bg-light">
					<div className="flex flex-col space-y-10 w-[1200px] mt-5 p-3">
						<SeasonSection />
						<RankingSection />
					</div>
				</div>
			</ChakraProvider>
		</GlobalContextProvider>
	);
}

export default App;
