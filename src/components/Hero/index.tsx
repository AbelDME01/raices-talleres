import HeroCentered from './HeroCentered';
import HeroSplit from './HeroSplit';
import HeroAsymmetric from './HeroAsymmetric';

interface HeroProps {
  layout: 'centered' | 'split' | 'asymmetric';
}

export default function Hero({ layout }: HeroProps) {
  if (layout === 'centered') return <HeroCentered />;
  if (layout === 'asymmetric') return <HeroAsymmetric />;
  return <HeroSplit />;
}
