export function getSaudation() {
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 0 && hour <= 11) {
    return "Good morning";
  }
  if (hour >= 12 && hour <= 18) {
    return "Good afternoon";
  }
  if (hour >= 19 && hour <= 23) {
    return "Good night";
  }
}
