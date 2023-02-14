import { Route, Routes } from "react-router-dom";
import { Home, Blog, About, NotFound, Post, Login } from "./pages";
import { Layout } from "./components/Layout";
import { RequireAuth } from "./hoc/RequireAuth";
import { LoginProvider } from "./hoc/LoginProvider";
import { Counter } from "./components/Counter";

function App() {
  return (
    <LoginProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="posts"
            element={
              <RequireAuth>
                <Blog />
              </RequireAuth>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="login" element={<Login />} />
          <Route path="counter" element={<Counter />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </LoginProvider>
  );
}

export default App;
