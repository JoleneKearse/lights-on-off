/* eslint-disable react/prop-types */
const Box = (props) => {
  const boxStyle = {
    backgroundImage: props.on ? 'url("/idea.gif")' : "none",
    boxShadow: props.on ? ".25rem .25rem .25rem #23232366" : ".25rem .25rem .5rem #232323CC"
  }

  return (
    <section
      className="box"
      key={props.id}
      onClick={() => props.toggle(props.id)}
      style={boxStyle}
    ></section>
  )
}

export default Box