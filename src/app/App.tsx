import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { getGame } from "@/data/games";
import { HomePage } from "@/pages/home/HomePage";
import { NotFoundPage } from "@/pages/not-found/NotFoundPage";
import { PlayPage } from "@/pages/play/PlayPage";

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
          <AppShell>
            <HashGameRedirect />
          </AppShell>
        }
      />
      <Route path="/games" element={<Navigate to="/" replace />} />
      <Route path="/play/:gameId" element={<PlayPage />} />
      <Route
        path="*"
        element={
          <AppShell>
            <NotFoundPage />
          </AppShell>
        }
      />
    </Routes>
  );
}
