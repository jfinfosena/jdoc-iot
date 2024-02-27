export const dev_mode = true;

export const homepage = {
  title: "INTERNET DE LAS COSAS",
  description:
    "El Internet de las cosas (IoT) se refiere a la red de dispositivos físicos (cosas) incrustados con sensores, software y conectividad a la red que les permite recopilar y compartir datos. Estos dispositivos pueden variar desde electrodomésticos comunes hasta maquinaria industrial compleja.",
  url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export const sessions: {
  [key: string]: { link: string; label: string; date: Date };
} = {
  semana1: {
    link: "semana1",
    label: "Semana 1 - introducción",
    date: new Date("2024-2-14"),
  },
  semana2: {
    link: "semana2",
    label: "Semana 2 - Arduino, conceptos básicos de C y C++",
    date: new Date("2024-2-21"),
  },
  actividad1: {
    link: "actividad1",
    label: "Semana 2 - Actividad",
    date: new Date("2024-2-21"),
  },
  semana3: {
    link: "semana3",
    label: "Semana 3 - Protocolo de comunicación MQTT",
    date: new Date("2024-2-28"),
  },
  actividad2: {
    link: "actividad2",
    label: "Semana 3 - Actividad",
    date: new Date("2024-2-28"),
  },
};
