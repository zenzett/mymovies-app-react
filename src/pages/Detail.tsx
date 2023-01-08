import React, { Component } from "react";
import moment from "moment";
import arrayShuffle from "array-shuffle";

import Layout from "../components/Layout";
import { TextLoading } from "../components/Loading";
import Carousel from "../components/Carousel";
import { PlayButton, FavoriteButton } from "../components/Button";
import { withRouter } from "../utils/navigation";
import { MovieType, VideosType } from "../utils/types/movie";

interface PropsType {
  params?: any;
}

interface StateType {
  loading: boolean;
  data: MovieType;
  videos: VideosType[];
}

class Detail extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      data: {},
      videos: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { id_movie } = this.props.params;
    fetch(
      `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&append_to_response=videos`,
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data, videos: data.videos.results });
        console.log(data);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <Layout>
        {this.state.loading ? (
          <div className="flex justify-center items-center w-full">
            <TextLoading />
          </div>
        ) : (
          <>
            <div
              className="w-fit bg-cover bg-center p-10 md:p-20 lg:p-28"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0,0,0.3), rgba(0,0,0,0.3)), url(https://image.tmdb.org/t/p/original${this.state.data.backdrop_path})`,
              }}
            >
              <div className="p-5 flex flex-col backdrop-blur-lg bg-black/25 card lg:p-10 lg:flex-row">
                <img
                  className="object-cover object-center card"
                  src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`}
                  alt="Image not found."
                />
                <div className=" pt-5 lg:pt-0 lg:px-10">
                  <p className="font-bold sm:text-2xl">
                    {this.state.data.title}
                  </p>
                  <p className="pb-5 border-b-2 border-b-white/10 font-extralight text-sm sm:text-lg ">
                    {this.state.data.tagline}
                  </p>
                  <p className="pt-5 pb-3 text-sm sm:text-lg">
                    {this.state.data.spoken_languages
                      ?.map((spoken_language) => {
                        return spoken_language.english_name;
                      })
                      .join("; ")}
                  </p>
                  <p className="pb-3 text-sm sm:text-lg">
                    {moment(this.state.data.release_date).format("Do MMM YYYY")}
                    {" • "}
                    {this.state.data.runtime} minutes
                  </p>
                  <p className="pb-5 border-b-2 border-b-white/10 text-sm sm:text-lg">
                    {this.state.data.genres
                      ?.map((genre) => {
                        return genre.name;
                      })
                      .join(" | ")}
                  </p>
                  <p className="text-sm pt-5 sm:text-lg">
                    {this.state.data.overview}
                  </p>
                  <div className="card-actions flex justify-center mt-10">
                    <PlayButton label="PLAY" />
                  </div>
                </div>
              </div>
            </div>
            <Carousel
              datas={arrayShuffle(this.state.videos).slice(0, 3)}
              content={(data) => (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${data.key}`}
                  title={data.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            />
          </>
        )}
      </Layout>
    );
  }
}

export default withRouter(Detail);
