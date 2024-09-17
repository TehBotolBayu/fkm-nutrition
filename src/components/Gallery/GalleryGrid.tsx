

const GalleryGrid = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex flex-col">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center mb-4"
              src="1722124013444.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center mb-4 "
              src="1722124013463.jpg"
              alt="gallery-photo"
            />
          </div>

        </div>
        <div className="flex flex-col">
        <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center mb-4"
              src="1722124013481.jpg"
              alt="gallery-photo"
            />
          </div>

          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center mb-4"
              src="1722124013525.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center mb-4 "
              src="1722124013546.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center mb-4"
              src="1722124013562.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center mb-4 "
              src="1722124013576.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center mb-4"
              src="1722124013591.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center mb-4"
              src="1722124013606.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center mb-4  "
              src="1722124013502.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryGrid;
