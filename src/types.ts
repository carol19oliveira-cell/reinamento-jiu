export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TargetAudience {
  id: string;
  title: string;
  description: string;
  iconName: string;
  emoji?: string;
}

export interface Bonus {
  id: string;
  title: string;
  valueOriginal: number;
  description: string;
  tag: string;
  imageUrl?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialMessage {
  id: string;
  senderName: string;
  timestamp: string;
  content: string;
  isUser: boolean; // true = sender is the customer/sensei, false = sender is Jiu Jitsu Interativo support
  status?: "sent" | "delivered" | "read";
  productDetails?: {
    name: string;
    value: string;
    status: string;
  };
}

export interface TestimonialChat {
  id: string;
  contactName: string;
  contactSubtitle: string;
  avatarLetter: string;
  avatarUrl?: string;
  messages: TestimonialMessage[];
}

export const FEATURES: Feature[] = [
  {
    id: "1",
    title: "✅ +250 Sesiones de Entrenamiento",
    description: "Más de 250 sesiones con ejercicios, dinámicas y actividades listas para aplicar.",
    iconName: "Star",
  },
  {
    id: "2",
    title: "✅ Planificación Lista",
    description: "Organiza meses de entrenamiento sin empezar cada clase desde cero.",
    iconName: "ClipboardCheck",
  },
  {
    id: "3",
    title: "✅ Juegos de Lucha",
    description: "Dinámicas recreativas para desarrollar técnica, coordinación y disciplina.",
    iconName: "Users",
  },
  {
    id: "4",
    title: "✅ Ejercicios Técnicos",
    description: "Ejercicios progresivos para enseñar los fundamentos del Jiu-Jitsu Infantil.",
    iconName: "Award",
  },
  {
    id: "5",
    title: "✅ Preparación Física Infantil",
    description: "Rutinas adaptadas para mejorar coordinación, agilidad y condición física.",
    iconName: "Activity",
  },
  {
    id: "6",
    title: "✅ Acceso Inmediato",
    description: "Accede al material inmediatamente después del pago.",
    iconName: "Smartphone",
  },
];

export const TARGET_AUDIENCES: TargetAudience[] = [
  {
    id: "1",
    title: "Ahorra horas de planificación",
    description: "Nunca más te quedarás sin ideas para tus clases.",
    iconName: "Clock",
    emoji: "🥋",
  },
  {
    id: "2",
    title: "Mejora la calidad de tus entrenamientos",
    description: "Imparte clases más organizadas, dinámicas y profesionales.",
    iconName: "Target",
    emoji: "🎯",
  },
  {
    id: "3",
    title: "Mantén a los niños más motivados",
    description: "Sesiones que aumentan la participación, la disciplina y el aprendizaje.",
    iconName: "Smile",
    emoji: "👦",
  },
  {
    id: "4",
    title: "Organiza meses de entrenamiento",
    description: "Planifica tus clases con facilidad y sin improvisar.",
    iconName: "Calendar",
    emoji: "📅",
  },
  {
    id: "5",
    title: "Refuerza tu imagen como instructor",
    description: "Transmite mayor seguridad y profesionalismo en cada clase.",
    iconName: "Award",
    emoji: "🏆",
  },
  {
    id: "6",
    title: "Todo listo para aplicar",
    description: "Elige una sesión, llévala al tatami y comienza a enseñar.",
    iconName: "Zap",
    emoji: "⚡",
  },
];

export const BONUSES: Bonus[] = [
  {
    id: "bonus_cert",
    title: "Certificado Oficial de Participación en Jiu-Jitsu Infantil",
    valueOriginal: 27,
    description: "Certificado de participación especial para motivar a los pequeños guerreros a mantenerse constantes en sus entrenamientos.",
    tag: "Certificado de Participación",
    imageUrl: "https://i.ibb.co/C5TkrdCz/Chat-GPT-Image-29-de-jun-de-2026-23-49-51.webp",
  },
  {
    id: "bonus_jogos",
    title: "Más Juegos y Participación",
    valueOriginal: 37,
    description: "Guía ilustrada de luchas y dinámicas lúdicas adaptadas para desarrollar agilidad, fuerza y control espacial de forma divertida.",
    tag: "Juegos Interactivos",
    imageUrl: "https://i.ibb.co/wrW36Y8X/Chat-GPT-Image-24-de-jun-de-2026-21-46-06.png",
  },
  {
    id: "bonus_exercicios",
    title: "Biblioteca de Ejercicios Infantiles",
    valueOriginal: 33,
    description: "Fichas completas de acondicionamiento físico y psicomotricidad de fácil aplicación para el calentamiento infantil.",
    tag: "Preparación Física",
    imageUrl: "https://i.ibb.co/qYRVWqBM/Chat-GPT-Image-24-de-jun-de-2026-21-51-33.webp",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "¿Cómo recibiré acceso al material?",
    answer: "¡El acceso es inmediato! Tan pronto como se confirme tu pago, recibirás un enlace de acceso exclusivo directamente en tu correo electrónico de forma automática. En pocos minutos podrás comenzar a utilizar todas las sesiones de entrenamiento.",
  },
  {
    question: "¿Para qué edades está recomendado?",
    answer: "Las sesiones de entrenamiento fueron desarrolladas para niños de 4 a 14 años. Los ejercicios, dinámicas y actividades pueden adaptarse fácilmente según la edad, el nivel y la experiencia de cada grupo.",
  },
  {
    question: "¿Qué incluye cada sesión de entrenamiento?",
    answer: "Cada sesión incluye una combinación de ejercicios técnicos, dinámicas, juegos de lucha y preparación física, organizados para facilitar la planificación y mantener a los niños motivados durante toda la clase.",
  },
  {
    question: "¿El material respeta la metodología del Jiu-Jitsu?",
    answer: "¡Sí! Todo el contenido fue desarrollado respetando los principios, la disciplina y los fundamentos del Jiu-Jitsu Infantil, utilizando una metodología organizada que facilita el aprendizaje sin perder la esencia del arte.",
  },
  {
    question: "¿Tengo alguna garantía?",
    answer: "¡Sí! Cuentas con una garantía incondicional de 7 días. Prueba todas las sesiones de entrenamiento sin ningún riesgo. Si por cualquier motivo el material no cumple con tus expectativas, solo tienes que escribirnos y te devolveremos el 100% de tu dinero, sin preguntas ni complicaciones.",
  },
];

export const TESTIMONIALS: TestimonialChat[] = [
  {
    id: "chat_mestre_fabio",
    contactName: "Maestro Fabio - Gracie Barra",
    contactSubtitle: "últ. vez hoy a las 11:42",
    avatarLetter: "F",
    avatarUrl: "https://i.ibb.co/Tj0LQc9/homem.jpg",
    messages: [
      {
        id: "msg_1",
        senderName: "Maestro Fabio",
        timestamp: "10:50",
        content: "Estado: APROBADO\nValor: USD 15.00\n¡Gracias por tu compra!",
        isUser: false,
        productDetails: {
          name: "Plan Premium +250 Sesiones",
          value: "USD 15.00",
          status: "Estado: APROBADO",
        },
      },
      {
        id: "msg_2",
        senderName: "Jiu Jitsu Interativo",
        timestamp: "10:51",
        content: "📦 ¡Producto Entregado!\n\n¡Hola Maestro Fabio! Tu producto *+250 Sesiones de Entrenamiento de Jiu-Jitsu Infantil + 3 Bonos Adicionales* ya está listo.\n\nHaz clic en el botón de abajo para acceder:",
        isUser: false,
      },
      {
        id: "msg_3",
        senderName: "Maestro Fabio",
        timestamp: "10:52",
        content: "¡Hola! Muchísimas gracias. Ya descargué todo el material. ¡Qué calidad! Me ha ayudado muchísimo a planificar las clases infantiles aquí en la academia. Antes los niños se distraían muy rápido y terminaba improvisando. Hoy las clases son mucho más organizadas y todos permanecen atentos de principio a fin. ¡Lo recomiendo totalmente!",
        isUser: true,
      },
      {
        id: "msg_4",
        senderName: "Jiu Jitsu Interativo",
        timestamp: "10:55",
        content: "¡De nada, Maestro! ¡Me alegra muchísimo saberlo! Si tienes cualquier duda o si necesitas ayuda, estoy por aquí en WhatsApp. ¡Que lo disfrutes y excelentes entrenamientos! 🥋🔥",
        isUser: false,
        status: "read",
      },
    ],
  },
  {
    id: "chat_sensei_patricia",
    contactName: "Sensei Patricia Medeiros",
    contactSubtitle: "en línea",
    avatarLetter: "P",
    avatarUrl: "https://i.ibb.co/B2NdGLhM/i456919.jpg",
    messages: [
      {
        id: "p_msg_1",
        senderName: "Jiu Jitsu Interativo",
        timestamp: "09:15",
        content: "¡Gracias por tu compra!",
        isUser: false,
        productDetails: {
          name: "Plan Premium +250 Sesiones",
          value: "USD 15.00",
          status: "Estado: APROBADO",
        },
      },
      {
        id: "p_msg_2",
        senderName: "Sensei Patricia",
        timestamp: "09:20",
        content: "¡Estoy encantada con este material! A los niños les fascinaron sesiones como 'El Escape del Cocodrilo' y 'El Maestro del Tatami'. Antes me costaba muchísimo mantener la atención de los grupos de 5 a 8 años. Ahora las clases son mucho más dinámicas y los padres siempre comentan lo felices que salen sus hijos.",
        isUser: true,
      },
      {
        id: "p_msg_3",
        senderName: "Jiu Jitsu Interativo",
        timestamp: "09:22",
        content: "¡Qué excelente testimonio, Sensei Patricia! 'El Escape del Cocodrilo' es de las favoritas de todos, desarrolla una gran movilidad de cadera sin que sientan que están haciendo un esfuerzo pesado. ¡Felicidades por su gran trabajo!",
        isUser: false,
        status: "read",
      },
    ],
  },
  {
    id: "chat_mestre_ricardo",
    contactName: "Profesor Ricardo - Team Carlson",
    contactSubtitle: "últ. vez hoy a las 15:10",
    avatarLetter: "R",
    avatarUrl: "https://i.ibb.co/vxFVZxKk/homem.jpg",
    messages: [
      {
        id: "r_msg_1",
        senderName: "Jiu Jitsu Interativo",
        timestamp: "14:02",
        content: "¡Gracias por tu compra!",
        isUser: false,
        productDetails: {
          name: "Plan Premium +250 Sesiones",
          value: "USD 15.00",
          status: "Estado: APROBADO",
        },
      },
      {
        id: "r_msg_2",
        senderName: "Profesor Ricardo",
        timestamp: "14:10",
        content: "Excelente material. Llevo más de 15 años enseñando Jiu-Jitsu y, sinceramente, a veces ya no sabía qué hacer para variar las clases infantiles. Estas sesiones de entrenamiento le dieron un aire completamente nuevo a nuestro dojo. Además, el bono con los 100 ejercicios de preparación física es espectacular. Lo recomiendo a cualquier instructor de Jiu-Jitsu Infantil.",
        isUser: true,
      },
      {
        id: "r_msg_3",
        senderName: "Jiu Jitsu Interativo",
        timestamp: "14:15",
        content: "¡Nos honra mucho su testimonio, Maestro! Viniendo de un profesional con tanta experiencia, nos da la certeza de estar en el camino correcto. ¡Un fuerte abrazo y oss! 🥋👊",
        isUser: false,
        status: "read",
      },
    ],
  },
];
