/* eslint-disable react/prop-types */
const Box = (props) => {

  return (
    <section
      className="box"
      key={props.id}
      style={{ backgroundImage: props.on ? 'url("/idea.gif")' : "none" }}
    ></section>
  )
}

export default Box