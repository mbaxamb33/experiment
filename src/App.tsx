import { AppSidebar } from "./components/app-sidebar";
// If the above import path doesn't work, try:
// import { AppSidebar } from "./src/components/app-sidebar";
// Adjust based on your project structure

import "./App.css";

function App() {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p>Your application content goes here</p>
      </main>
    </div>
  );
}

export default App;