import Link from "next/link";
import { courseModules } from "@/lib/courseData";

export default function HomePage() {
  const totalLessons = courseModules.reduce(
    (acc, m) => acc + m.lessons.length,
    0
  );

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-base)", color: "var(--text-primary)" }}>

      {/* ===== 1. HERO ===== */}
      <section className="relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full border mb-8"
            style={{
              background: "var(--accent-bg)",
              borderColor: "var(--accent)",
              color: "var(--accent)",
            }}
          >
            🟢 Безкоштовний курс
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
            Сайт без коду —{" "}
            <span style={{ color: "var(--accent)" }}>від ідеї до продажів</span>
          </h1>

          <p
            className="text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10"
            style={{ color: "var(--text-secondary)" }}
          >
            Навчіться створювати сучасні сайти за допомогою ШІ без жодного рядка коду.
            Від першої візитки — до лендінгу, що приносить реальних клієнтів.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link
              href="/course"
              className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-xl transition-opacity hover:opacity-90"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              Почати навчання →
            </Link>
            <Link
              href="/course"
              className="inline-flex items-center gap-2 font-medium px-8 py-3.5 rounded-xl transition-opacity border hover:opacity-80"
              style={{
                color: "var(--text-primary)",
                borderColor: "var(--border-base)",
                background: "var(--bg-elevated)",
              }}
            >
              Дивитися програму
            </Link>
          </div>

          {/* Stats strip */}
          <div
            className="flex flex-wrap justify-center gap-0 border-t pt-10"
            style={{ borderColor: "var(--border-base)" }}
          >
            {[
              { value: String(courseModules.length), label: "Модулів" },
              { value: String(totalLessons), label: "Уроків" },
              { value: "5–7 днів", label: "Тривалість" },
              { value: "100% ШІ", label: "Інструменти" },
            ].map((stat, i) => (
              <div
                key={i}
                className="px-8 border-r last:border-r-0"
                style={{ borderColor: "var(--border-base)" }}
              >
                <p className="text-3xl font-bold tabular-nums" style={{ color: "var(--text-primary)" }}>
                  {stat.value}
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2. WHAT YOU'LL LEARN ===== */}
      <section
        className="border-t border-b"
        style={{ borderColor: "var(--border-base)", background: "var(--bg-elevated)" }}
      >
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Що ви отримаєте після курсу
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: "Власний сайт",
                body: "Ви запустите реальний сайт з доменом і хостингом. Не шаблон у папці — а живий сайт в інтернеті, який можна показати клієнтам.",
              },
              {
                title: "Розуміння ШІ-інструментів",
                body: "Навчитесь працювати з Durable, Mixo, Wix AI, Hostinger AI та ChatGPT для швидкого створення і редагування сайтів.",
              },
              {
                title: "Сайт, що продає",
                body: "Зрозумієте маркетингову логіку лендінгу: структуру, тригери довіри, кнопки та психологію покупця. Ваш сайт буде продавати.",
              },
              {
                title: "Нова навичка для заробітку",
                body: "Дізнаєтесь, як монетизувати вміння робити сайти: перші клієнти, портфоліо, цінова стратегія для початківця.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 rounded-2xl border"
                style={{
                  background: "var(--bg-base)",
                  borderColor: "var(--border-base)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-base font-bold mt-0.5"
                  style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                >
                  ✓
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. MODULES ===== */}
      <section className="border-b" style={{ borderColor: "var(--border-base)" }}>
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Програма курсу
          </h2>

          <div className="space-y-3">
            {courseModules.map((module) => (
              <Link
                key={module.id}
                href={`/course/${module.id}/${module.lessons[0].id}`}
                className="flex items-center gap-4 p-4 rounded-xl border transition-colors group hover:opacity-90"
                style={{
                  background: "var(--bg-elevated)",
                  borderColor: "var(--border-base)",
                }}
              >
                {/* Emoji icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: "var(--bg-overlay)" }}
                >
                  {module.emoji}
                </div>

                {/* Module info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                      Модуль {parseInt(module.id.replace("module-", ""))}
                    </span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: "var(--accent-bg)",
                        color: "var(--accent)",
                      }}
                    >
                      {module.lessons.length} уроків
                    </span>
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                      · {module.duration}
                    </span>
                  </div>
                  <p
                    className="text-sm font-semibold mb-0.5 truncate"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {module.title}
                  </p>
                  <p
                    className="text-xs leading-relaxed line-clamp-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {module.description}
                  </p>
                </div>

                {/* Arrow */}
                <span
                  className="shrink-0 transition-transform group-hover:translate-x-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. HOW THE COURSE LOOKS ===== */}
      <section
        className="border-b"
        style={{ borderColor: "var(--border-base)", background: "var(--bg-elevated)" }}
      >
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2
            className="text-3xl font-bold text-center mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Як виглядає курс
          </h2>
          <p
            className="text-sm text-center mb-12 max-w-md mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Без нудних лекцій. Кожен урок — коротко, зрозуміло, з практичним результатом.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                icon: "📖",
                title: "Теорія",
                body: "Короткі текстові уроки з прикладами. Читаєте у своєму темпі, без тайм-коду і перемотування. Жодного зайвого.",
              },
              {
                n: "02",
                icon: "⚡",
                title: "Практика",
                body: "Після кожного блоку — конкретне завдання. Ви одразу застосовуєте знання і отримуєте реальний результат, а не просто «розуміння».",
              },
              {
                n: "03",
                icon: "🏆",
                title: "Результат",
                body: "Кожен модуль закінчується тестом і артефактом: шаблоном, чеклістом або готовим сайтом, який ви зробили самі.",
              },
            ].map((item) => (
              <div key={item.n} className="relative pt-8">
                <span
                  className="absolute top-0 left-0 text-7xl font-bold leading-none select-none pointer-events-none"
                  style={{ color: "var(--accent-bg)", opacity: 0.8 }}
                >
                  {item.n}
                </span>
                <div className="relative">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
                    style={{ background: "var(--accent-bg)" }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. FOR WHOM ===== */}
      <section className="border-b" style={{ borderColor: "var(--border-base)" }}>
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Для кого цей курс
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🌱",
                title: "Повні новачки",
                items: ["Без технічного досвіду", "Простою мовою", "Крок за кроком"],
              },
              {
                icon: "💼",
                title: "Підприємці",
                items: ["Сайт для бізнесу", "Без дизайнера", "Самостійно і швидко"],
              },
              {
                icon: "🚀",
                title: "Фрілансери",
                items: ["Нова послуга для клієнтів", "Швидкий результат", "Портфоліо з нуля"],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-6 border"
                style={{
                  background: "var(--bg-elevated)",
                  borderColor: "var(--border-base)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
                  style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                >
                  {card.icon}
                </div>
                <h3
                  className="text-lg font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  {card.title}
                </h3>
                <ul className="space-y-2.5">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm">
                      <span style={{ color: "var(--accent)" }}>✓</span>
                      <span style={{ color: "var(--text-secondary)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. FOOTER CTA ===== */}
      <section style={{ background: "var(--accent)" }}>
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Готові створити свій перший сайт?
          </h2>
          <p className="text-base max-w-md mx-auto mb-10" style={{ color: "rgba(255,255,255,0.8)" }}>
            Почніть безкоштовно прямо зараз. Перший результат — вже після першого модуля.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/course"
              className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-xl border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Почати безкоштовно →
            </Link>
          </div>
          <div className="mt-6">
            <Link
              href="/course"
              className="text-sm hover:underline transition-colors"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Переглянути програму →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
