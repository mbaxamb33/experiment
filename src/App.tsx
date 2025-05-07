import { AppSidebar } from "./components/app-sidebar";
import "./styles/fonts.css";
import "./styles/dark-mode.css";
import "./styles/black-theme.css"; 
import "./styles/light-theme.css"; // Import the light theme
import "./App.css";
import { SidebarProvider } from "./components/ui/sidebar";
import { ThemeProvider } from "./lib/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="pantopia-theme">
      <SidebarProvider>
        <div className="flex h-screen">
          <AppSidebar />
          <main className="flex-1 p-6 bg-background text-foreground">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h1 className="text-2xl font-bold">Main Content</h1>
              <p>Your application content goes here</p>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;