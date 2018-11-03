import React from 'react';

export default class ImageSlider extends React.Component {
  state = {
    images: [
      "https://picsum.photos/300/200/?image=827",
      "https://picsum.photos/300/200/?image=1041",
      "https://picsum.photos/300/200/?image=1044",
      "https://picsum.photos/300/200/?image=865",
    ],
    index: 0,
    visibility: true,
  };

  // handleNext = () => {
  //   this.state.index < this.state.images.length - 1
  //     ? this.setState({ ...this.state, index: this.state.index + 1 })
  //     : this.setState({ ...this.state, index: 0 });   
  // };

  handleNext = () => {
    this.state.index < this.state.images.length - 1
      ? this.setState({ index: this.state.index + 1 })
      : this.setState({ index: 0 });   
  };
  handlePrevious = () => {
    this.state.index > 0
      ? this.setState({ index: this.state.index - 1 })
      : this.setState({ index: this.state.images.length - 1 });   
  };
  toggleVisibility = () => {
    this.setState({ visibility: !this.state.visibility });
  };
  
  render() {
    const toggleText = this.state.visibility ? 'hide' : 'show';
    const slider = (this.state.visibility 
      ? <div>
          <button onClick={this.handlePrevious}>back</button>
          <img src={this.state.images[this.state.index]} alt="slider" />
          <button onClick={this.handleNext}>next</button>
        </div>
      : null);

    return (
      <section>
        <h2>Image Slider</h2>

        { slider }

        <button onClick={this.toggleVisibility}>{ toggleText }</button>
      </section>
    )
  };
}
