function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement); // push method mutates original 'buffer'
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement); // push method returns a copy of buffer + new element
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}