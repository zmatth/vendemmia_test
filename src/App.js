import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <AuthProvider>
      <RoutesApp/>
    </AuthProvider>
  );
}

export default App;
