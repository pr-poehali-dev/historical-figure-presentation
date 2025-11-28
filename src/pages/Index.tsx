import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const presentationContent = [
  {
    id: 0,
    title: 'Марк Рейберт',
    subtitle: 'Пионер динамической робототехники',
    years: '1949 — настоящее время',
    image: 'https://cdn.poehali.dev/projects/24a9a83a-5dde-4581-9964-6469b48174f5/files/dc5fa275-de50-4644-94be-420f2adf790b.jpg',
    type: 'title'
  },
  {
    id: 1,
    title: 'Почему эта личность важна',
    content: [
      'Марк Рейберт — создатель Boston Dynamics и революционер в области динамической робототехники',
      'Первым применил принципы динамического баланса к роботам, позволив им двигаться как живые существа',
      'Его разработки изменили представление о возможностях робототехники',
    ],
    context: 'Эпоха: конец XX — начало XXI века. Период стремительного развития вычислительной техники и искусственного интеллекта, когда роботы перешли от статичных манипуляторов к динамичным автономным системам.',
    type: 'content'
  },
  {
    id: 2,
    title: 'Биография',
    content: [
      'Родился в 1949 году в США',
      'Получил степень бакалавра в Северо-Восточном университете',
      'PhD по компьютерным наукам в MIT (1977)',
      'Профессор Carnegie Mellon University (1980-1986)',
      'Основатель и CTO Boston Dynamics (1992-2019)',
      'С 2020 — профессор MIT и основатель Boston Dynamics AI Institute',
    ],
    highlights: [
      'Создал Leg Laboratory в MIT',
      'Разработал первых прыгающих роботов',
      'Вывел Boston Dynamics в мировые лидеры робототехники',
    ],
    type: 'content'
  },
  {
    id: 3,
    title: 'Главные изобретения: Hopper & BigDog',
    inventions: [
      {
        name: 'Hopper (1980-е)',
        description: 'Одноногий прыгающий робот — первая успешная демонстрация динамического баланса',
        principle: 'Использует гидравлику и алгоритмы управления для поддержания равновесия в воздухе и при приземлении',
      },
      {
        name: 'BigDog (2005)',
        description: 'Четвероногий робот-грузоноситель для военных целей, способный передвигаться по пересечённой местности',
        principle: 'Гидравлические приводы + система стабилизации позволяют нести до 150 кг груза по любой поверхности',
      },
    ],
    image: 'https://cdn.poehali.dev/projects/24a9a83a-5dde-4581-9964-6469b48174f5/files/0ca8a311-eb7f-4411-aa4a-a036f3ab42e0.jpg',
    type: 'inventions'
  },
  {
    id: 4,
    title: 'Главные изобретения: Spot & Atlas',
    inventions: [
      {
        name: 'Spot (2015)',
        description: 'Коммерческий робот-собака для инспекций, мониторинга и исследований',
        principle: 'Электрические приводы + компьютерное зрение + автономная навигация',
      },
      {
        name: 'Atlas (2013)',
        description: 'Гуманоидный робот, способный выполнять паркур, сальто и сложные манипуляции',
        principle: 'Комбинация гидравлики, электроприводов и продвинутых алгоритмов баланса и координации',
      },
    ],
    image: 'https://cdn.poehali.dev/projects/24a9a83a-5dde-4581-9964-6469b48174f5/files/1f1bc034-7737-46b7-b531-be5dd66936c5.jpg',
    type: 'inventions'
  },
  {
    id: 5,
    title: 'Главные изобретения: Handle',
    inventions: [
      {
        name: 'Handle (2017)',
        description: 'Робот на колёсах с манипуляторами для складской логистики',
        principle: 'Комбинация колёс и балансировки на двух точках опоры + захватные механизмы для перемещения грузов',
      },
    ],
    additionalInfo: 'Все изобретения Рейберта объединяет принцип динамического баланса — роботы активно используют инерцию и гравитацию, а не борются с ними.',
    type: 'inventions'
  },
  {
    id: 6,
    title: 'Вклад в науку и технику',
    content: [
      'Создал научную школу динамической робототехники',
      'Доказал возможность создания роботов с естественной локомоцией',
      'Boston Dynamics стала эталоном качества в робототехнике',
      'Влияние: компании по всему миру копируют подходы Рейберта',
      'Современные аналоги: роботы ANYmal (ETH Zurich), Unitree (Китай), Ghost Robotics',
      'Последователи применяют его принципы в медицинской робототехнике, спасательных операциях, космических миссиях',
    ],
    type: 'content'
  },
  {
    id: 7,
    title: 'Награды и признание',
    awards: [
      'Член Национальной инженерной академии США',
      'Премия Engelberger Robotics Award (2000)',
      'Более 100 научных публикаций',
      'Множество патентов на технологии локомоции и управления роботами',
      'Упоминания в ведущих учебниках по робототехнике',
      'Видео с роботами Boston Dynamics набрали сотни миллионов просмотров',
    ],
    type: 'content'
  },
  {
    id: 8,
    title: 'Интересные факты',
    facts: [
      'Spot был первым коммерческим роботом Boston Dynamics — любой может его купить',
      'Робот Atlas может делать сальто назад — уровень олимпийского гимнаста',
      'BigDog создавался для военных, но был слишком шумным для скрытых операций',
      'В 2021 Boston Dynamics была продана Hyundai за $1.1 млрд',
    ],
    quote: '"Роботы должны двигаться как животные, а не как машины" — Марк Рейберт',
    type: 'content'
  },
  {
    id: 9,
    title: 'Заключение',
    content: [
      'Марк Рейберт навсегда изменил робототехнику',
      'Его принцип динамического баланса стал стандартом индустрии',
      'Boston Dynamics — доказательство, что роботы могут быть такими же ловкими, как живые существа',
      'Перспективы: роботы-спасатели, помощники в быту, освоение космоса и океана',
      'Идеи Рейберта будут развиваться десятилетиями',
    ],
    callToAction: 'Изучайте робототехнику — будущее за динамичными автономными системами!',
    type: 'content'
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < presentationContent.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const progress = ((currentSlide + 1) / presentationContent.length) * 100;

  const slide = presentationContent[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#1e2a3a] to-[#1A1F2C] flex flex-col">
      <div className="flex-1 flex items-center justify-center p-8">
        <Card className="w-full max-w-6xl bg-card/95 backdrop-blur-sm border-border/50 shadow-2xl overflow-hidden">
          <div className="p-12 min-h-[600px] flex flex-col">
            {slide.type === 'title' && (
              <div className="flex flex-col items-center justify-center flex-1 text-center space-y-8 animate-fade-in">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/50 shadow-xl">
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4">
                  <h1 className="text-6xl font-bold text-primary tracking-tight">{slide.title}</h1>
                  <p className="text-2xl text-secondary font-semibold">{slide.subtitle}</p>
                  <p className="text-xl text-muted-foreground">{slide.years}</p>
                </div>
                <div className="flex items-center gap-3 text-primary/70 mt-8">
                  <Icon name="Cpu" size={32} />
                  <Icon name="Zap" size={32} />
                  <Icon name="Cog" size={32} />
                </div>
              </div>
            )}

            {slide.type === 'content' && (
              <div className="flex flex-col flex-1 space-y-6 animate-fade-in">
                <div className="flex items-center gap-3 border-b border-border/50 pb-4">
                  <Icon name="CircleDot" className="text-primary" size={32} />
                  <h2 className="text-4xl font-bold text-foreground">{slide.title}</h2>
                </div>
                
                <div className="flex-1 space-y-4">
                  {slide.content && slide.content.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-muted/30 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-lg text-foreground/90">{item}</p>
                    </div>
                  ))}

                  {slide.context && (
                    <div className="bg-accent/10 border border-accent/30 p-5 rounded-lg mt-6">
                      <p className="text-base text-foreground/80 italic">{slide.context}</p>
                    </div>
                  )}

                  {slide.highlights && (
                    <div className="mt-6 space-y-3">
                      <h3 className="text-xl font-semibold text-secondary flex items-center gap-2">
                        <Icon name="Star" size={24} />
                        Ключевые достижения
                      </h3>
                      {slide.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 pl-4">
                          <Icon name="ArrowRight" className="text-secondary flex-shrink-0 mt-1" size={18} />
                          <p className="text-base text-foreground/80">{item}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {slide.awards && slide.awards.map((award, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-muted/30 p-4 rounded-lg">
                      <Icon name="Award" className="text-secondary flex-shrink-0 mt-1" size={20} />
                      <p className="text-lg text-foreground/90">{award}</p>
                    </div>
                  ))}

                  {slide.facts && (
                    <>
                      {slide.facts.map((fact, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-muted/30 p-4 rounded-lg">
                          <Icon name="Sparkles" className="text-secondary flex-shrink-0 mt-1" size={20} />
                          <p className="text-lg text-foreground/90">{fact}</p>
                        </div>
                      ))}
                      {slide.quote && (
                        <div className="bg-primary/10 border-l-4 border-primary p-5 rounded-r-lg mt-6">
                          <p className="text-lg text-foreground italic">{slide.quote}</p>
                        </div>
                      )}
                    </>
                  )}

                  {slide.callToAction && (
                    <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-lg mt-6 border border-primary/30">
                      <p className="text-xl font-semibold text-center text-foreground">{slide.callToAction}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {slide.type === 'inventions' && (
              <div className="flex flex-col flex-1 space-y-6 animate-fade-in">
                <div className="flex items-center gap-3 border-b border-border/50 pb-4">
                  <Icon name="Lightbulb" className="text-secondary" size={32} />
                  <h2 className="text-4xl font-bold text-foreground">{slide.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 flex-1">
                  <div className="space-y-6">
                    {slide.inventions?.map((invention, idx) => (
                      <Card key={idx} className="p-5 bg-muted/30 border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
                        <h3 className="text-2xl font-bold text-primary mb-3">{invention.name}</h3>
                        <p className="text-base text-foreground/90 mb-3">{invention.description}</p>
                        <div className="flex items-start gap-2 bg-accent/10 p-3 rounded-md">
                          <Icon name="Info" className="text-secondary flex-shrink-0 mt-0.5" size={18} />
                          <p className="text-sm text-foreground/80"><strong>Принцип:</strong> {invention.principle}</p>
                        </div>
                      </Card>
                    ))}
                    {slide.additionalInfo && (
                      <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg">
                        <p className="text-sm text-foreground/90 italic">{slide.additionalInfo}</p>
                      </div>
                    )}
                  </div>

                  {slide.image && (
                    <div className="flex items-center justify-center">
                      <div className="rounded-lg overflow-hidden border-2 border-primary/30 shadow-xl w-full h-full max-h-[500px]">
                        <img src={slide.image} alt="Invention" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>

      <div className="bg-card/50 backdrop-blur-sm border-t border-border/50 p-6">
        <div className="max-w-6xl mx-auto space-y-4">
          <Progress value={progress} className="h-2" />
          
          <div className="flex items-center justify-between">
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <Icon name="ChevronLeft" size={20} />
              Назад
            </Button>

            <div className="flex items-center gap-2">
              {presentationContent.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentSlide
                      ? 'bg-primary w-8'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Перейти к слайду ${idx + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              disabled={currentSlide === presentationContent.length - 1}
              size="lg"
              className="gap-2"
            >
              Вперёд
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            Слайд {currentSlide + 1} из {presentationContent.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
