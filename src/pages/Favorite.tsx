import React, { Component } from "react";
import moment from "moment";

import Layout from "../components/Layout";
import Card from "../components/Card";
import {
  SkeletonLoading,
  DiscLoading,
  TextLoading,
} from "../components/Loading";
import { MovieType } from "../utils/types/movie";

interface PropsType {}

interface StateType {
  loading: boolean;
  datas: MovieType[];
}

export default class Favorite extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      datas: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const getFavorite = localStorage.getItem("FavMovie");
    if (getFavorite) {
      this.setState({ datas: JSON.parse(getFavorite) });
    }
    this.setState({ loading: false });
  }

  removeFavorite(data: MovieType) {
    let dupeDatas: MovieType[] = this.state.datas.slice();
    const filterData = dupeDatas.filter((item) => item.id !== data.id);
    localStorage.setItem("FavMovie", JSON.stringify(filterData));
    alert("Removed.");
  }

  render() {
    return (
      <Layout>
        {this.state.loading ? (
          <div className="flex justify-center items-center w-full">
            <TextLoading />
          </div>
        ) : (
          <div>
            <p className="m-10 flex justify-center font-semibold text-xl sm:text-3xl">
              Favorite
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 m-4">
              {this.state.datas.map((data) => (
                <Card
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  image={data.poster_path}
                  release_date={moment(data.release_date).format("YYYY")}
                  labelButton="Remove"
                  onClickFav={() => this.removeFavorite(data)}
                />
              ))}
            </div>
          </div>
        )}
      </Layout>
    );
  }
}
