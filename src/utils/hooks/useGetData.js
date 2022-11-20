export default function useGetDate(startDate) {
  const dates = ['일', '월', '화', '수', '목', '금', '토'];
  const day = new Date(startDate).getDay();
  const month = new Date(startDate).getMonth() + 1;
  const getdate = new Date(startDate).getDate();
  return { dates, day, month, getdate };
}
