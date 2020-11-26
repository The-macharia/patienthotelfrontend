const Buttons = (props) => {
  return (
    <button
      type="submit"
      className="hero__btn btn my-4 btn-outline btn-primary"
    >
      {props.title}
    </button>
  );
};

export default Buttons;
