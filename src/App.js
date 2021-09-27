import "./App.css";
import { useState } from "react";
import ContentNav from "./components/ContentNav/ContentNav";
import Planets from "./components/Planets/Planets";
import People from "./components/People/People";
import { Container } from "react-bootstrap";
import { QueryClient, QueryClientProvider } from "react-query";
import Invalid from "./components/Invalid";
import { ReactQueryDevtools } from "react-query/devtools";
import Update from "./components/Update/Update";
const queryClient = new QueryClient();
function App() {
  const [page, setPage] = useState("planets");

  const renderContent = (page) => {
    switch (page) {
      case "planets":
        return <Planets />;
      case "people":
        return <People />;
      case "invalid":
        return <Invalid />;
      case "update":
        return <Update />;

      default:
        break;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Container className="text-light">
        <h1>Stars Wars</h1>
        <ContentNav page={setPage} />
        <div className="content position-static">{renderContent(page)}</div>
      </Container>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
