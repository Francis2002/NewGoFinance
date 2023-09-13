import Home from "./pages/Home"
import Index from "./pages/Index"
import Lesson from "./pages/Lesson"
import Completed from "./pages/Completed"

function App() {

  return (
    <main className="app transition-all ease-in">
      <Index />
      <Home />
      <Lesson />
      <Completed />
    </main>
  )
}

export default App
