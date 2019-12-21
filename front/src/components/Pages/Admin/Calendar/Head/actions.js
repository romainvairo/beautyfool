export const onBackward = props => () => {
  props.setDate(props.date.clone().subtract(1, 'month'));
}

export const onForward = props => () => {
  props.setDate(props.date.clone().add(1, 'month'));
}
