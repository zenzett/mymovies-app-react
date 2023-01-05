import React, { Component } from "react";

interface CardProps {
  title: string;
  image: string;
  release_date: string;
}

export default class Card extends Component<CardProps> {
  render() {
    return (
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
            alt="Image not found."
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">{this.props.title}</h2>
          <p className="flex justify-center">{this.props.release_date}</p>
          <div className="card-actions flex justify-center">
            <button className="btn btn-primary w-full">Add to favorite</button>
          </div>
        </div>
      </div>
    );
  }
}
