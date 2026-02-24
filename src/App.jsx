import CardContainer from "./components/CardContainer";
import { MovieProvider } from "./context/MainContext";
import DefaultLayout from "./layouts/DefaultLayout";

export default function App() {
  return (
    <MovieProvider>
      <DefaultLayout />
      <CardContainer />
    </MovieProvider>
  );
}
