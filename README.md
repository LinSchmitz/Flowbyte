# 🚀 Flowbyte — Track Your Time. Build Consistency. Optimize Focus.

Flowbyte is a smart productivity and habit tracking app designed for creators, learners, and developers who care not just about doing tasks — but doing them **consistently and efficiently**.

---

## 🧠 Why Flowbyte?

> “Success doesn't come from intensity — it comes from consistency.”

Flowbyte is built with the philosophy of **gradual growth**, **honest logging**, and **insightful feedback**. Whether you're learning a language, writing, coding, or building a side project — this app helps you see your trends and stay accountable.

---

## 📌 Key Features

✅ **Custom Time Cycles**  
Create time cycles with custom durations (from 1 week to several months) to focus on your goals.

📅 **Daily Task Logging**  
Log your hours, start time, end time, and notes for each task — daily.

📊 **Advanced Analytics**

- Calculates daily average time
- Measures standard deviation of consistency
- Detects productivity patterns based on start times
- Alerts you when inconsistency increases (e.g., high variance)

🎨 **Color-Coded Tasks**  
Visually differentiate tasks using custom colors.

♻️ **Copy Tasks to New Cycles**  
Re-use previous setups to start new focus periods with a single click.

📈 **Productivity Heatmap & Hour Insights**  
Visualize your progress and discover your most productive time windows.

---

## 🛠 Tech Stack

- **Frontend**: React.js (with Hooks & Context)
- **Styling**: CSS
- **Backend**: Supabase / Firebase (planned)
- **Charts**: Recharts / D3.js (for analytics)

---

## 🚧 Upcoming Features

- Mobile app (React Native)
- Google Calendar integration
- Custom reminders
- Export data as CSV
- Light/Dark mode themes

---

## 📸 Screenshots _(Coming soon)_

> Wireframes, UI snapshots and live preview will be added in future updates.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

1. Fork the repo
2. Create your branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add awesome feature'`)
4. Push (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## 💬 Feedback

Have a feature idea or found a bug?  
on Twitter [@yourhandle](https://twitter.com/yourhandle)!

---

> Made with ❤️,🐈 and ☕ to help humans build habits that stick.

+++++++++++++++++
+++++++++++++++++
+++++++++++++++++
+++++++++++++++++

### 1. 📅 **بازه زمانی قابل انتخاب توسط کاربر**

- انتخاب بازه‌ای از حداقل **۱ هفته تا چند ماه**
- ثبت تاریخ شروع (و اختیاری: تاریخ پایان)
- این بازه واحد تحلیلی خواهد بود

---

### 2. 📊 **تحلیل بازدهی در بازه:**

- **میانگین زمان صرف‌شده روزانه** روی تسک (مثلاً: میانگین ۲.۷ ساعت در روز)
- **انحراف معیار** بر حسب ساعت
- اگر **انحراف معیار > نصف میانگین** ➝ ⛔ **آلارم "تداوم ناپایدار"**

---

### 3. ⏱️ **ثبت روزانه**

- کاربر هر روز وارد می‌کنه:

  - ✅ انجام شده یا نه
  - ⏳ چند ساعت وقت صرف کرده؟
  - 🕐 از چه ساعتی تا چه ساعتی؟ (شروع و پایان خودکار ذخیره می‌شن)

- اپ با توجه به همه روزها **ساعت‌های طلایی کاربر** رو شناسایی می‌کنه (مثلاً: بین ۹ تا ۱۱ صبح بیشترین بازدهی)

---

### 4. 🎨 **رنگ‌بندی تسک‌ها**

- هر تسک با رنگ مشخص میشه
- در نمای هفتگی / ماهانه کاربر می‌تونه با رنگ‌ها به راحتی وضعیت کارهاش رو ببینه

---

### 5. 📦 **کپی‌کردن تسک‌ها در بازه‌های مختلف**

- مثلاً یک تسک رو در بازه جدید هم می‌خواد داشته باشه
- دکمه‌ی "Copy to new cycle" یا "شروع چرخه جدید از روی قبلی"

---

## 🧮 تحلیل‌های هوشمند (Smart Insights)

- 🔁 ساعت‌های پرتکرار شروع = «زمان طلایی کاربر»
- 📉 هشدار نوسان زیاد = کمک به پیدا کردن ریشه بی‌نظمی
- 📆 روزهای موفق متوالی یا زنجیره شکست‌خورده

---

## 🗄️ مدل پایگاه داده پیشنهادی (برای پیاده‌سازی):

### 1. Users

```ts
id | name | email | ...
```

### 2. Cycles (دوره‌های زمانی ثبت عادت/تسک)

```ts
id | user_id | title | start_date | end_date;
```

### 3. Tasks

```ts
id | cycle_id | title | color | description;
```

### 4. TaskEntries (ورودی روزانه کاربر برای یک تسک خاص)

```ts
id | task_id | date | duration(min) | start_time | end_time;
```

---

## 💻 می‌خوای با چی پیاده‌سازی کنی؟

- React (frontend) + Supabase یا Firebase (backend)?
- یا شاید یه اپ موبایل با React Native؟

---

## 💡 پیشنهادی برای توسعه بیشتر:

- یادداشت یا احساس کاربر در هر روز (جای نوت‌برداری)
- سینک با تقویم گوگل
- اعلان‌های سفارشی برای شروع تسک

---

خیلی عالی! برای شروع طراحی وایرفریم و انتخاب اسم خاص، اول اجازه بده یه نام متمایز، حرفه‌ای و مرتبط با فلسفه‌ی تداوم، بهره‌وری، و تحلیل زمان برات پیدا کنیم.

---

## 🌟 نام پیشنهادی اپ (انگلیسی + دلیل):

### 1. **Flowbyte**

> ترکیب "Flow" (تمرکز و جریان کاری) + "Byte" (نشانه‌ای از داده و تحلیل)
> **سبک، تکنولوژیک، مناسب اپ‌هایی که داده‌ها رو تحلیل می‌کنن**

### 2. **Chronomind**

> "Chrono" = زمان، "Mind" = ذهن
> **برای اپی که عادت‌های زمانی و ذهنی رو بررسی می‌کنه**

### 3. **TempoTrack**

> "Tempo" = آهنگ منظم زمان، "Track" = ردیابی
> **بسیار مناسب برای اپ‌های habit tracking با تحلیل‌های ریتمی**

### 4. **Contune**

> ترکیب "Continue" + "Tune"
> **به‌معنای تداوم منظم و هماهنگ کردن عادت‌ها مثل موسیقی**

### 5. **Zentime**

> ترکیب "Zen" (تمرکز و آرامش) + "Time"
> **اگر سبک مینیمال و آرام می‌خوای**

---

📌 **پیشنهاد اصلی من: `Flowbyte`**
چون هم حرفه‌ایه، هم کوتاه، هم فضای تکنولوژیک و تحلیلی داره.

---

حالا بریم سراغ طراحی وایرفریم 👇

---

## 📐 طراحی وایرفریم Flowbyte (اپ تحت وب / موبایل)

### 📱 صفحه اول (Dashboard)

```
+------------------------------------------+
| Flowbyte 📊        [Profile Icon]        |
+------------------------------------------+

[ 🔁 Current Cycle: "Focus 21" (Start: Jul 10) ]
[ 📅 Days Passed: 7 of 21   ⏱ Avg: 2.3h/day ]
[ ⚠️ Irregular! Std.Dev: 1.4 > 1.15 (50%) ]

--------------------------
🟣 Design Portfolio (Task)
 - Today: 2h 20m ✅
 - Time: 9:30 AM - 11:50 AM
 - Note: "High focus today!"
--------------------------
🟢 Learn German
 - Today: 1h ❌ Not yet
--------------------------

[➕ Add New Task]
[📈 See Analysis]
```

---

### 📊 صفحه آنالیز (Analysis View)

```
+------------------------------------------+
| 📈 Performance Overview: "Focus 21"       |
+------------------------------------------+

- Avg Daily Time: 2.3 hours
- Std Deviation: 1.4
- Most productive hour: 9AM–11AM
- Completion Rate: 75%

📅 Heatmap View:
[🟩🟩🟦⬜⬜🟦🟩] each box = a day, color = duration
```

---

### ⏱ صفحه ثبت روزانه تسک

```
🟪 Task: Design Portfolio

[✅ Task done today?] Yes
[⏱ Start time:] 09:30
[⏲ End time:]   11:50
[📝 Note:] "Very productive!"

[💾 Save]
```

---

### 🎨 مدیریت تسک‌ها

```
+-------------------------------+
| 📝 My Tasks                   |
+-------------------------------+
| 🟣 Design Portfolio      ⏱ Avg: 2.1h |
| 🟢 Learn German          ⏱ Avg: 1.4h |
| 🟠 Workout               ⏱ Avg: 0.8h |

[➕ Add New Task]   [📤 Copy to new cycle]
```

---

### ⚙️ تنظیمات چرخه جدید

```
🔁 New Cycle:
[Title:] "August Focus Sprint"
[Start Date:] 2025-08-01
[Duration:] 30 days

[🔘 Import previous tasks?] ✅

[Create Cycle]
```
