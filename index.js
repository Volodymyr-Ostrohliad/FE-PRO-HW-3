let hours = prompt("Введіть кількість годин від 1.");
console.log(hours)

if (hours === null) {
  alert('Шкода, що ви не захотіли ввести кількість годин.');
  console.log(hours)
} else if (isNaN(hours) || hours.trim() == '' || hours <= 0) {
  while (isNaN(hours) || hours.trim() == '' || hours <= 0) {
    hours = prompt('Помилка! Ви ввели не число, або 0, або залишили поле пустим. Будь ласка, введіть число від 1.');
    console.log(hours)
    if (hours === null) {
      alert('Шкода, що ви не захотіли ввести клькість годин.');
      console.log(hours)
      break;
    }
  }
}

if (hours) {
  const seconds = hours * 3600;
  const templateStrings = `У ${hours.trim()} годинах є ${seconds} секунд.`;
  alert(templateStrings);
  console.log(seconds);
}
