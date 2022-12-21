const student = "Ершова Дарья Владимировна"; // Не хватило времени на решение данной задачи. Начала делать и поняла, что возможно не успею. Часть кода взяла у ColinsBlares((

document.getElementById("student").innerHTML = student;

const guests = [
    {fullname: `Пономарев Андрей Алексеевич`, gender: `мужчина`, dateOfBirth: `11.12.1980`},
    {fullname: `Рыбакова Алина Семёновна`, gender: `женщина`, dateOfBirth: `16.04.1974`},
    {fullname: `Молчанов Даниил Ильич`, gender: `мужчина`, dateOfBirth: `21.03.1984`},
    {fullname: `Смирнова София Львовна`, gender: `женщина`, dateOfBirth: `02.01.1987`},
    {fullname: `Владимиров Артём Григорьевич`, gender: `мужчина`, dateOfBirth: `07.12.1990`},
    {fullname: `Маслова Елизавета Егоровна`, gender: `женщина`, dateOfBirth: `10.10.1997`},
    {fullname: `Назарова Вера Романовна`, gender: `женщина`, dateOfBirth: `01.05.1983`},
    {fullname: `Иванов Иван Фёдорович`, gender: `мужчина`, dateOfBirth: `05.05.1999`},
    {fullname: `Дмитриев Алексей Григорьевич`, gender: `мужчина`, dateOfBirth: `12.11.1998`},
    {fullname: `Овчинников Платон Александрович`, gender: `мужчина`, dateOfBirth: `26.05.1999`},
    {fullname: `Мартынова Софья Тимуровна`, gender: `женщина`, dateOfBirth: `07.06.1995`},
    {fullname: `Соколов Михаил Адамович`, gender: `мужчина`, dateOfBirth: `11.03.1979`}
]
const totalGuests = guests.length;
console.log(`Всего гостей: ${totalGuests}`);
const users = guests.length;
const male = guests.filter(guest => guest.gender == 'мужчина').length
console.log(`Мужчин: ${male}`);
const female = guests.filter(guest => guest.gender == 'женщина').length
console.log(`Женщин: ${female}`);

function calcAge(birthday) {
    now = new Date();

    birthday = new Date(birthday);
    birthday.setMonth(birthday.getMonth()-1);

    birthday_this_year = new Date(birthday);
    birthday_this_year.setFullYear(now.getFullYear());

    age_diff = new Date(now - birthday);
    age = Math.abs(age_diff.getFullYear() - 1970);

    if ((now - birthday_this_year) < 0) {
        age = age - 1;
    } 
    return age
  }

for (let guests_index in guests) {
    guest = guests[guests_index]

    gender = (guest.gender == 'мужчина' && 'М') || 'Ж'

    fullnameGuest = guest.fullname.split(' ')
    fullnameGuest = `${fullnameGuest[0]} ${fullnameGuest[1].substr(0,1)}. ${fullnameGuest[2].substr(0,1)}.`

    dateOfBirth = guest.dateOfBirth.split('.')
    age = calcAge(new Date(dateOfBirth[2], dateOfBirth[1], dateOfBirth[0]))

    let visitor = (`${fullnameGuest}  пол: ${gender} возраст: ${age}`);
    console.log(visitor);
}