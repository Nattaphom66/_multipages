import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Carts.css";

function Carts({ carts, setCarts }) {
  return (
    <div className="carts-container">
      <div className="carts-items-container">
        {carts.map((cart) => {
          return (
            <Card
              style={{
                width: "18rem",
                boxShadow: "0 0 0.25rem gray",
                border: "1px solid lightgray",
              }}
              key={cart.id}
            >
              <Card.Img variant="top" src={cart.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{cart.Title}</Card.Title>
                <Card.Text>
                  <b>${cart.price.toFixed(2)}</b>
                </Card.Text>
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    setCarts(carts.filter((c) => c.id !== cart.id));
                  }}
                >
                  Remove to Carts
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <h4>
        Items:&nbsp;
        <span className="badge bg-danger me-2">{carts.length} items</span>-
        Total Price: $
        <span className="badge bg-danger ms-2">
          {carts.reduce((prev, cart) => prev + cart.price, 0).toFixed(2)}
        </span>
      </h4>

      <button className="btn btn-warning">
      <span className="bi bi-wallet"></span>&nbsp;<strong>Checkout</strong>
      </button>
    </div>
  );
}

export default Carts;
