import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import Page from "./components/templates/Page"

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/privacy"
          element={<Page>We only process the data you provide to us via interaction with the UI</Page>}
        />
        <Route
          path="/refunds"
          element={<Page style={{ display: "", lineHeight: "1.4em" }}>
            So you're already looking into the refunds section... Fair enough, but make sure to redeem your refund within 12 days after receiving the order.
          </Page>}
        />
      </Routes>
    </div>
  )
}

export default App
