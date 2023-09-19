import {} from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store'
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import Body from "./components/Body";
function App() {
  return (
    <>
      {/* <div className="text-3xl text-green-700">Akshat</div>
    <Quiz questions={jsQuizz.questions} />; */}
      <Provider store={store}>
        <div className="">
          <Navbar />
          <RouterProvider router={appRouter}>
            <Body/>
          </RouterProvider>
        </div>
      </Provider>
    </>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,   
  },
  {
    path: "/result",
    element: <Result/>,   
  }
]);

export default App;
