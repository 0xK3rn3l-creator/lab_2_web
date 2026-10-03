// Усі дані резюме в одному місці.
// Компоненти отримують ці дані через props — так дані відокремлені від розмітки.
export const cv = {
  name: "Максим Кузюк",
  role: "Cybersecurity Student | Trainee Security Researcher",

  contacts: [
    { label: "Місто", value: "Львів" },
    { label: "Телефон", value: "068 414 06 55", href: "tel:+380684140655" },
    { label: "Email", value: "maksy.kuziuk.kb.2025@lpnu.ua", href: "mailto:maksy.kuziuk.kb.2025@lpnu.ua" },
    { label: "GitHub", value: "github.com/0xK3rn3l-creator", href: "https://github.com/0xK3rn3l-creator" },
  ],

  about:
    "Студент 2-го курсу Львівської політехніки (Кібербезпека). Поєдную високі " +
    "академічні результати з глибоким практичним вивченням низькорівневого " +
    "програмування та аналізу бінарних файлів. Здобув 3 місце на олімпіаді з вищої " +
    "математики серед усіх груп, що допомагає мені у криптографії. Активний учасник " +
    "CTF-руху з фокусом на Pwn, Cryptography, Reverse та Digital Forensics. Шукаю " +
    "стажування, де зможу застосувати свої навички у сфері ІБ.",

  stack: [
    "Python", "C++", "IDA Pro", "Binary Exploitation",
    "Reverse Engineering", "Digital Forensics", "Cryptography", "Linux",
  ],

  competencies: [
    { title: "Розробка та автоматизація", text: "написання скриптів на Python та розробка на C++." },
    { title: "Аналіз бінарних файлів", text: "Reverse Engineering та пошук логічних помилок у ПЗ." },
    { title: "Digital Forensics", text: "базові навички цифрової криміналістики та аналізу артефактів." },
    { title: "Криптографія", text: "практичне застосування математичних методів захисту даних." },
  ],

  education: [
    {
      place: "Національний університет «Львівська політехніка»",
      period: "2025 – Теперішній час · м. Львів",
      details: [
        "Спеціальність: Кібербезпека та захист інформації.",
        "Академічне досягнення: ТОП-2 серед студентів факультету (2026).",
        "3 місце на олімпіаді з вищої математики серед усіх груп.",
      ],
    },
  ],

  experience: [
    {
      title: "Співзасновник та гравець команди CultOfDeadCow",
      meta: "Незалежна команда (self-organized) · Нікнейм: 0xK3rn3l",
      points: [
        "Світовий рейтинг: TOP-300 (за версією CTFtime).",
        "Локальний рейтинг: ТОП-7/8 в Україні.",
        "Спеціалізація: аналіз вразливостей (Pwn) та реверс-інжиніринг, досвід з IDA Pro.",
        "Тренінг на pwn.college та picoCTF; підготовка до чемпіонату з CTF у Молдові.",
      ],
      links: [
        { label: "CTFtime", href: "https://ctftime.org/team/414721" },
        { label: "pwn.college", href: "https://pwn.college/hacker/Maks_A" },
      ],
    },
    {
      title: "Cybersecurity Internship — SoftServe",
      meta: "Літо 2026 · Сертифікат Series RI № 31320/2026",
      points: [],
      links: [],
    },
    {
      title: "TeamVoy AI Bootcamp",
      meta: "Літо 2026 · Certificate ID: TV-AI-2026-01",
      points: ["У складі команди розробляв AI-асистента для BookForum."],
      links: [],
    },
  ],

  languages: [
    "Українська: рідна",
    "Англійська: B1 (Intermediate) — впевнене володіння термінологією",
  ],

  qualities: ["Fast Learner", "Аналітичне мислення", "Командний гравець"],

  footerNote:
    "Готовий до інтенсивного навчання та стажування. Орієнтований на результат і " +
    "розвиток у напрямку Security Research та КБ загалом. Умови оплати — за домовленістю.",
};
