const Cards = (props) => {
  return (
    <div className="p-2 d-flex justify-content-center">
      <div style={{ width: "75%" }}>
        <div className="text-center py-2">
          <h1>Book Your Stay</h1>
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Cards;
