import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dayoffs from './pages/Dayoffs';
import NewUpdate from './pages/NewUpdate';

export default function DayoffsRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dayoffs/>} />
        <Route path="/newupdate/:dayoff_id" element={<NewUpdate/>} />
      </Routes>
    </BrowserRouter>
  );
}