import React, { Component } from "react";

interface CardProps {
  title: string;
  image: string;
  release_date: string;
}

export default class Card extends Component<CardProps> {
  render() {
    return (
      <div className="card card-compact bg-stone-900 shadow-xl glass">
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
            alt="Image not found."
          />
        </figure>
        <div className="card-body">
          <span className="flex font-bold text-xs sm:text-base">
            {this.props.title}
          </span>
          <p className="text-xs sm:text-base">{this.props.release_date}</p>
          <div className="card-actions flex justify-center mt-10">
            <button className="btn btn-primary w-full text-xs sm:text-base">
              Add to favorite
            </button>
          </div>
        </div>
      </div>
    );
  }
}
