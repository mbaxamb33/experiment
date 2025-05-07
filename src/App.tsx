import { AppSidebar } from "./components/app-sidebar";
// Import the custom font CSS
import "./styles/fonts.css";
import "./styles/dark-mode.css";
import "./styles/black-theme.css"; // Import the new black theme
import "./App.css";
import { SidebarProvider } from "./components/ui/sidebar";

function App() {
  return (
    <SidebarProvider>
      <div className="flex h-screen dark" style={{backgroundColor: "#000000"}}>
        <AppSidebar />
        <main className="flex-1 p-6 bg-black text-white" style={{backgroundColor: "#000000", color: "#ffffff"}}>
          <div className="flex flex-col items-center justify-center h-full text-center bg-black">
            <h1 className="text-2xl font-bold text-white">Main Content</h1>
            <p className="text-white">Your application content goes here</p>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

export default App;