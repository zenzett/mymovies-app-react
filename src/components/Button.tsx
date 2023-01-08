import { Component, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export class FavoriteButton extends Component<ButtonProps> {
  render() {
    return (
      <button
        className="btn w-full tracking-wider bg-zinc-800 text-[0.6rem] sm:text-sm"
        {...this.props}
      >
        {this.props.label}
      </button>
    );
  }
}

export class PlayButton extends Component<ButtonProps> {
  render() {
    return (
      <button
        className="btn w-full tracking-widest bg-zinc-800 text-sm sm:text-base"
        {...this.props}
      >
        {this.props.label}
      </button>
    );
  }
}
