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
          element={<Page style={{ display: "", lineHeight: "1.4em" }}>You're eligible for a 14-day refund as soon as your package arrives.<br />Just contact us via <a style={{ fontWeight: 700 }} href="mailto:info@ambrosica.com">Email</a> and we will answer!</Page>}
        />
      </Routes>
    </div>
  )
}

export default App
