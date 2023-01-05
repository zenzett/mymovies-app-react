import React, { Component } from "react";
import Lottie from "lottie-react";

import DiscAnimation from "../assets/disc-animation-black.json";
import TextAnimation from "../assets/text-animation-black.json";

export class SkeletonLoading extends Component {
  render() {
    return (
      <div className="flex grow flex-col justify-between p-3">
        <div className="flex animate-pulse space-x-4">
          <div className="flex-1 space-y-5 py-1">
            <div className="h-52 rounded bg-slate-700" />
            <div className="space-y-2">
              <div className="h-6 rounded bg-slate-700" />
              <div className="h-6 rounded bg-slate-700" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class DiscLoading extends Component {
  render() {
    return (
      <div className="w-full h-screen">
        <Lottie className="w-24" animationData={DiscAnimation} loop={true} />
      </div>
    );
  }
}

export class TextLoading extends Component {
  render() {
    return (
      <div className="w-full h-screen">
        <Lottie animationData={TextAnimation} loop={true} />
      </div>
    );
  }
}
