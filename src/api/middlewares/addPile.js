export default function addPile(res) {
  const success = res[0].data.success && res[1].data.success;
  return {
    success,
  };
}
