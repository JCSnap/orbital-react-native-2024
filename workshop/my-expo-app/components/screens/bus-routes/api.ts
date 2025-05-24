export const fetchAiResponse = async (name: string) => {
  const res = await fetch('http:localhost:8000', {
    method: 'POST',
    body: JSON.stringify({ msg: name }),
  });

  return await res.json();
};
