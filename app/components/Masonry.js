"use client";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableUser = ({ img }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: img.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className='image'>
      <div className='image-container'>
        <img className='img' src={img.images.thumbnail} alt='thumbnail' />
        <div className='caption'>
          <h2>{img.name}</h2>
          <p>{img.artist.name}</p>
        </div>
      </div>
    </div>
  );
};

function Masonry({ imageUrls, setImageUrls }) {
  // const [imageUrls, setImageUrls] = useState(imageUrlprops);

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (!active || !over || active.id === over.id) {
      return;
    }

    setImageUrls((prevImageUrls) => {
      const oldIndex = prevImageUrls.findIndex((img) => img.id === active.id);
      const newIndex = prevImageUrls.findIndex((img) => img.id === over.id);

      return arrayMove(prevImageUrls, oldIndex, newIndex);
    });
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
      <SortableContext items={imageUrls} strategy={verticalListSortingStrategy}>
        <div className='masonry'>
          {imageUrls.map((img, i) => (
            <SortableUser key={img.id} img={img} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}

export default Masonry;
