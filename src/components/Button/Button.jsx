import { Component } from 'react';
import s from './Button.module.css';

class Button extends Component {
  loading = () => {
    const { onClick, page } = this.props;
    onClick(page);
  };

  render() {
    return (
      <button className={s.button} onClick={this.loading}>
        Load more
      </button>
    );
  }
}

export default Button;
