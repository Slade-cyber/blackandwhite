import "./index.css";
import { NextUIProvider } from "@nextui-org/react";

export const App = () => {
  return (
    <NextUIProvider>
      <main className="w-screen h-screen bg-gradient-to-r from-sky-950 to-slate-900 dark text-foreground">
        <AppRouter />
      </main>
    </NextUIProvider>
  );
};

export default App;
