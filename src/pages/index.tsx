import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

import { TextLoading } from "../components/Loading";
import Carousel from "../components/Carousel";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { MovieType } from "../utils/types/movie";

const Index = () => {
  const [datas, setDatas] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  //   this.state = {
  //       datas: [],
  //       loading: true,
  //       page: 1,
  //       totalPage: 1,
  //  };

  useEffect(() => {
    fetchData(1);
  }, []);
  // componentDidMount() {
  //   this.fetchData(1);
  // }

  function fetchData(page: number) {
    axios
      .get(
        `now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=${page}`
      )
      .then((data) => {
        const { results, total_pages } = data.data;
        setDatas(results);
        setTotalPage(total_pages);
        // this.setState({ datas: results, totalPage: total_pages });
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
    // .finally(() => this.setState({ loading: false }));
  }

  function nextPage() {
    const newPage = page + 1;
    setPage(newPage);
    fetchData(newPage);
    // const newPage = this.state.page + 1;
    // this.setState({ page: newPage }, () => console.log(this.state.page));
    // this.fetchData(newPage);
  }

  function prevPage() {
    const newPage = page - 1;
    setPage(newPage);
    fetchData(newPage);
    // const newPage = this.state.page - 1;
    // this.setState({ page: newPage });
    // this.fetchData(newPage);
  }

  function handleFavorite(data: MovieType) {
    const checkExist = localStorage.getItem("FavMovie");
    if (checkExist) {
      let parseFav: MovieType[] = JSON.parse(checkExist);
      parseFav.push(data);
      localStorage.setItem("FavMovie", JSON.stringify(parseFav));
    } else {
      localStorage.setItem("FavMovie", JSON.stringify([data]));
      alert("Favorited");
    }
  }

  return (
    <Layout>
      {!loading && (
        <Carousel
          datas={datas.slice(0, 5)}
          content={(data) => (
            <div
              className="w-full h-full flex justify-center items-center bg-contain bg-no-repeat bg-center sm:bg-cover"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0,0,0.3), rgba(0,0,0,0.3)), url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
              }}
            >
              <p className="text-white tracking-widest font-bold break-words lg:text-2xl">
                {data.title}
              </p>
            </div>
          )}
        />
      )}
      {loading ? (
        <div className="flex justify-center items-center w-full">
          <TextLoading />
        </div>
      ) : (
        <div>
          <p className="m-10 flex justify-center font-semibold text-xl sm:text-3xl">
            Now Playing
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 m-4">
            {datas.map((data) => (
              <Card
                key={data.id}
                id={data.id}
                title={data.title}
                image={data.poster_path}
                release_date={moment(data.release_date).format("YYYY")}
                labelButton="Add to Favorite"
                onClickFav={() => handleFavorite(data)}
              />
            ))}
          </div>
          <div className="btn-group flex justify-center m-10">
            <button
              className="btn  bg-zinc-800"
              onClick={() => prevPage()}
              disabled={page === 1}
            >
              «
            </button>
            <button className="btn  bg-zinc-800 tracking-wider text-[0.6rem] sm:text-sm">
              {page}
            </button>
            <button
              className="btn  bg-zinc-800"
              onClick={() => nextPage()}
              disabled={page === totalPage}
            >
              »
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Index;
