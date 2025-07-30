type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  logos: ImageProps[];
};

export type LogoCarouselProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const LogoCarousel = (props: LogoCarouselProps) => {
  const { heading, logos } = {
    ...LogoCarouselDefaults,
    ...props,
  };
  return (
    <section className="overflow-hidden bg-background text-foreground">
      {heading && (
        <div className="container mb-8 w-full max-w-lg px-[5%] md:mb-10 lg:mb-12 mx-auto">
          <h1 className="text-center text-base font-bold leading-[1.2] md:text-md md:leading-[1.2] text-foreground">
            {heading}
          </h1>
        </div>
      )}
      <div className="flex items-center pt-7 md:pt-0">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="flex shrink-0 animate-loop-horizontally items-center">
              {logos.map((logo, logoIndex) => {
                console.log('Loading logo:', logo.src, logo.alt);
                return (
                  <img
                    key={logoIndex}
                    className="mx-7 w-[220px] shrink-0 md:mx-10"
                    src={logo.src}
                    alt={logo.alt}
                    onError={(e) => {
                      console.error('Failed to load logo:', logo.src);
                      e.currentTarget.style.border = '2px solid red';
                    }}
                    onLoad={() => {
                      console.log('Successfully loaded logo:', logo.src);
                    }}
                  />
                );
              })}
            </div>
          ))}
      </div>
    </section>
  );
};

export const LogoCarouselDefaults: Props = {
  heading: "",
  logos: [
    { src: "/lovable-uploads/5555e371-ef07-428d-9a49-cc372af9709f.png", alt: "EasynetPro" },
    { src: "/lovable-uploads/db6d467a-4359-40d0-be32-67d715ada054.png", alt: "inGENIOUS" },
    { src: "/lovable-uploads/d799f7c7-3c9f-4ef5-9219-061c64a65443.png", alt: "ENENGIN" },
    { src: "/lovable-uploads/fadd5a44-0360-4764-85b3-c450a0c5aa1e.png", alt: "LEAFCEL" },
    { src: "/lovable-uploads/b23b2bb9-2e9e-4ae2-a04d-fed5f977e9f4.png", alt: "SpringPrime Technologies" },
    { src: "/lovable-uploads/6d11d9e3-7ce4-4c34-ac8f-507421e08e5f.png", alt: "CloudinTec" },
  ],
};