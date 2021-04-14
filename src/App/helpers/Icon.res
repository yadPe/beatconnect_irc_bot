type jsRenderIconsArgs = {
  name: string,
  color: option<string>,
  width: option<int>,
  height: option<int>,
}

@module("./renderIcons")
external jsRenderIcons: jsRenderIconsArgs => React.element = "default"

let make = (
  ~name: string,
  ~color: option<string>=?,
  ~width: option<int>=?,
  ~height: option<int>=?,
  (),
) => {{name: name, color: color, width: width, height: height}->jsRenderIcons}
