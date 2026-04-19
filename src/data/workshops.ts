import type { Workshop, Palette } from '../types';

export const WORKSHOPS: Workshop[] = [
  { id:1, title:'Acompañar la rabieta', age:'2-4 años', date:'2026-05-09', time:'10:30', duration:'90 min', place:'Presencial · Sala Abedul', tag:'Emociones', color:'peach', facilitadora:'Lucía Mena', spots:12, taken:7, desc:'Un espacio para entender qué pasa en el cerebro de tu peque cuando estalla, y cómo estar presente sin perder la calma.' },
  { id:2, title:'Sueño infantil respetuoso', age:'1-3 años', date:'2026-05-16', time:'11:00', duration:'2 h', place:'Online · Zoom', tag:'Descanso', color:'sky', facilitadora:'Marta Rubio', spots:20, taken:14, desc:'Despertares, colecho, siestas que desaparecen. Hablamos de lo que la ciencia sabe y lo que cada familia decide.' },
  { id:3, title:'Alimentación sin lucha', age:'1-5 años', date:'2026-05-23', time:'10:00', duration:'90 min', place:'Presencial · Sala Abedul', tag:'Mesa', color:'mint', facilitadora:'Carla Viñas', spots:14, taken:5, desc:'De la cuchara a la autonomía. Entender qué es normal, qué es una etapa y cuándo no preocuparse.' },
  { id:4, title:'Hermanos: celos y encuentro', age:'2-6 años', date:'2026-05-30', time:'10:30', duration:'2 h', place:'Presencial · Sala Abedul', tag:'Vínculo', color:'cream', facilitadora:'Lucía Mena', spots:12, taken:12, desc:'Cuando llega otro bebé o cuando ya no son bebés. Herramientas para acompañar la rivalidad sin apagarla.' },
  { id:5, title:'Juego libre y aburrimiento', age:'3-6 años', date:'2026-06-06', time:'11:00', duration:'90 min', place:'Online · Zoom', tag:'Juego', color:'lavender', facilitadora:'Nora Baixas', spots:20, taken:9, desc:'Por qué el aburrimiento es un regalo y cómo sostener sin llenarlo de pantallas ni de planes.' },
  { id:6, title:'Límites con ternura', age:'2-5 años', date:'2026-06-13', time:'10:30', duration:'90 min', place:'Presencial · Sala Abedul', tag:'Crianza', color:'peach', facilitadora:'Marta Rubio', spots:12, taken:3, desc:'El límite no es castigo. Es cuidado. Lo practicamos con casos reales que traéis vosotras.' },
  { id:7, title:'Control de esfínteres sin prisa', age:'2-4 años', date:'2026-06-20', time:'11:00', duration:'90 min', place:'Online · Zoom', tag:'Cuerpo', color:'sky', facilitadora:'Carla Viñas', spots:20, taken:6, desc:'Señales de madurez, qué esperar y qué no. Respetar el ritmo sin ansiedad adulta.' },
  { id:8, title:'Pantallas en casa', age:'3-6 años', date:'2026-06-27', time:'10:30', duration:'2 h', place:'Presencial · Sala Abedul', tag:'Vida diaria', color:'mint', facilitadora:'Nora Baixas', spots:14, taken:8, desc:'Cuánto, qué, cuándo. Una conversación honesta sobre móviles, tele y la culpa que cargamos.' }
];

export const AGES: string[] = ['Todas','1-2','2-3','3-4','4-5','5-6'];
export const TAGS_FILTER: string[] = ['Todos','Emociones','Descanso','Mesa','Vínculo','Juego','Crianza','Cuerpo','Vida diaria'];

export const PALETTES: Record<string, Palette> = {
  melocoton: { bg:'#FDFBF7', ink:'#3D3530', inkSoft:'#6B5F57', peach:'#F8D7DA', cream:'#FCE7C8', mint:'#D4E7C5', sky:'#BFD8E8', lavender:'#E8DDEE', accent:'#E89B8E', line:'#EADFD2', name:'Melocotón' },
  malva:     { bg:'#FBF8FB', ink:'#3B2F3D', inkSoft:'#6D5F70', peach:'#E8D5E8', cream:'#F5E6D3', mint:'#D5E3F0', sky:'#D8E8DE', lavender:'#E3D3EB', accent:'#B690C4', line:'#EADFE8', name:'Malva' },
  salvia:    { bg:'#FAFBF7', ink:'#2F3A2E', inkSoft:'#5D6A5A', peach:'#E1EBD1', cream:'#F1E8CF', mint:'#CDE3C4', sky:'#BFD6D2', lavender:'#E5DCE8', accent:'#8FB17B', line:'#DFE6D1', name:'Salvia' }
};
