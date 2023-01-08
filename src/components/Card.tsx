import { NavigateFunction } from "react-router-dom";
import { Component } from "react";

import { FavoriteButton } from "./Button";
import { withRouter } from "../utils/navigation";

interface CardProps {
  id: number;
  title: string;
  image: string;
  release_date: string;
  labelButton: string;
  onClickFav?: () => void;
  navigate?: any;
  params?: any;
}

class Card extends Component<CardProps> {
  onClickDetail() {
    console.log(this.props.id);
    this.props.navigate(`/detail/${this.props.id}`);
  }
  render() {
    return (
      <div className="card card-compact bg-black shadow-xl glass duration-300 hover:scale-105">
        <figure onClick={() => this.onClickDetail()}>
          <button>
            <img
              className="duration-300 hover:scale-105 hover:blur-sm"
              src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
              alt="Image not found."
            />
          </button>
        </figure>
        <div className="card-body gap-0">
          <span
            className="m:0 p:0 flex font-bold text-xs sm:text-base"
            onClick={() => this.onClickDetail()}
          >
            <button>{this.props.title}</button>
          </span>
          <p className="text-xs font-light sm:text-base m:0 p:0">
            {this.props.release_date}
          </p>
          <div className="card-actions flex justify-center mt-5">
            <FavoriteButton
              label={this.props.labelButton}
              onClick={this.props.onClickFav}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Card);
