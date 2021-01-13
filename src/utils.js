export function getTimeFormated(count, zh = false) {
  return zh
    ? `${String(Math.floor(count / 60))}分${String(count % 60)}秒`
    : `${String(Math.floor(count / 60)).padStart(2, '0')}:${String(count % 60).padStart(2, '0')}`;
}
