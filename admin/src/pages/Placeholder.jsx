import { Hammer } from 'lucide-react';

/** Temporary page for modules that land in a later phase. */
export default function Placeholder({ title, phase }) {
  return (
    <div className="grid place-items-center py-20">
      <div className="card max-w-md p-8 text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gold/12 text-gold"><Hammer size={22} /></span>
        <h2 className="mt-4 text-lg font-bold">{title}</h2>
        <p className="mt-2 text-sm text-ink-faint">
          This module is part of {phase || 'an upcoming phase'} and will be wired up next. The navigation and
          backend contract are ready.
        </p>
      </div>
    </div>
  );
}
