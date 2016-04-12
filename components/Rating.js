import React, { Component, PropTypes } from 'react'

class Rating extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      rating: 0,
      hovering: 0
    }
  }

  handleSubmit(e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      //this.props.onSave(text)
    }
  }

  handleChange(e) {
  }

  handleBlur(e) {
  }

  getStyles() {
    return Object.assign({}, styles.base, this.props.isValid ? styles.valid : styles.error);
  }

  onHover(i, e) {
    this.setState({ hovering: i });
  }

  onMouseOut() {
    this.setState({ hovering: 0 });
  }

  getTokenStyle(i) {
    return Object.assign({}, styles.token, i < this.state.hovering ? styles.hovering : {}); 
  }

  getTokens() {
    var tokens = [];
    for (var i = 0; i < this.props.steps; i++) {
      tokens.push(
        <span 
          onMouseOver={ this.onHover.bind(this, i + 1) } 
          style={ this.getTokenStyle(i) }
          key={ i }
        >
          &#9733;
        </span>
      );
    }
    return tokens;
  }

  render() {
    return (
      <div style={ styles.base } onMouseOut={ this.onMouseOut.bind(this) }>
        {
          this.getTokens().map((token) => {
            return token
          })
        }
      </div>
    )
  }
}

const styles = {
  base: {
    display: 'block',
    color: '#888',
    padding: '20px 5%',
    width: '90%',
    outline: 'none',
    border: 'none',
    minHeight: '100px'
  },
  token: {
    fontSize: '50px',
    cursor: 'pointer',
    color: '#ddd',
    lineHeight: '50px',
    transition: 'color .2s'
  },
  hovering: {
    color: '#eb8'
  }
}

export default Rating;
