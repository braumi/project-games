import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { getGame } from "@/data/games";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { PlayPage } from "@/pages/PlayPage";

function HashGameRedirect() {
  const { hash } = useLocation();
  const id = hash.replace(/^#/, "");
  if (id && getGame(id)) return <Navigate to={`/play/${id}`} replace />;
  return <HomePage />;
}

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SiteShell>
            <HashGameRedirect />
          </SiteShell>
        }
      />
      <Route path="/games" element={<Navigate to="/" replace />} />
      <Route path="/play/:gameId" element={<PlayPage />} />
      <Route
        path="*"
        element={
          <SiteShell>
            <NotFoundPage />
          </SiteShell>
        }
      />
    </Routes>
  );
}
