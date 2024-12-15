import React from "react";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import AppRouter from "./routes/Router";

export const App = () => {
  return (
    <NextUIProvider>
      <main className="w-screen h-screen text-foreground">
        <AppRouter />
      </main>
    </NextUIProvider>
  );
};

export default App;
