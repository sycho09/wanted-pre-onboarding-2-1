export default function useGetDate(createdAt) {
  const dates = ['일', '월', '화', '수', '목', '금', '토'];
  const day = new Date(createdAt).getDay();
  const month = new Date(createdAt).getMonth() + 1;
  const getdate = new Date(createdAt).getDate();
  return { dates, day, month, getdate };
}
