import Layout from "./layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-screen min-h-screen bg-teal-900">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
