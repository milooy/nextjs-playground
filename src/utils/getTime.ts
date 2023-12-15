export const getTime = async (timeZone: string) => {
  const res = await fetch(`https://worldtimeapi.org/api/timezone/${timeZone}`, { next: { tags: ["time"] } });
  return res.json();
};
