import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {

  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: 'hex'
    }
  }

  changeLevel = (newLevel) => {
    this.setState({ level: newLevel });
  }

  changeFormat = (val) => {
    this.setState({ format: val });
  }

  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color[format]} name={color.name} />
    ));
    return (
      <div className='Palette'>
        <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
        <div className='Palette-colors'>
          {colorBoxes}
        </div>
      </div>
    );
  }
}

export default Palette;