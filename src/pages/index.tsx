import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import {
  SkeletonLoading,
  DiscLoading,
  TextLoading,
} from "../components/Loading";
import { MovieType } from "../utils/types/movie";

// interface DatasType {
//   id: number;
//   title: string;
//   poster_path: string;
//   release_date: string;
//   backdrop_path: string;
// }

interface PropsType {}

interface StateType {
  loading: boolean;
  datas: MovieType[];
  page: number;
  totalPage: number;
}

export default class Index extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      datas: [],
      loading: true,
      page: 1,
      totalPage: 1,
    };
  }

  componentDidMount() {
    this.fetchData(1);
  }

  fetchData(page: number) {
    axios
      .get(
        `now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=${page}`
      )
      .then((data) => {
        const { results, total_pages } = data.data;
        this.setState({ datas: results, totalPage: total_pages });
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => this.setState({ loading: false }));
  }

  nextPage() {
    const newPage = this.state.page + 1;
    this.setState({ page: newPage }, () => console.log(this.state.page));
    this.fetchData(newPage);
  }

  prevPage() {
    const newPage = this.state.page - 1;
    this.setState({ page: newPage });
  }

  handleFavorite(data: MovieType) {
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

  render() {
    return (
      <Layout>
        {!this.state.loading && (
          <Carousel
            datas={this.state.datas.slice(0, 5)}
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
        {this.state.loading ? (
          <div className="flex justify-center items-center w-full">
            <TextLoading />
          </div>
        ) : (
          <div>
            <p className="m-10 flex justify-center font-semibold text-xl sm:text-3xl">
              Now Playing
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 m-4">
              {this.state.datas.map((data) => (
                <Card
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  image={data.poster_path}
                  release_date={moment(data.release_date).format("YYYY")}
                  labelButton="Add to Favorite"
                  onClickFav={() => this.handleFavorite(data)}
                />
              ))}
            </div>
            <div className="btn-group flex justify-center m-10">
              <button
                className="btn  bg-zinc-800"
                onClick={() => this.prevPage()}
                disabled={this.state.page === 1}
              >
                «
              </button>
              <button className="btn  bg-zinc-800 tracking-wider text-[0.6rem] sm:text-sm">
                {this.state.page}
              </button>
              <button
                className="btn  bg-zinc-800"
                onClick={() => this.nextPage()}
                disabled={this.state.page === this.state.totalPage}
              >
                »
              </button>
            </div>
          </div>
        )}
      </Layout>
    );
  }
}
