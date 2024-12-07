
import { gridItems } from "@/data/items";

import { BentoGrid, BentoGridItem } from "./ui/Bento-grid";

const Grid = () => {
  return (
    <section id="about" className="pb-36">
      <BentoGrid className="w-full py-10">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;