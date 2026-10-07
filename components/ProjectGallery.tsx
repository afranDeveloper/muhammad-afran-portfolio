"use client";

import Image from "next/image";
import { useState } from "react";

export type ProjectImage = {
  src: string;
  caption: string;
};

type Props = {
  number: string;
  title: string;
  images: ProjectImage[];
};

export default function ProjectGallery({ number, title, images }: Props) {
  const [active, setActive] = useState(0);
  const current = images[active];

  return (
    <div className="project-art has-media">
      <Image
        key={current.src}
        src={current.src}
        alt={`${title} — ${current.caption}`}
        fill
        sizes="(max-width: 750px) 100vw, 50vw"
        className="project-image"
      />
      <div className="project-shade" />
      <span className="project-number">{number}</span>
      <div className="project-caption">{current.caption}</div>

      {images.length > 1 && (
        <div className="project-thumbs" role="tablist" aria-label={`${title} images`}>
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={img.caption}
              title={img.caption}
              className={i === active ? "thumb active" : "thumb"}
              onClick={() => setActive(i)}
            >
              <Image src={img.src} alt="" fill sizes="72px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
