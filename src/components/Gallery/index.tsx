import GalleryGrid from './GalleryGrid'
import SectionTitle from '../SectionTitle'
import NormalButton from '../Global/Button/NormalButton'

const GallerySection = () => {
  return (
    <section className="bg-gray-100 py-8" id="galeri">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <SectionTitle text="Galeri" opt={undefined} />
        <div className="mt-14"></div>
        <GalleryGrid />
        <div className="w-full flex justify-center">
          <NormalButton
            text={"Selengkapnya"}
            action={() => (location.href = "galeri")}
          />
        </div>
      </div>
    </section>
  )
}

export default GallerySection