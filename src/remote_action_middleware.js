export default socket => store => next => action => {
  if (action.nmeta && action.meta.remote) {
    socket.emit('action', action);
  }
  return next(action);
};
