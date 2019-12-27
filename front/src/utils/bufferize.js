/**
 * @param {Object} file
 * @returns {Promise<Uint8Array>}
 */
export const bufferize = file => new Promise(resolve => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);

  reader.addEventListener('load', () => {
    const buffer = new Uint8Array(reader.result);

    resolve(buffer);
  });
});
