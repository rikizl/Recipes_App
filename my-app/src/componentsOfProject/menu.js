import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import AddRecipe from "./components/addRecipe";
import DisplayRecipe from "./components/displayRecipe";
import { Favorite } from "./components/favorites";
import Home from "./components/home";
import { SignIn } from "./components/signIn";
import { SignUp } from "./components/signUp";

export function Menu(props) {
  const currentUser = useSelector((store) => store.userStore.currentUser);
  // const currentUser={};
  console.log(currentUser);
  return (
    <>
      <Router>
        <div>
          <Link to="/">דף הבית</Link>
          <br />
          <Link to="/signIn">התחברות</Link>
          <br />
          <Link to="/signUp">הרשמה</Link>
          <br />
          {currentUser !== undefined && currentUser.id !== 0 && (
            <Link to="/favorite">ספר המתכונים שלי 🧡❤💛</Link>
          )}
          <br />
          {currentUser !== undefined && currentUser.id !== 0 && (
            <Link to="/addRecipe">הוספת מתכון</Link>
          )}
          <br />
        </div>
        <Routes>
          <Route path="/recipe/:id" element={<DisplayRecipe />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/addRecipe" element={<AddRecipe/>}/>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
