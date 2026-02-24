import { MovieProvider } from "./context/MainContext";
import DefaultLayout from "./layouts/DefaultLayout";

export default function App() {
  return (
    <MovieProvider>
      <DefaultLayout />
      <h1>Demo Vite & React</h1>
    </MovieProvider>
  );
}
