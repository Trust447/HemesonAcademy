// ============================================================
// ALL SITE CONTENT — edit here to update the website
// ============================================================

export const SITE = {
  // ── CONTACT ──────────────────────────────────────────────
  whatsapp: '+2348144082663',      
  principal: 'Mr. Gideon Ihemebiri', 
  principal_img: '/images/principal.webp',
  phone: ['+234 814 408 2663', '+234 803 898 2154'],
  email: {
    admissions: 'admissions@hemesonacademy.edu.ng',
    info:        'info@hemesonacademy.edu.ng',
  },
  address: 'Umu-Ukaegbu, Umuejije (Opp "One Man"), Osisioma-Ngwa LGA, Aba, Abia State, Nigeria',
  hours:   'Mon–Fri: 8:00am – 5:00pm\nSat: 9:00am – 1:00pm',

  // ── STATS STRIP ──────────────────────────────────────────
  stats: [
    { num: '100%', label: 'WAEC / NECO Pass Rate' },
    { num: '300+', label: 'Students Enrolled' },
    { num: '20+',  label: 'Expert Educators' },
    { num: '9+',  label: 'Years of Excellence' },
  ],

  // ── VALUES SECTION ───────────────────────────────────────
  values: [
    { num: '01', name: 'Excellence',  desc: 'We refuse to settle. Our students and staff are held to the highest standards — because doing anything less dishonours the extraordinary talent in every child.' },
    { num: '02', name: 'Integrity',   desc: 'Honesty is the foundation of our community. Our students are guided to make ethical decisions in the classroom and beyond — building a reputation that lasts a lifetime.' },
    { num: '03', name: 'Innovation',  desc: 'We embrace new methods of teaching and learning — from STEM clubs to digital classrooms — ensuring our students are equipped for a world that is constantly evolving.' },
    { num: '04', name: 'Community',   desc: 'Hemeson Academy is more than a school — it is a family. Warm, lasting relationships between students, teachers and parents rooted in shared purpose and mutual respect.' },
    { num: '05', name: 'Heritage',    desc: 'We are proudly Nigerian. Knowing where you come from is the first step to knowing where you are going.' },
    { num: '06', name: 'Leadership',  desc: 'Every Hemeson student is a future leader. Through student council, debate, prefect programmes and service, we develop the next generation of nation-builders.' },
  ],

  // ── SCHOOL LEVELS ────────────────────────────────────────
  levels: [
    { icon: 'seedling', image: '/images/levels/nursery.webp', name: 'Early Childhood', ages: 'Nursery & KG · Ages 2–5',   desc: 'Play-based learning that develops curiosity, language, motor skills and a deep love of learning.',          tags: ['Phonics', 'Numeracy', 'Arts & Craft', 'Music'] },
    { icon: 'pencil', image: '/images/levels/basic.webp', name: 'Basic School',  ages: 'Basic 1–5 · Ages 6–12',   desc: 'Rigorous foundational academics building confident and intellectually curious learners.',                      tags: ['Mathematics', 'English', 'Basic Science', 'Igbo'] },
    { icon: 'book', image: '/images/levels/junior-secondary.webp', name: 'Junior Secondary',ages: 'JSS 1–3 · Ages 12–15',      desc: 'Broad exploratory learning that prepares students for their WAEC track and develops critical thinking.',      tags: ['Mathematics', 'English', 'Basic Tech', 'Computer'] },
    { icon: 'gradcap', image: '/images/levels/senior-secondary.webp', name: 'Senior Secondary',ages: 'SSS 1–3 · Ages 15–18',      desc: 'Science, Arts & Commercial streams with intensive WAEC/NECO prep and university counselling.',              tags: ['Physics', 'Chemistry', 'Literature', 'Economics'] },
  ],

  // ── TESTIMONIALS ─────────────────────────────────────────
  voices: [
    { initial: 'A', name: 'Adaeze O.',      role: 'SSS3 Student · Science Stream',   quote: 'Hemeson Academy gave me more than good grades. It gave me the confidence to believe I could compete with anyone in Nigeria — and beyond. My teachers treated me like I truly mattered.' },
    { initial: 'C', name: 'Chukwuemeka I.', role: 'JSS2 Student',                    quote: 'I love coming to school every single day. The teachers make learning exciting and I have made the best friends here. Since joining Hemeson I have won two inter-school competitions.' },
    { initial: 'N', name: 'Mrs. Nwosu',     role: 'Parent · Basic 4',              quote: 'As a parent, choosing a school is the most important decision I have made. Hemeson Academy exceeded every expectation. My daughter is thriving academically and has grown enormously.' },
    { initial: 'O', name: 'Obiageli U.',    role: '2023 WAEC Graduate · 8 A\'s',     quote: 'I sat 9 WAEC subjects and earned 8 A\'s and 1 B. People ask my secret — I tell them honestly: Hemeson Academy and consistent hard work. The foundation here is exceptional.' },
    { initial: 'E', name: 'Mr. Eze',        role: 'Mathematics Teacher',             quote: 'What sets Hemeson apart is the culture — every teacher genuinely cares about each student\'s future. That spirit produces extraordinary results year after year.' },
  ],

  // ── NEWS ARTICLES ─────────────────────────────────────────
  // Years are DYNAMIC — they auto-update every year via new Date().getFullYear()
  // HOW TO ADD IMAGES:
  //   1. Put your photo in public/images/news/   e.g. public/images/news/cultural-day.jpg
  //   2. Set the image field: image: '/images/news/cultural-day.jpg'
  //   3. Recommended size: 1200 × 700 px landscape
  //   4. If image is null the coloured gradient + icon shows instead

  news: (function() {
    // Nigerian academic session runs September – July
    // If we're in Sept or later, the new session has already started
    const now  = new Date()
    const base = now.getMonth() >= 8 ? now.getFullYear() : now.getFullYear() - 1
    const Y    = base          // session start year  e.g. 2025
    const NY   = base + 1     // session end year    e.g. 2026
    const PY   = base - 1     // previous session start

    return [
      // ── 1. CLASS PERFORMANCE / TERM RESULTS ──────────────────
      {
        id: 'class-performance',
        featured: true,
        cat: 'Academic',
        date: '2025',
        author: 'Academic Department',
        title: `${Y} First-Term Results: Outstanding Class Performance Across All Levels`,
        excerpt: `Hemeson Academy students delivered exceptional first-term results in ${Y}, with over 85% of pupils across all classes scoring above average — a new school record.`,
        body: [
          `The results of the ${Y} first-term examinations have been released, and Hemeson Academy is proud to report outstanding performance across every class — from Nursery through Senior Secondary School.`,
          `In the Basic School division, Basic 4 emerged as the top-performing class with an average score of 91% across all subjects. Basic 5 students recorded a remarkable 94% average in Mathematics, and every pupil in Basic 5 passed English Language with distinction.`,
          `The Junior Secondary classes produced equally impressive results. JSS2 recorded the highest average in Basic Science at 88%, while JSS3 students — preparing for their BECE — achieved a class average of 87% in Mathematics and 89% in English Language.`,
          `At the Senior Secondary level, SSS2 Science students led with a 90% average in Physics and Chemistry combined. The SSS3 class, whose WAEC examinations are fast approaching, recorded their strongest ever first-term performance with a school average of 86%.`,
          `"These results are a reflection of the daily hard work and dedication our teachers bring to every single lesson," said Principal Mr. Gideon Ihemebiri at the end-of-term assembly. "We are particularly proud that no class recorded an average below 78% — every child at Hemeson is moving forward."`,
          `Parents will receive individual result booklets at the parent-teacher meeting scheduled for the first week of the new term. Students who excelled will be recognised at the ${Y} Prize-Giving Day ceremony.`,
        ],
        image: null,
        bg: 'linear-gradient(135deg,#0b1f3a,#1e3f72)',
        icon: 'chart',
        tags: ['Academic', 'Results', 'Excellence'],
      },

      // ── 2. CULTURAL DAY ──────────────────────────────────────
      {
        id: 'cultural-day',
        featured: false,
        cat: 'Culture',
        date: '2025',
        author: 'Hemeson Academy',
        title: `Cultural Day ${Y}: A Breathtaking Celebration of Nigerian Heritage`,
        excerpt: `Hemeson Academy's ${Y} Cultural Day was a stunning showcase of Igbo tradition, Nigerian diversity and the extraordinary creativity of our students.`,
        body: [
          `Hemeson Academy's annual Cultural Day ${Y} transformed the school into a vibrant tapestry of colours, sounds and traditions, as students, staff and parents gathered to celebrate the richness of Nigerian — and especially Igbo — heritage.`,
          `Over 300 participants filled the school grounds dressed in the traditional attire of Nigeria's many ethnic groups. Each class was assigned a different state or cultural region to represent, and the effort that went into research, costume preparation and performance was remarkable.`,
          `The centrepiece of the day was the grand cultural parade, led by the Nursery and Kindergarten pupils who delighted the crowd with a joyful display of miniature Atilogwu costumes. The Basic classes followed with a dramatic walk-through of Nigeria's six geopolitical zones, accompanied by traditional drums and flutes.`,
          `The most anticipated event was the SSS drama performance — "Ọ Bụ Anyị": an original play, written and directed entirely by SSS2 students, exploring themes of identity, belonging and the beauty of Igbo language. The 50-minute production received a standing ovation and drew tears from several parents in the audience.`,
          `A traditional food festival ran throughout the day, with families contributing dishes from across Nigeria — from Abia State's famous ugba and ukwa to jollof rice, afang soup, and miyan kuka. The aroma alone drew crowds from neighbouring streets.`,
          `"Cultural Day is one of the most important days in our school calendar," said Principal Mr. Gideon Ihemebiri. "It reminds every child that their roots are not a limitation — they are their greatest strength."`,
        ],
        image: null,
        bg: 'linear-gradient(135deg,#0d2035,#142d52)',
        icon: 'drama',
        tags: ['Culture', 'Heritage', 'Events', 'Community'],
      },

      // ── 3. COLOUR DAY ────────────────────────────────────────
      {
        id: 'colour-day',
        featured: false,
        cat: 'Events',
        date: '2025',
        author: 'Student Affairs Office',
        title: `Colour Day ${Y}: Hemeson Lights Up in a Riot of Joy and School Spirit`,
        excerpt: `Students and staff painted the school in the colours of their houses for Hemeson's most joyful day of the year — a day of games, music and unstoppable energy.`,
        body: [
          `Hemeson Academy's ${Y} Colour Day was everything the school community had been waiting for — a high-energy, colour-soaked celebration of school spirit, friendship and fun that left every student smiling.`,
          `Students arrived dressed head-to-toe in their house colours. The result was a spectacular human rainbow that filled every corridor, classroom and courtyard with colour and joy.`,
          `The day kicked off with the grand colour parade, where each house marched through the school grounds to the beat of drums and the cheers of rival houses. House captains led their teams with banners, flags and chants that had been rehearsed for weeks.`,
          `A full programme of inter-house competitions followed — a sack race, egg-and-spoon, musical chairs, tug of war, and a dance battle that had teachers and students competing side by side. Several teachers joined the dance-off to the delight — and shock — of their students.`,
          `The afternoon concluded with the Colour Dash — a sponsored fun run around the school perimeter where students were showered with coloured powder as they crossed each checkpoint, turning the finish line into a blur of yellow, red, blue and green.`,
          `The Principal Mr. Gideon Ihemebiri reminded everyone at the closing ceremony: "Today, there are no losers at Hemeson — only champions of joy."`,
        ],
        image: null,
        bg: 'linear-gradient(135deg,#1a0a40,#3d1a7a)',
        icon: 'palette',
        tags: ['Events', 'School Spirit', 'Fun', 'Inter-House'],
      },

      // ── 4. ADMISSIONS ────────────────────────────────────────
      {
        id: 'admissions-open',
        featured: false,
        cat: 'Admissions',
        date: `September ${Y}`,
        author: 'Admissions Office',
        title: `${Y}/${NY} Admissions Now Open — Secure Your Child's Place Today`,
        excerpt: `Applications for the ${Y}/${NY} academic session are now open for all levels from Nursery to SSS3. Places are limited — apply early to avoid disappointment.`,
        body: [
          `Hemeson Academy is delighted to announce that applications for the ${Y}/${NY} academic session are now officially open for all levels — from Nursery and Kindergarten through to Senior Secondary School (SSS3).`,
          `This year, we are particularly excited to welcome families joining us for the first time. Whether your child is just beginning their learning journey in our Early Childhood programme, transitioning to secondary school, or preparing for their final years before university, Hemeson Academy provides the environment, the teachers and the community to help them thrive.`,
          `Available places for ${Y}/${NY} include: Nursery & Kindergarten (Ages 2–5), Basic 1 through Basic 5, Junior Secondary School (JSS 1–3), and Senior Secondary School (SSS 1–3) in the Science, Arts and Commercial streams.`,
          `Our admissions process is simple and straightforward. Families begin by submitting an enquiry — either via the online form on this website or by sending a WhatsApp message directly to our admissions team. We will then schedule a campus tour and a friendly, pressure-free placement assessment for your child.`,
          `Offer letters are typically issued within five working days of the assessment. Enrolment is confirmed upon acceptance of the offer and completion of the registration process. We encourage families to apply as early as possible, as places fill quickly — particularly at the Nursery, JSS1 and SSS1 levels.`,
          `For any questions about fees, curriculum, transport, or the admissions process, please contact our admissions office directly at admissions@hemesonacademy.edu.ng or call us during office hours. You are also welcome to visit the school in person — we love meeting prospective families.`,
        ],
        image: null,
        bg: 'linear-gradient(135deg,#091828,#0f2540)',
        icon: 'clipboard',
        tags: ['Admissions', 'Announcement', `${Y}/${NY}`],
      },
    ]
  })(),

  // ── COLLAGE GRID ──────────────────────────────────────────
  // collage: [
  //   { label: 'Sports & Athletics', icon: 'sport', wide: false, tall: true,  bg: 'linear-gradient(135deg,#0b1f3a,#142d52)' },
  //   { label: 'STEM & Technology',  icon: 'lightbulb', wide: false, tall: false, bg: 'linear-gradient(135deg,#142d52,#1e3f72)' },
  //   { label: 'Drama & Arts',       icon: 'drama', wide: false, tall: false, bg: 'linear-gradient(135deg,#0a1828,#0f2540)' },
  //   { label: 'Library',            icon: 'book', wide: false, tall: false, bg: 'linear-gradient(135deg,#142d52,#1e3f72)' },
  //   { label: 'Cultural Events',    icon: 'globe', wide: false, tall: false, bg: 'linear-gradient(135deg,#0a1525,#0f2040)' },
  //   { label: 'Graduation Day',     icon: 'gradcap', wide: true,  tall: false, bg: 'linear-gradient(135deg,#091525,#112035)' },
  //   { label: 'Debate Club',        icon: 'users', wide: false, tall: false, bg: 'linear-gradient(135deg,#1a2840,#0d1c30)' },
  // ],
}
