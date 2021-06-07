import React from "react";
import Card from "react-bootstrap/Card";

class NewsCard extends React.Component {
  render() {
    return (
      <Card border="primary" className="mt-4">
        <Card.Body>
          <Card.Title>{this.props.topic}</Card.Title>
          <Card.Text>{this.props.news_text}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default NewsCard;
