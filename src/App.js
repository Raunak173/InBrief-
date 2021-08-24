import NavBarNews from "./Components/NavBarNews";
import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core";
import news from "./Assets/news.svg";
import { useEffect, useState } from "react";
import { NewsContent } from "./Components/NewsContent";
import axios from "axios";
import Footer from "./Components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles({
  nav: {
    display: "flex",
    backgroundColor: "white",
    height: "10vh",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
  logo: {
    marginLeft: "40%",
    display: "flex",
    alignItems: "center",
  },
});

function App() {
  const classes = useStyles();

  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();

  const notify = () =>
    toast("We can only display 38 news due to development API.!");

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
      console.log(news);
      console.log(newsArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [newsResults, category]);

  useEffect(()=>{
    notify();
  },[])

  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <div>
      <div className={classes.nav}>
        <ThemeProvider theme={darkTheme}>
          <NavBarNews setCategory={setCategory} />
        </ThemeProvider>
        <div className={classes.logo}>
          <img src={news} width="9%" />
          <h1>inbrief</h1>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={250}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </div>
      <NewsContent newsArray={newsArray} newsResults={newsResults} />
      <Footer />
    </div>
  );
}

export default App;
