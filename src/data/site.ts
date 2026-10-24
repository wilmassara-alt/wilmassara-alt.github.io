export const SITE = {
  name: 'Wil Massara',
  url: 'https://wilmassara.com',
  email: 'hello@wilmassara.com',
  tagline: 'Gen Z keynote speaker on Gen Z at work, retention, culture and youth leadership',
  description:
    'Gen Z keynote speaker for staff conferences, leadership offsites and HR events: what Gen Z wants at work, retention and culture. Founded YLAA at 15. Worldwide.',
  longDescription:
    'Wil Massara is an Australian Gen Z keynote speaker on youth leadership, education and the future of work. Founder of Youth Leadership Academy Australia at 15, reaching 65,000+ young people across 1,500+ schools. Available for keynotes worldwide.',
  locale: 'en-AU',
  base: 'Sydney, Australia',
  jobTitles: ['Keynote Speaker', 'Founder & CEO, Youth Leadership Academy Australia', 'General Manager, The Youth Impact Foundation', 'Co-host, Podclass'],
  social: {
    linkedin: 'https://www.linkedin.com/in/wil-massara/',
    instagram: 'https://www.instagram.com/wilmassara/',
    facebook: 'https://www.facebook.com/wilmassara29/',
    linktree: 'https://linktr.ee/wilmassara',
  },
  sameAs: [
    'https://www.linkedin.com/in/wil-massara/',
    'https://www.instagram.com/wilmassara/',
    'https://www.facebook.com/wilmassara29/',
    'https://www.ylaaus.com/speakers/wil-massara',
    'https://youthleadershipandbusinesssummit.org.au/post/wil-massara',
    'https://www.saxton.com.au/speakers/wil-massara',
    'https://www.icmi.com.au/wil-massara/',
    'https://www.allamericanspeakers.com/speakers/463169/Wil-Massara',
    'https://open.spotify.com/show/1HllFGXHACPMngDsBFHi4A',
  ],
  orgs: {
    ylaa: { name: 'Youth Leadership Academy Australia', url: 'https://www.ylaaus.com', founded: '2018' },
    tyif: { name: 'The Youth Impact Foundation', url: 'https://www.theyouthimpactfoundation.org.au' },
    ylbs: { name: 'Magic Moments Youth Leadership & Business Summit', url: 'https://youthleadershipandbusinesssummit.org.au' },
    podclass: { name: 'Podclass', url: 'https://open.spotify.com/show/1HllFGXHACPMngDsBFHi4A' },
  },
};

export const STATS = [
  { value: 65000, suffix: '+', label: 'young people reached', note: 'through YLAA programs since 2018' },
  { value: 1500, suffix: '+', label: 'schools nationally', note: 'across every state and territory' },
  { value: 15, suffix: '', label: 'years old when he founded YLAA', note: 'first event: 65 students in a football clubroom' },
  { value: 99, suffix: '%', label: 'would recommend a YLAA program', note: 'post-program survey, University of Melbourne framework' },
];

export const AWARDS = [
  { year: '2025', title: 'WA Young Achiever of the Year, Community Leadership', by: '7NEWS Young Achiever Awards (Catholic Education WA Young Leadership Award)' },
  { year: '2025', title: 'Mission Australia Young Changemaker Award', by: 'WA Youth Awards, Youth Affairs Council of WA' },
  { year: '2025', title: 'One of 50 global changemakers', by: 'Global Changemakers Youth Summit, Cape Town' },
  { year: '2024', title: 'Sydney Young Entrepreneur Awards finalist', by: 'Business News Australia, Sustainability & Social Responsibility' },
  { year: '2022', title: 'Changemaker Entrepreneur of the Year', by: 'The Entourage' },
];

export const MEDIA_LOGOS = ['Studio 10', 'news.com.au', 'Herald Sun', 'The Daily Telegraph', 'NZ Herald', 'The Educator', 'Hit Network', '6PR', 'Daily Mail', 'South Western Times'];

export const CLIENT_LOGOS = [
  'Road Safety Commission WA', 'Catholic Education WA', 'Inner West Council', 'Positive Schools', 'Future Schools Alliance', 'Bendigo Bank', 'Lotterywest', 'Shire of Broome', 'Corangamite Shire', 'Federation Council', 'Mildura Rural City Council', 'National Leadership Camp', 'Magic Moments Foundation', 'Department of Communities WA',
];

export type Talk = {
  slug: string; title: string; kicker: string; format: string; length: string; meta: string;
  bestFor: string[]; audiences: string[]; summary: string; promise: string;
  takeaways: string[]; description: string[]; quote?: string;
};

export const TALKS: Talk[] = [
  {
    slug: 'gen-z-at-work',
    title: 'Gen Z at Work',
    kicker: 'From someone who is actually Gen Z',
    meta: 'A keynote on what Gen Z actually values at work, why young staff leave and what to change, from a speaker who is Gen Z. For corporate, HR and leadership teams.',
    format: 'Keynote or workshop',
    length: '45 to 90 minutes',
    bestFor: ['Staff conferences and all-hands', 'HR and people leaders', 'Leadership offsites', 'Culture and engagement days', 'Graduate programs'],
    audiences: ['corporate', 'conferences'],
    summary: 'What the generation entering your workforce actually values, why they leave at month 14, and what to change about culture, feedback and leadership to keep them. From a speaker who is Gen Z.',
    promise: 'Leaders leave with a clear picture of how Gen Z makes decisions about work, and five changes they can make the next week.',
    takeaways: [
      'What Gen Z actually values at work, backed by research and 65,000+ conversations',
      'The real reasons young staff leave in the first 12 months',
      'Purpose, flexibility and feedback: where the generational gap is real and where it is a myth',
      'How to build a culture young staff stay in, without lowering the bar',
      'What managers over 40 get wrong about Gen Z, and the two things they get right',
    ],
    description: [
      "I am not studying Gen Z. I am one. By 2030 we will be 30% of the workforce, and most of the advice leaders are getting about us is written by people who have never been in the room.",
      "This session gives a straight, informed account of what the generation now entering the workforce values, what drives them out, and what organisations need to do differently to attract and keep them. It is built from years of working directly with young people across schools, government and community, not from a research report summarised at a distance.",
      "Expect candour. Gen Z is not lazy and not entitled. We are just not willing to work inside systems that were designed in 2010. If you lead people, this is the session that explains what is happening in your team and what to do about it.",
    ],
  },
  {
    slug: 'lead-before-youre-ready',
    title: "Lead Before You're Ready",
    kicker: "Wil's story of creating change",
    meta: 'Wil Massara\u2019s keynote on building a national organisation before his Year 12 results came back blank, and what it says about talent, age and backing people early.',
    format: 'Keynote',
    length: '30 to 60 minutes',
    bestFor: ['Opening keynote', 'Staff conferences and all-hands', 'Industry summits', 'Youth advocacy events'],
    audiences: ['conferences', 'corporate', 'schools', 'government'],
    summary: 'The story of building an organisation that reached thousands of young people before the Year 12 results came back blank, and what that says about talent, age and who we back before they have the credentials.',
    promise: 'Your audience leaves with permission to start before they feel ready, and a practical frame for backing the people around them earlier.',
    takeaways: [
      'Why "not ready" is a feeling, not a fact, and how to act anyway',
      'The three decisions that turned 65 students in a clubroom into 1,500+ schools',
      'How to spot and back talent before it has a track record',
      'A reframe of failure that works for a 16-year-old and a CEO',
    ],
    description: [
      "I got no ATAR. An empty envelope. At the same time, I was already running an organisation reaching thousands of young people across Australia.",
      "This keynote is about what I learned building something significant before most people work out what they want to do. It is not a highlight reel. It is the Collie coal-town upbringing, the first business at 11, the football clubroom in Leederville with sheets thrown over the beer fridges, and the stretch of years where the only qualification I had was that I had started.",
      "Audiences take away a different way to think about talent and age, and a challenge: who in your organisation, school or community are you waiting to back until they have proven themselves, when the proof only comes from being backed?",
    ],
    quote: 'Your age does not determine your ability to achieve extraordinary things.',
  },
  {
    slug: 'change-happens-together',
    title: 'Change Happens Together',
    kicker: 'Co-design, not for-design',
    meta: 'Co-design, not for-design. Wil Massara\u2019s keynote on intergenerational collaboration for government, councils and education systems.',
    format: 'Keynote or facilitated session',
    length: '45 to 90 minutes',
    bestFor: ['Government and councils', 'Community organisations', 'Education systems', 'Corporate strategy days'],
    audiences: ['government', 'corporate', 'schools', 'conferences'],
    summary: 'The decisions that stick are the ones made with the people they affect, not for them. A practical approach to intergenerational collaboration drawn from consulting work with government departments, councils and education systems.',
    promise: 'Your team leaves knowing the difference between consultation and co-design, and with a method they can run on their next strategy.',
    takeaways: [
      'Why most youth consultation is tokenistic, even when it is well-intentioned',
      'A five-question test for whether young people genuinely shaped a decision',
      'What councils and departments get for their money when co-design is done properly',
      'How young people and experienced leaders work on the same problem, not in parallel',
    ],
    description: [
      "Most organisations consult young people early, write the document, and never come back. The strategy gets finalised in a room without the people it is about.",
      "This session draws on my consulting work with state and federal government departments, councils and education systems across Australia to present a practical approach to intergenerational collaboration. What it looks like when young people and experienced leaders are genuinely working on the same problems, and why the outcomes are consistently better when they are.",
      "It is built on a firm belief: the best outcomes in schools, workplaces and communities come from young people and experienced leaders working together, not in parallel.",
    ],
  },
  {
    slug: 'a-framework-to-create-change',
    title: 'A Framework to Create Change',
    kicker: 'Hands-on workshop',
    meta: 'A hands-on workshop using YLAA\u2019s six-step Creating Change model: from a vague cause to a pitched project. For student leaders, youth councils and graduates.',
    format: 'Interactive workshop',
    length: '90 minutes to a full day',
    bestFor: ['Student leadership teams', 'Youth councils and advisory groups', 'Graduate cohorts', 'Community changemakers'],
    audiences: ['schools', 'government', 'corporate'],
    summary: 'The same creating-change framework YLAA has run with tens of thousands of young people: identify the issue, understand the causes, explore opportunities, plan, assign roles, pitch.',
    promise: 'Participants leave with a real project plan, not a worksheet, and the confidence to pitch it to someone who can say yes.',
    takeaways: [
      'The six-step Creating Change model used across 1,500+ schools',
      'How to turn a vague cause into a specific, winnable project',
      'Roles, responsibilities and the first 30 days',
      'Pitching to decision-makers so the idea survives contact with a budget',
    ],
    description: [
      "In this hands-on session I take participants through the framework YLAA has refined with tens of thousands of young people since 2018. It is designed to turn ideas into action.",
      "Groups identify a big issue, understand its causes, explore opportunities, build a project plan, assign roles and pitch it. It works for a Year 9 student leadership team and for a council youth advisory group, and it works for a graduate cohort that has been told to innovate without being shown how.",
    ],
  },
];

export const ALSO_SPEAKS_ON = [
  'AI in schools: why the education system must embrace it now, from a student-side view',
  'Leadership as a core skill: why it belongs beside literacy and numeracy',
  'Understanding Gen Z in the classroom: engaging students who grew up online',
  'Building a personal brand on LinkedIn as a young professional',
  'Purpose-driven business and social enterprise',
  'Regional and rural young people: closing the opportunity gap',
];

export type Testimonial = { quote: string; name: string; role: string; org: string };
export const TESTIMONIALS: Testimonial[] = [
  { quote: "Wil delivered an energised and engaging presentation at Positive Schools. He joined us as a keynote speaker at both our online event and in person in Western Australia. His awareness and careful consideration of students' perspectives offers insight and value to the increasingly complex conversation about wellbeing in schools.", name: 'Positive Schools', role: 'Conference organiser', org: 'Positive Schools Australia' },
  { quote: 'Watching Wil on stage is inspiring. He presents with confidence that resonates with people of all ages and leaves his audience feeling empowered to realise their potential and go beyond.', name: 'Future Schools Alliance', role: 'Event organiser', org: 'Future Schools' },
  { quote: "Wil Massara of Bunbury is a force of youth leadership in Australia. Young people aren't the leaders of tomorrow, they're leading now.", name: 'Awards Australia', role: 'Award citation', org: '2025 7NEWS Young Achiever Awards WA' },
];

export type Audience = {
  slug: string; name: string; h1: string; title: string; description: string; intro: string[];
  outcomes: string[]; talks: string[]; proof: string; faq: { q: string; a: string }[];
};

export const AUDIENCES: Audience[] = [
  {
    slug: 'corporate', name: 'Corporate and industry',
    h1: 'Gen Z keynote speaker for staff conferences, HR events and leadership teams',
    title: 'Gen Z Keynote Speaker for Corporate Events | Wil Massara',
    description: 'Book an actual Gen Z keynote speaker for corporate conferences, HR summits, leadership offsites and graduate programs. Gen Z at work and the future of work.',
    intro: [
      "Most Gen Z keynotes are delivered by people in their forties who have read the research. I am 23, I have run an organisation since I was 15, and I have hired, led and lost young staff. I know what the generation entering your workforce wants because I am in it.",
      "Corporate audiences book me for straight talk on attracting, leading and keeping Gen Z, and for an origin story that reminds experienced leaders what backing someone early actually looks like.",
    ],
    outcomes: ['A clear, research-backed picture of what Gen Z values at work', 'Practical changes leaders can make to retention, engagement and culture', 'An opening keynote that sets the energy for a staff conference or all-hands', 'Graduate and early-career cohort sessions that land because the speaker is a peer', 'Leadership offsite sessions on leading a workforce that is getting younger'],
    talks: ['gen-z-at-work', 'lead-before-youre-ready', 'change-happens-together'],
    proof: 'By 2030, Gen Z will make up around 30% of the workforce. The organisations that understand us now will be the ones that keep us.',
    faq: [
      { q: 'Does Wil tailor content to our industry?', a: 'Every keynote is built from a pre-event call with your team. Expect references to your sector, your workforce data and the specific questions your leaders are asking.' },
      { q: 'Can Wil do a workshop as well as a keynote?', a: 'Yes. A common format is a 45-minute keynote for the full room followed by a 90-minute working session with the leadership or people team.' },
      { q: 'Is Wil available for virtual events?', a: 'Yes. Virtual and hybrid keynotes are delivered from a professional setup in Sydney, with interactive elements built for an online audience.' },
    ],
  },
  {
    slug: 'gen-z-workplace-speaker', name: 'Gen Z in the workplace',
    h1: 'Gen Z in the workplace speaker for staff conferences and leadership teams',
    title: 'Gen Z in the Workplace Speaker | Staff Events & HR Conferences | Wil Massara',
    description: 'Book Wil Massara, a Gen Z keynote speaker on Gen Z in the workplace, for staff conferences, HR events and leadership offsites. What young employees want, why they leave, what to change.',
    intro: [
      "Most sessions about Gen Z in the workplace are delivered to Gen Z. This one is for the people who lead them. I am 23, I have run an organisation since I was 15, and I have hired, led and lost young staff. I know what your newest employees want because I am one of them.",
      "Staff conferences, HR summits and leadership teams book this session when the turnover numbers for under-30s have become a board conversation, when a graduate program is leaking, or when a culture survey says the youngest cohort feels unseen.",
    ],
    outcomes: ['A clear, research-backed picture of what Gen Z values at work: purpose, flexibility, growth, feedback, a voice', 'The real reasons young staff leave in the first 12 to 18 months, and the five changes that move the number', 'A candid session for managers that replaces "they are lazy" with something they can act on', 'Formats from a 45-minute keynote to a half-day working session with the people team'],
    talks: ['gen-z-at-work', 'lead-before-youre-ready', 'change-happens-together'],
    proof: 'By 2030, Gen Z will make up around 30% of the workforce. The organisations that understand us now will be the ones that keep us.',
    faq: [
      { q: 'Is this session for Gen Z employees or for the leaders who manage them?', a: 'For the leaders, HR teams and managers. Gen Z staff are welcome in the room, and the session is stronger when they are, but the content is built for the people making decisions about culture, hiring and retention.' },
      { q: 'Does Wil use our workforce data?', a: 'Yes, if you share it. Turnover by age band, engagement survey results and exit-interview themes are folded into the keynote on the pre-event call, so the examples are yours rather than generic.' },
      { q: 'What size of event suits this keynote?', a: 'From a leadership team of 12 to a staff conference of 3,000. The content scales; the format changes from a facilitated session to a keynote with Q&A.' },
    ],
  },
  {
    slug: 'staff-retention-speaker', name: 'Staff retention and engagement',
    h1: 'Staff retention keynote speaker: keeping Gen Z and early-career talent',
    title: 'Staff Retention Keynote Speaker | Gen Z & Early-Career Talent | Wil Massara',
    description: 'Wil Massara speaks on staff retention and employee engagement for organisations losing Gen Z and early-career talent. Practical, research-backed, from a leader who is Gen Z.',
    intro: [
      "Replacing a 25-year-old costs an organisation months of productivity and a recruitment fee, and most leave for reasons that were visible at month three. I speak to leadership teams and HR conferences about why early-career staff walk, and what the organisations that keep them do differently.",
      "This is not a motivation session. It is a straight account of what Gen Z expects from a job, where the generational gap is real and where it is a myth, and the practical changes to onboarding, feedback, flexibility and progression that move retention numbers.",
    ],
    outcomes: ['Why early-career staff leave, in their words rather than the exit interview', 'The five changes to onboarding, feedback, flexibility, progression and purpose that keep them', 'A manager-level playbook that works on Monday', 'Optional follow-up workshop with the people and culture team to build the plan'],
    talks: ['gen-z-at-work', 'change-happens-together', 'a-framework-to-create-change'],
    proof: 'Research consistently finds Gen Z leaves for invisible progression, absent feedback and purpose that lives on a poster. All three are fixable without a pay rise.',
    faq: [
      { q: 'Can Wil run a workshop with our people and culture team after the keynote?', a: 'Yes. The usual format is a keynote for the wider leadership group, then a 90-minute to half-day working session with the people team to turn the themes into a retention plan.' },
      { q: 'Does this apply outside Australia?', a: 'Yes. The research is international and the sessions have been delivered to audiences in North America and Europe. Local workforce data from your organisation makes it specific.' },
    ],
  },
  {
    slug: 'workplace-culture-speaker', name: 'Culture and staff events',
    h1: 'Workplace culture keynote speaker for staff events, all-hands and offsites',
    title: 'Workplace Culture Keynote Speaker | Staff Events & All-Hands | Wil Massara',
    description: 'Book Wil Massara for staff events, all-hands, culture days and leadership offsites. A Gen Z keynote speaker on building a culture that young talent stays in, with energy and an argument.',
    intro: [
      "Staff events need a speaker who can hold a room of 50 or 5,000, say something the room has not heard, and leave people with something to do. I open staff conferences, culture days and leadership offsites with the story of building a national organisation at 15, then make it about them.",
      "Organisations book this session for an all-hands that needs energy, a culture day that needs a point of view on the next generation, or an offsite where the leadership team is working out how to lead a workforce that is getting younger.",
    ],
    outcomes: ['An opening keynote with energy and an argument, not a highlight reel', 'A culture lens on the next generation: what Gen Z values, what drives them out', 'A reframe of failure and backing people early that lands with a 50-year-old executive and a 22-year-old graduate at the same time', 'Panels, fireside conversations and MC roles for multi-day staff events'],
    talks: ['lead-before-youre-ready', 'gen-z-at-work', 'change-happens-together'],
    proof: 'Keynotes delivered to rooms from 20 to 2,000, from boardrooms to Brisbane City Hall, across Australia and North America.',
    faq: [
      { q: 'Can Wil tailor the keynote to our company values or strategy?', a: 'Yes. Every booking includes a pre-event call. Your values, your strategy language and the questions your people are already asking are folded in, so the keynote sounds like it was written for the event, because it was.' },
      { q: 'Does Wil do multi-day staff events?', a: 'Yes. A common format is an opening keynote on day one, a panel or fireside on day two, and a working session with the leadership team. MC and host roles are available.' },
    ],
  },
  {
    slug: 'conferences', name: 'Conferences and summits',
    h1: 'Conference keynote speaker: youth leadership, Gen Z and the future of work',
    title: 'Conference Keynote Speaker | Youth Leadership & Gen Z | Wil Massara',
    description: 'Book Wil Massara as an opening or closing keynote speaker for conferences and summits worldwide. Story-led keynotes on youth leadership, Gen Z and the future of work.',
    intro: [
      "Conference organisers book me for the slot that needs energy: the opening keynote, the post-lunch session, or the closing talk that has to send people home with something to do.",
      "I speak at YLAA's national tour in Australia's biggest venues every year, from ICC Sydney to Brisbane City Hall, in front of thousands of students at a time. If a room of 1,500 fourteen-year-olds stays with you, a conference audience will too.",
    ],
    outcomes: ['Opening and closing keynotes with a clear, argued point of view', 'Panels and fireside conversations on Gen Z, education and youth policy', 'MC and host roles for youth-focused summits', 'International availability with Australian pricing transparency'],
    talks: ['lead-before-youre-ready', 'gen-z-at-work', 'change-happens-together'],
    proof: 'Keynotes delivered to audiences from 20 to 2,000, across Australia and North America, and virtually across Europe.',
    faq: [
      { q: 'How far in advance should we book?', a: 'Three to six months is typical for Australian dates, longer for international travel and for March, which is YLAA national tour season.' },
      { q: 'Does Wil speak outside Australia?', a: 'Yes. I have delivered keynotes in North America and virtually across Europe, and I am actively booking international dates in New Zealand, Asia, the UK and the US.' },
      { q: 'What does Wil need on the day?', a: 'A lapel or headset mic, a clicker, screen for slides and a pre-event call with the organiser. Full technical notes are in the media kit.' },
    ],
  },
  {
    slug: 'schools', name: 'Schools and education',
    h1: 'Keynote speaker for schools, student leadership and staff days',
    title: 'School Keynote Speaker Australia | Wil Massara',
    description: 'Book Wil Massara for school keynotes: student leadership days, Year 5 to 12 assemblies, staff PD and principal conferences. 1,500+ schools reached.',
    intro: [
      "I have been in front of more school audiences than almost any speaker in Australia. Not because I am a professional speaker who visits schools, but because I built an organisation that has reached 65,000+ young people across 1,500+ schools and I still get on stage at every one of our national tour events.",
      "Students get someone who looks like them, talks like them and failed Year 12. Teachers and leaders get a straight read on what their students are thinking, from someone who works with the education system rather than lecturing it.",
    ],
    outcomes: ['Student leadership teams leave with a project, not a pep talk', 'Year-level assemblies that students actually talk about the next day', 'Staff PD on Gen Z, AI in schools and leadership as a core skill', 'Principal and school-leader conference keynotes'],
    talks: ['lead-before-youre-ready', 'a-framework-to-create-change', 'change-happens-together'],
    proof: 'After YLAA programs, 97% of students say they feel more empowered to create change and 99% would recommend the program to another school.',
    faq: [
      { q: 'What year levels does Wil speak to?', a: 'Years 5 to 12, plus staff and parent audiences. Content is adjusted for primary, middle and senior cohorts; the leadership framework scales from Year 5 to Year 12.' },
      { q: 'Can Wil run a full student leadership day?', a: 'Yes. A keynote plus facilitated workshops for SRC, prefects, house captains or a whole year level, from 90 minutes to a full day.' },
      { q: 'Does Wil have a Working With Children Check?', a: 'Yes, current in the states YLAA operates in. Details are supplied with the booking confirmation.' },
    ],
  },
  {
    slug: 'government', name: 'Government and councils',
    h1: 'Youth engagement and co-design speaker for government and councils',
    title: 'Youth Engagement & Co-Design Speaker for Government | Wil Massara',
    description: 'Wil Massara speaks and facilitates for councils and government on youth engagement, co-design with young people, youth strategy and intergenerational collaboration.',
    intro: [
      "I have worked with state and federal government departments, education systems and councils across Australia on youth engagement strategy, consulting on and co-designing policy that reflects the people it serves.",
      "If your department or council is writing a youth strategy, standing up a youth advisory group, or trying to engage young people who do not trust the process, this is the work I do most and care about most.",
    ],
    outcomes: ['Keynotes for sector conferences, youth summits and council forums', 'Facilitated co-design sessions with young people and decision-makers in the same room', 'Youth strategy consultation that produces a document young people recognise', 'Regional and rural delivery: there is no distance too far'],
    talks: ['change-happens-together', 'a-framework-to-create-change', 'lead-before-youre-ready'],
    proof: '30% of Australians are under 25. Decisions about the future should be shaped with the people who will live it.',
    faq: [
      { q: 'Can Wil facilitate as well as speak?', a: 'Yes. Most government work combines a keynote with facilitated sessions, often with young people and senior staff working together on a real draft.' },
      { q: 'Does Wil travel to regional and remote areas?', a: 'Yes. YLAA has delivered in Albany, Broome, the Kimberley, Mildura, Hay, Geraldton, Longreach and West Arnhem. Regional work is a priority, not an exception.' },
      { q: 'How is this procured?', a: 'As a speaking or facilitation engagement with a fixed fee. A written proposal and insurance certificates are supplied on request.' },
    ],
  },
  {
    slug: 'virtual', name: 'Virtual and hybrid',
    h1: 'Virtual keynote speaker for online and hybrid events',
    title: 'Virtual Keynote Speaker | Online & Hybrid Events | Wil Massara',
    description: 'Virtual and hybrid keynotes on youth leadership, Gen Z and the future of work, delivered from a professional studio with interactive elements for online audiences.',
    intro: [
      "I have delivered keynotes virtually across Europe and North America, and ran YLAA's programs online through 2020 and 2021 when schools could not meet in person. Online audiences need a different pace, more interaction and a speaker who is comfortable with the format.",
    ],
    outcomes: ['Live virtual keynotes with Q&A and polls', 'Pre-recorded content for learning platforms and conferences', 'Hybrid delivery with an in-room facilitator', 'Timezone-friendly scheduling for international events'],
    talks: ['gen-z-at-work', 'lead-before-youre-ready', 'change-happens-together'],
    proof: 'Virtual keynotes are priced separately from in-person and include a technical check and a pre-event call.',
    faq: [
      { q: 'What platforms does Wil use?', a: 'Zoom, Teams, Webex, StreamYard and most conference platforms. Delivered from a professional setup in Sydney with wired internet, a backup connection and studio lighting.' },
      { q: 'Can the session be recorded?', a: 'Yes, for internal use. Licensing for wider distribution is agreed in writing before the event.' },
    ],
  },
];

export type Geo = {
  slug: string; place: string; region: string; country: string; countryCode: string; h1: string; title: string;
  description: string; intro: string[]; local: string[]; travel: string; faq: { q: string; a: string }[]; nearby: string[];
};

export const GEOS: Geo[] = [
  {
    slug: 'perth', place: 'Perth', region: 'Western Australia', country: 'Australia', countryCode: 'AU',
    h1: 'Keynote speaker in Perth: youth leadership, Gen Z and schools',
    title: 'Keynote Speaker Perth | Youth Leadership & Gen Z | Wil Massara',
    description: 'Book Perth-raised Gen Z keynote speaker Wil Massara for conferences, school leadership days and government events across Western Australia.',
    intro: [
      "Perth is where this started. The first YLAA event was 65 students in a football clubroom in Leederville in 2018, with sheets thrown over the beer fridges. I grew up in Collie, went to school in the South West, and still run YLAA's Perth national tour stop every year.",
      "Perth organisers book me because the story is local and the reach is national. I was named the 2025 WA Young Achiever of the Year for Community Leadership and the WA Youth Awards Young Changemaker, and I have worked with the Road Safety Commission WA, Catholic Education WA, the Department of Communities and Lotterywest.",
    ],
    local: ['YLAA Perth national tour, annually, Perth Convention and Exhibition Centre precinct', 'Road Safety Commission WA youth leadership summits', 'Positive Schools WA, in person and online', 'Albany Changemakers Summit, Shire of Broome Youth Forum, Great Southern and Kimberley programs'],
    travel: 'No travel costs for most Perth metro events. Regional WA dates in Bunbury, Albany, Geraldton, Broome and the Kimberley are welcome; there is no distance too far.',
    faq: [
      { q: 'Does Wil speak in regional Western Australia?', a: 'Yes. Regional WA is where I grew up and where YLAA started. Albany, Bunbury, Geraldton, Broome, Newman and the Kimberley are all places I have delivered.' },
      { q: 'How much does a keynote speaker in Perth cost?', a: 'Fees depend on format, length, audience and date. Send the brief through the booking form and you will have a quote within one business day.' },
    ],
    nearby: ['adelaide', 'melbourne', 'sydney'],
  },
  {
    slug: 'sydney', place: 'Sydney', region: 'New South Wales', country: 'Australia', countryCode: 'AU',
    h1: 'Keynote speaker in Sydney: Gen Z, youth leadership and education',
    title: 'Keynote Speaker Sydney | Gen Z & Youth Leadership | Wil Massara',
    description: 'Sydney-based Gen Z keynote speaker Wil Massara for corporate conferences, school leadership days, HR events and government forums across NSW.',
    intro: [
      "Sydney is home. I live here, The Youth Impact Foundation is headquartered in Macquarie Park, and YLAA's biggest annual event fills ICC Sydney with student leaders from hundreds of NSW schools.",
      "For Sydney organisers that means no travel costs, short-notice availability and a speaker who has stood on the city's biggest stages in front of its toughest audience: teenagers.",
    ],
    local: ['YLAA Sydney national tour at ICC Sydney, annually', 'Inner West Youth Voice Summit with Inner West Council', 'Magic Moments Youth Leadership & Business Summit, NSW', 'Regional NSW Youth Leadership Summit with Federation Council'],
    travel: 'No travel or accommodation costs for Sydney metro events. Regional NSW dates in Newcastle, Wollongong, the Central Coast, Dubbo and the Riverina are a short trip.',
    faq: [
      { q: 'Is Wil available at short notice in Sydney?', a: 'Often, yes. Because I am based in Sydney, I can sometimes fill a cancelled slot with a week or two of notice. Ask.' },
      { q: 'Does Wil speak at NSW schools?', a: 'Yes. Public, Catholic and independent schools across NSW, from Year 5 to Year 12, plus staff professional development days.' },
    ],
    nearby: ['melbourne', 'brisbane', 'perth'],
  },
  {
    slug: 'melbourne', place: 'Melbourne', region: 'Victoria', country: 'Australia', countryCode: 'AU',
    h1: 'Keynote speaker in Melbourne: youth leadership, Gen Z and schools',
    title: 'Keynote Speaker Melbourne | Youth Leadership & Gen Z | Wil Massara',
    description: 'Book Wil Massara for conferences, school leadership days, council youth events and corporate sessions in Melbourne and regional Victoria.',
    intro: [
      "Melbourne is a YLAA national tour city every year, and Victoria is where some of my favourite regional work has happened: the Fuel Youth Summit in Ballarat with Community Bank Buninyong, the Corangamite Youth Leadership Summit, and programs in Mildura and Geelong.",
      "Victorian school leaders and councils book me for student leadership days, principal conferences and youth strategy co-design.",
    ],
    local: ['YLAA Melbourne national tour, annually', 'Fuel Youth Summit, Ballarat, with Community Bank Buninyong', 'Corangamite Youth Leadership Summit', 'Mildura Rural City Council youth programs'],
    travel: 'Flights from Sydney are frequent and inexpensive. Regional Victoria, including Ballarat, Bendigo, Geelong, Mildura and Gippsland, is welcome.',
    faq: [
      { q: 'Does Wil work with Victorian councils?', a: 'Yes. Corangamite Shire, Mildura Rural City Council and Ballarat partners have all hosted YLAA summits. Youth strategy consultation and co-design are a specialty.' },
      { q: 'Can Wil present at a Victorian principals conference?', a: 'Yes. Keynotes for principal networks, independent school associations and Catholic education regions on Gen Z, AI in schools and leadership as a core skill.' },
    ],
    nearby: ['sydney', 'adelaide', 'brisbane'],
  },
  {
    slug: 'brisbane', place: 'Brisbane', region: 'Queensland', country: 'Australia', countryCode: 'AU',
    h1: 'Keynote speaker in Brisbane: Gen Z, youth leadership and education',
    title: 'Keynote Speaker Brisbane | Gen Z & Youth Leadership | Wil Massara',
    description: 'Gen Z keynote speaker Wil Massara for Brisbane and Queensland conferences, school leadership days, council youth forums and corporate events.',
    intro: [
      "Brisbane is the highest-energy room on the YLAA national tour. Every year I open for 1,500 student leaders at Brisbane City Hall, alongside keynote speakers like Cooper Chapman and Brooke Hanson OLY OAM.",
      "Queensland organisers book me for that energy, and for regional work: YLAA has run youth council retreats in the South Burnett and programs as far as Longreach.",
    ],
    local: ['YLAA Brisbane national tour at Brisbane City Hall, annually', 'South Burnett regional youth council retreat', 'Longreach and Central West Queensland programs'],
    travel: 'Direct flights from Sydney daily. Gold Coast, Sunshine Coast, Toowoomba, Townsville and Cairns dates are welcome.',
    faq: [
      { q: 'Does Wil travel to regional Queensland?', a: 'Yes. From the Gold Coast to Cairns and out to Longreach. Regional and rural young people are a priority for me.' },
      { q: 'What audiences does Wil speak to in Brisbane?', a: 'Student leadership conferences, Queensland school staff days, council youth forums, HR and industry conferences, and graduate programs.' },
    ],
    nearby: ['sydney', 'melbourne', 'adelaide'],
  },
  {
    slug: 'adelaide', place: 'Adelaide', region: 'South Australia', country: 'Australia', countryCode: 'AU',
    h1: 'Keynote speaker in Adelaide: youth leadership, Gen Z and schools',
    title: 'Keynote Speaker Adelaide | Youth Leadership & Gen Z | Wil Massara',
    description: 'Book Gen Z keynote speaker Wil Massara for Adelaide and South Australian conferences, school leadership events, council forums and corporate sessions.',
    intro: [
      "Adelaide opens the YLAA national tour every year. It is where our team lands first in March and where I have shared the stage with speakers like Heather Croall AM, CEO of Adelaide Fringe.",
      "South Australian schools, councils and conferences book me for student leadership days, Gen Z keynotes and youth engagement work.",
    ],
    local: ['YLAA Adelaide national tour, annually', 'South Australian school leadership programs, Years 5 to 12'],
    travel: 'Direct flights from Sydney daily. Regional SA including the Barossa, Fleurieu, Riverland and Eyre Peninsula is welcome.',
    faq: [
      { q: 'Does Wil speak at South Australian schools?', a: 'Yes. Student leadership days, year-level assemblies and staff professional development across public, Catholic and independent schools.' },
    ],
    nearby: ['melbourne', 'perth', 'sydney'],
  },
  {
    slug: 'new-zealand', place: 'New Zealand', region: 'Aotearoa New Zealand', country: 'New Zealand', countryCode: 'NZ',
    h1: 'Keynote speaker for New Zealand: youth leadership, Gen Z and schools',
    title: 'Keynote Speaker New Zealand | Youth Leadership & Gen Z | Wil Massara',
    description: 'Australian Gen Z keynote speaker Wil Massara for conferences, school leadership events and youth sector forums in Auckland, Wellington, Christchurch and NZ-wide.',
    intro: [
      "The Youth Impact Foundation, where I am General Manager, delivers programs in Aotearoa New Zealand through Burn Bright NZ and InnerFit. That gives me a working relationship with the NZ education sector and a reason to be across the Tasman regularly.",
      "New Zealand conference and school organisers book me for a Gen Z perspective that is close to home and an origin story that lands with students and educators alike.",
    ],
    local: ['The Youth Impact Foundation NZ programs: Burn Bright NZ and InnerFit', 'Available for Auckland, Wellington, Christchurch, Hamilton, Dunedin and regional events'],
    travel: 'Three-hour flight from Sydney. Travel is quoted at cost and often bundled across several NZ dates in one trip.',
    faq: [
      { q: 'Can Wil combine several New Zealand events in one trip?', a: 'Yes, and it reduces the cost for everyone. If you are a school, cluster or conference, tell me your dates and I will look for events nearby.' },
    ],
    nearby: ['sydney', 'melbourne', 'brisbane'],
  },
  {
    slug: 'singapore', place: 'Singapore', region: 'Singapore and South East Asia', country: 'Singapore', countryCode: 'SG',
    h1: 'Keynote speaker for Singapore and Asia: Gen Z, youth leadership and international schools',
    title: 'Gen Z Keynote Speaker Singapore & Asia | Wil Massara',
    description: 'Book Australian Gen Z keynote speaker Wil Massara for conferences, international school events and corporate sessions in Singapore and across Asia.',
    intro: [
      "Singapore is an eight-hour flight from Sydney and home to some of the world's most ambitious international schools and regional corporate headquarters. Both audiences ask the same question: how do we understand and lead the generation coming through?",
      "I speak to international school student leadership programs, educator conferences and regional leadership teams on Gen Z, youth leadership and co-design, with a perspective that is practical rather than theoretical.",
    ],
    local: ['International school student leadership conferences and assemblies', 'Regional HR, leadership and education conferences', 'Available across Singapore, Malaysia, Hong Kong, Thailand, Indonesia, Vietnam and the Philippines'],
    travel: 'Travel is quoted at cost. Asian dates are bundled where possible so that a Singapore keynote can be paired with Kuala Lumpur, Hong Kong or Bangkok in the same week.',
    faq: [
      { q: 'Does Wil speak at international schools in Asia?', a: 'Yes. Student leadership days, graduation and assembly keynotes and staff professional development for international and IB schools.' },
    ],
    nearby: ['sydney', 'perth', 'united-kingdom'],
  },
  {
    slug: 'united-kingdom', place: 'the United Kingdom', region: 'UK and Europe', country: 'United Kingdom', countryCode: 'GB',
    h1: 'Keynote speaker for the UK and Europe: Gen Z, youth leadership and education',
    title: 'Gen Z Keynote Speaker UK & Europe | Youth Leadership | Wil Massara',
    description: 'Australian Gen Z keynote speaker Wil Massara for UK and European conferences, school events, HR summits and youth sector forums, in person and virtually.',
    intro: [
      "I have delivered keynotes virtually across Europe and I am booking in-person UK and European dates. The questions are identical to the ones I hear in Australia: how do we lead Gen Z at work, how do schools teach leadership and not just talk about it, and how do we involve young people in decisions properly.",
      "UK organisers get an outside perspective from a country that has moved early on youth-led leadership, delivered by someone who is still in the generation being discussed.",
    ],
    local: ['Education, HR and leadership conferences in London, Manchester, Birmingham, Edinburgh and Dublin', 'School speaker programs and student leadership days', 'Virtual keynotes in UK and European time zones'],
    travel: 'Long-haul travel is quoted at cost and bundled across multiple European dates. Virtual delivery is available in UK and CET working hours.',
    faq: [
      { q: 'Can Wil deliver in UK working hours virtually?', a: 'Yes. I regularly deliver virtual sessions in the evening Sydney time to suit UK and European audiences.' },
    ],
    nearby: ['usa', 'singapore', 'sydney'],
  },
  {
    slug: 'usa', place: 'the United States', region: 'North America', country: 'United States', countryCode: 'US',
    h1: 'Keynote speaker for the United States and Canada: Gen Z, youth leadership and education',
    title: 'Gen Z Keynote Speaker USA & Canada | Youth Leadership | Wil Massara',
    description: 'Australian Gen Z keynote speaker Wil Massara for US and Canadian conferences, student leadership conventions, school districts and corporate events.',
    intro: [
      "I have delivered keynotes in North America and I am listed with US bureaus, but the best way to book me is directly. The US youth leadership circuit is enormous, and I bring something it does not have much of: a Gen Z founder from outside the US who built a national organisation while still at school.",
      "US and Canadian organisers book me for student leadership conventions, district leadership days, education conferences and corporate sessions on leading Gen Z.",
    ],
    local: ['Student leadership conventions and youth summits', 'School district and educator conferences', 'Corporate and HR conferences on Gen Z and the future of work', 'Available across the US and Canada, in person and virtually'],
    travel: 'Long-haul travel is quoted at cost and bundled across multiple North American dates. Virtual delivery is available in US time zones.',
    faq: [
      { q: 'Is Wil represented by a US speakers bureau?', a: 'Yes, but booking directly through this site is faster and includes a pre-event call with me rather than an agent.' },
    ],
    nearby: ['united-kingdom', 'sydney', 'new-zealand'],
  },
];

export const GENERAL_FAQ = [
  { q: 'What does Wil Massara speak about?', a: 'Gen Z at work, staff retention and culture, youth leadership, education and co-design with young people. The three core keynotes are Lead Before You’re Ready, Gen Z at Work and Change Happens Together, plus the Creating Change workshop.' },
  { q: 'Who books Wil?', a: 'Corporate HR and leadership teams for staff conferences, culture days and offsites; conference organisers; schools and education systems; and local, state and federal government. Audiences range from executive teams to Year 5 students.' },
  { q: 'How much does it cost to book Wil Massara?', a: 'Fees depend on format, length, audience, location and date, and are quoted on request. Send the brief through the booking form and you will have a quote within one business day.' },
  { q: 'Does Wil travel internationally?', a: 'Yes. Wil is based in Sydney, Australia, has delivered keynotes in North America and virtually across Europe, and is booking dates in New Zealand, Asia, the UK and the US.' },
  { q: 'How long is a keynote?', a: 'Most keynotes run 30 to 60 minutes. Workshops run 90 minutes to a full day. Panels, MC roles and fireside conversations are also available.' },
  { q: 'How do I book?', a: 'Use the form on the booking page or email hello@wilmassara.com with the date, location, audience and format. You will hear back within one business day.' },
];
