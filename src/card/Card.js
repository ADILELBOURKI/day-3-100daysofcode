import React from "react";
import axios from "axios";
import "./card.css";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      random_quote_id: Math.round(Math.random() * 71),
      random_quote: "",
    };
  }
  componentDidMount() {
    axios.get("https://breakingbadapi.com/api/quotes").then((result) => {
      this.setState({
        quotes: result.data,
        random_quote_id: Math.floor(Math.random() * result.data.length),
      });

      console.log(this.state.quotes);
    });
  }
  handleClick = () => {
    this.setState({
      random_quote_id: Math.round(Math.random() * 71),
      random_quote: this.state.quotes[this.state.random_quote_id + 1],
      // random_quote: this.state.random_quote,
    });
    console.log(this.state.random_quote);
  };

  render() {
    return (
      <div>
        <div className="quote__container">
          {this.state.quotes.map((quote) => {
            return (
              <div className="quote__card" key={quote.quote_id}>
                {<h1>{quote.quote}</h1>}{" "}
                <span className="author">{quote.author}</span>
              </div>
            );
          })}
        </div>
        <button className="change__quote" onClick={this.handleClick}>
          Change Quote
        </button>
      </div>
    );
  }
}

export default Card;
