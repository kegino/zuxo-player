import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/content/faq";
import { cn } from "@/lib/utils";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="glass-card rounded-xl overflow-hidden">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/5"
            >
              <span className="font-display font-semibold text-foreground">{item.q}</span>
              <ChevronDown
                className={cn("size-5 shrink-0 text-muted-foreground transition-transform", isOpen && "rotate-180")}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div id={`faq-panel-${i}`} className="px-5 pb-5 text-muted-foreground leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
