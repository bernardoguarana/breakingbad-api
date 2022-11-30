import { Route, Routes } from "react-router-dom";
import { BetterCallSaul } from "./pages/BetterCallSaul";
import { BreakingBad } from "./pages/BreakingBad";
import { Home } from "./pages/Home";


export function Router() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/breaking-bad" element={<BreakingBad />} />
                <Route path="/better-call-saul" element={<BetterCallSaul />} />
            </Routes>
        </>
    )

}