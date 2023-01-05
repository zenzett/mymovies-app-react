import React, { Component } from "react";
import Layout from "../components/Layout";

export default class Index extends Component {
  state = {
    datas: [
      {
        id: 1,
        title: "Avatar 1",
        image:
          "https://i.pinimg.com/736x/6d/aa/c2/6daac2a42ad7d987c6c102eb88fd94eb.jpg",
      },
      {
        id: 2,
        title: "Avatar 2",
        image:
          "https://i.pinimg.com/736x/6d/aa/c2/6daac2a42ad7d987c6c102eb88fd94eb.jpg",
      },
      {
        id: 3,
        title: "Avatar 3",
        image:
          "https://i.pinimg.com/736x/6d/aa/c2/6daac2a42ad7d987c6c102eb88fd94eb.jpg",
      },
      {
        id: 4,
        title: "Avatar 4",
        image:
          "https://i.pinimg.com/736x/6d/aa/c2/6daac2a42ad7d987c6c102eb88fd94eb.jpg",
      },
      {
        id: 5,
        title: "Avatar 5",
        image:
          "https://i.pinimg.com/736x/6d/aa/c2/6daac2a42ad7d987c6c102eb88fd94eb.jpg",
      },
      {
        id: 6,
        title: "Avatar 6",
        image:
          "https://i.pinimg.com/736x/6d/aa/c2/6daac2a42ad7d987c6c102eb88fd94eb.jpg",
      },
      {
        id: 7,
        title: "Avatar 7",
        image:
          "https://i.pinimg.com/736x/6d/aa/c2/6daac2a42ad7d987c6c102eb88fd94eb.jpg",
      },
      {
        id: 8,
        title: "Avatar 8",
        image:
          "https://i.pinimg.com/736x/6d/aa/c2/6daac2a42ad7d987c6c102eb88fd94eb.jpg",
      },
      {
        id: 9,
        title: "Avatar 9",
        image:
          "https://i.pinimg.com/736x/6d/aa/c2/6daac2a42ad7d987c6c102eb88fd94eb.jpg",
      },
      {
        id: 10,
        title: "Avatar 10",
        image:
          "https://i.pinimg.com/736x/6d/aa/c2/6daac2a42ad7d987c6c102eb88fd94eb.jpg",
      },
    ],
  };

  render() {
    return (
      <Layout>
        <div className="grid grid-cols-5 gap-4 m-4">
          {this.state.datas.map((data) => (
            <div className="text-black" key={data.id}>
              <img src={data.image} alt="Image not found." />
              <p>{data.title}</p>
            </div>
          ))}
        </div>
      </Layout>
    );
  }
}
