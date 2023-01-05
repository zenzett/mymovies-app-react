import React, { Component } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import Card from "../components/Card";
import {
  SkeletonLoading,
  DiscLoading,
  TextLoading,
} from "../components/Loading";

interface DatasType {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

interface PropsType {}

interface StateType {
  loading: boolean;
  datas: DatasType[];
}

export default class Index extends Component<PropsType, StateType> {
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
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=9e8d52f5bf137b5b06381790d5c45d6a&language=en-US&page=1"
      )
      .then((data) => {
        const { results } = data.data;
        this.setState({ datas: results });
        console.log(results); //must delete later
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => {
        // this.setState({ loading: false });
      });
  }

  render() {
    return (
      <Layout>
        {this.state.loading ? (
          <div className="flex justify-center items-center w-full">
            {[0].map((data) => (
              <TextLoading />
            ))}
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
                  title={data.title}
                  image={data.poster_path}
                  release_date={data.release_date}
                />
              ))}
            </div>
          </div>
        )}
      </Layout>
    );
  }
}
