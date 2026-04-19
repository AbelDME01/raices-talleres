export interface Workshop {
  id: number;
  title: string;
  age: string;
  date: string;
  time: string;
  duration: string;
  place: string;
  tag: string;
  color: 'peach' | 'sky' | 'mint' | 'cream' | 'lavender';
  facilitadora: string;
  spots: number;
  taken: number;
  desc: string;
}

export interface Palette {
  bg: string;
  ink: string;
  inkSoft: string;
  peach: string;
  cream: string;
  mint: string;
  sky: string;
  lavender: string;
  accent: string;
  line: string;
  name: string;
}

export interface FontPair {
  display: string;
  body: string;
  name: string;
}
