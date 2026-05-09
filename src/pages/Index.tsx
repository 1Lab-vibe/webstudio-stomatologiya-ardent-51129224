import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import {
  Star, MapPin, Phone, Clock, ShieldCheck, Sparkles, Stethoscope,
  Smile, HeartPulse, Baby, ChevronRight, CheckCircle2, MessageCircle
} from "lucide-react";
import clinicHero from "@/assets/clinic-hero.jpg";
import smileImg from "@/assets/smile.jpg";

const services = [
  { icon: Stethoscope, title: "Лечение кариеса", desc: "Под микроскопом, безболезненно. Гарантия на пломбу.", price: "от 3 500 ₽" },
  { icon: Sparkles, title: "Профессиональная гигиена", desc: "Ультразвук, Air Flow, полировка. За один визит.", price: "от 4 900 ₽" },
  { icon: Smile, title: "Отбеливание Zoom", desc: "Безопасно, до 8 тонов светлее за час.", price: "от 19 000 ₽" },
  { icon: ShieldCheck, title: "Имплантация", desc: "Системы Straumann, Astra Tech. План лечения бесплатно.", price: "от 38 000 ₽" },
  { icon: HeartPulse, title: "Протезирование", desc: "Коронки E.max и циркониевые. Срок — 7 дней.", price: "от 17 000 ₽" },
  { icon: Baby, title: "Детская стоматология", desc: "Без слёз, в игровой форме. Врач с 12-летним опытом.", price: "от 2 500 ₽" },
];

const reviews = [
  { name: "Анна К.", text: "Записалась на чистку, в итоге сделали и лечение кариеса. Всё аккуратно, без боли. Цены назвали сразу.", rating: 5, date: "2 недели назад" },
  { name: "Дмитрий П.", text: "Долго искал клинику для имплантации. Здесь подробно объяснили план, показали снимки. Имплант поставили без осложнений.", rating: 5, date: "месяц назад" },
  { name: "Елена С.", text: "Привожу ребёнка уже второй год. Врач находит подход, дочка не боится приёмов. Это дорогого стоит.", rating: 5, date: "3 недели назад" },
];

const process = [
  { step: "01", title: "Заявка или звонок", desc: "Свяжемся в течение 15 минут в рабочее время." },
  { step: "02", title: "Консультация и план", desc: "Осмотр, снимок при необходимости, прозрачная смета." },
  { step: "03", title: "Лечение", desc: "По согласованному плану. Без скрытых доплат." },
  { step: "04", title: "Контроль и гарантия", desc: "Сопровождение после процедуры. Гарантия на работы." },
];

const Index = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Заполните имя и телефон", variant: "destructive" });
      return;
    }
    toast({ title: "Заявка принята", description: "Администратор перезвонит в течение 15 минут." });
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-display font-extrabold text-lg">
            <span className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground">А</span>
            <span>АРДент</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition">Услуги</a>
            <a href="#reviews" className="hover:text-foreground transition">Отзывы</a>
            <a href="#process" className="hover:text-foreground transition">Как работаем</a>
            <a href="#contacts" className="hover:text-foreground transition">Контакты</a>
          </nav>
          <Button asChild size="sm" className="bg-gradient-primary hover:opacity-90 shadow-soft">
            <a href="#request">Записаться</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-14 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-sm shadow-soft mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Принимаем сегодня · Москва
            </div>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-5">
              Стоматология АРДент. <span className="text-primary">Спокойный приём</span> и понятные цены.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              5 лет принимаем пациентов в Москве. Лечение, гигиена, имплантация и детский приём — без давления и скрытых доплат.
              Запишитесь онлайн или по телефону за минуту.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-card">
                <a href="#request">Записаться на приём <ChevronRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+74951234567"><Phone className="mr-2 h-4 w-4" /> +7 (495) 123-45-67</a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                </div>
                <span className="text-sm font-semibold">4.9 на Яндекс.Картах</span>
              </div>
              <div className="text-sm text-muted-foreground">5 лет работы · 2 800+ пациентов</div>
            </div>
          </div>

          <div className="relative">
            <img
              src={clinicHero}
              alt="Кабинет стоматологии АРДент в Москве"
              width={1536}
              height={1024}
              className="rounded-2xl shadow-card w-full h-auto object-cover aspect-[4/3]"
            />
            <Card className="absolute -bottom-6 -left-4 md:-left-8 p-4 shadow-card max-w-[260px]">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span className="font-semibold text-sm">Гарантия на работы</span>
              </div>
              <p className="text-xs text-muted-foreground">До 2 лет на пломбы и реставрации</p>
            </Card>
            <Card className="hidden md:block absolute -top-4 -right-4 p-4 shadow-card">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span>Перезвоним за 15 минут</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-card">
        <div className="container py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "5 лет", l: "на рынке Москвы" },
            { n: "4.9★", l: "рейтинг Яндекс.Карт" },
            { n: "2 800+", l: "благодарных пациентов" },
            { n: "15 мин", l: "среднее время ответа" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display font-extrabold text-2xl md:text-3xl text-primary">{s.n}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-sm text-primary font-semibold mb-2">Отзывы пациентов</div>
              <h2 className="font-display font-bold text-3xl md:text-4xl">Нам доверяют — и возвращаются</h2>
            </div>
            <a href="https://yandex.ru/maps" target="_blank" rel="noopener" className="text-sm text-primary hover:underline">
              Все отзывы на Яндекс.Картах →
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <Card key={r.name} className="p-6 shadow-soft hover:shadow-card transition">
                <div className="flex mb-3">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                </div>
                <p className="text-foreground/90 mb-4 leading-relaxed">«{r.text}»</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-3">
                  <span className="font-semibold text-foreground">{r.name}</span>
                  <span>{r.date}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <div className="text-sm text-primary font-semibold mb-2">Услуги</div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Полный спектр стоматологии в одной клинике</h2>
            <p className="text-muted-foreground">Цены указаны ориентировочно. Точная стоимость — после консультации и осмотра.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Card key={s.title} className="p-6 shadow-soft hover:shadow-card transition group">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-4 group-hover:scale-105 transition">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="font-semibold text-primary">{s.price}</span>
                  <a href="#request" className="text-sm text-foreground hover:text-primary inline-flex items-center">
                    Записаться <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-16 md:py-24">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={smileImg}
              alt="Результат работы стоматолога АРДент"
              width={1024}
              height={1024}
              loading="lazy"
              className="rounded-2xl shadow-card w-full h-auto object-cover aspect-square"
            />
          </div>
          <div>
            <div className="text-sm text-primary font-semibold mb-2">Результаты</div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-5">Каждый случай — план и фото-отчёт</h2>
            <p className="text-muted-foreground mb-6">
              Мы документируем работу: снимки до и после, описание этапов, рекомендации по уходу. Это помогает контролировать
              результат и спокойно планировать следующие визиты.
            </p>
            <ul className="space-y-3">
              {[
                "Фото-протокол на каждом этапе",
                "Заключение врача с понятным описанием",
                "Рекомендации по уходу в письменном виде",
                "Связь с врачом после приёма",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <div className="text-sm text-primary font-semibold mb-2">Как мы работаем</div>
            <h2 className="font-display font-bold text-3xl md:text-4xl">От заявки до результата — без сюрпризов</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p) => (
              <Card key={p.step} className="p-6 shadow-soft">
                <div className="font-display font-extrabold text-3xl text-primary/30 mb-3">{p.step}</div>
                <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Request form */}
      <section id="request" className="py-16 md:py-24">
        <div className="container grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-sm text-primary font-semibold mb-2">Запись на приём</div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Оставьте заявку — перезвоним за 15 минут</h2>
            <p className="text-muted-foreground mb-6">
              Подскажем удобное время, расскажем о стоимости и подберём врача под вашу задачу. Без обязательств.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">+7 (495) 123-45-67</div>
                  <div className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">WhatsApp / Telegram</div>
                  <div className="text-sm text-muted-foreground">Ответим в мессенджере, если так удобнее</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">Москва, ул. Примерная, д. 12</div>
                  <div className="text-sm text-muted-foreground">5 минут пешком от метро</div>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-6 md:p-8 shadow-card">
            <form onSubmit={submit} className="space-y-4">
              <div>
                <Label htmlFor="name">Ваше имя</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Как к вам обращаться" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="msg">Что беспокоит (необязательно)</Label>
                <Textarea id="msg" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Например: чистка и осмотр" className="mt-1.5 min-h-[90px]" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:opacity-90">
                Записаться на приём
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-primary text-primary-foreground py-12">
        <div className="container grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 font-display font-extrabold text-lg mb-3">
              <span className="w-8 h-8 rounded-lg bg-primary-foreground/15 flex items-center justify-center">А</span>
              Стоматология АРДент
            </div>
            <p className="text-sm text-primary-foreground/75">
              Лицензия № ЛО-77-XX-XXXXXX. Имеются противопоказания, необходима консультация специалиста.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-3">Контакты</div>
            <ul className="space-y-2 text-sm text-primary-foreground/85">
              <li>+7 (495) 123-45-67</li>
              <li>info@ardent-clinic.ru</li>
              <li>Москва, ул. Примерная, д. 12</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Режим работы</div>
            <ul className="space-y-2 text-sm text-primary-foreground/85">
              <li>Пн–Пт: 9:00 — 21:00</li>
              <li>Сб–Вс: 10:00 — 20:00</li>
            </ul>
          </div>
        </div>
        <div className="container mt-10 pt-6 border-t border-primary-foreground/15 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Стоматология АРДент. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Index;
