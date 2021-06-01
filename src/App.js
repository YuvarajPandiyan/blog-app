import { Route, Switch, useLocation } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import NavBar from "./components/navbar/NavBar";
import AlbumPage from "./pages/album/Album.js";
import Login from "./pages/login/Login.js";
import PhotoPage from "./pages/photos/Photos.js";
import PostPage from "./pages/post/Post.js";
import HomePage from "./pages/posts/index.js";
import ToDoPage from "./pages/toDo/Todo.js";
import User from "./pages/user/User.js";
import CreatePostPage from "./pages/create post/CreatePost.js";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";

localStorage.setItem("username", "admin");
localStorage.setItem("password", "admin");
localStorage.setItem("authenticated", "false");

const theme = extendTheme({
  colors: {
    brand: {
      100: "rgb(236, 234, 234)",
      900: "#1a202c",
    },
  },
});

function App() {
  const path = useLocation();
  return (
    <div className="App">
      {path.pathname !== "/login" ? <NavBar /> : null}
      <Switch>
        <Route exact path="/" children={<HomePage />} />
        <Route path="/posts/:postId" children={<PostPage />} />
        <Route path="/users/posts/:postId" children={<PostPage />} />
        <Route path="/users/:userId" children={<User />} />
        <Route path="/todo" children={<ToDoPage />} />
        <Route exact path="/albums" children={<AlbumPage />} />{" "}
        <Route path="/albums/:albumId/photos" children={<PhotoPage />} />
        <ProtectedRoute path="/createpost" component={CreatePostPage} />
        <ChakraProvider theme={theme}>
          <Route path="/login" children={<Login />} />
        </ChakraProvider>
      </Switch>
    </div>
  );
}

export default App;
