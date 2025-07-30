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
              {logos.map((logo, logoIndex) => (
                <img
                  key={logoIndex}
                  className="mx-7 w-[220px] shrink-0 md:mx-10"
                  src={logo.src}
                  alt={logo.alt}
                />
              ))}
            </div>
          ))}
      </div>
    </section>
  );
};

export const LogoCarouselDefaults: Props = {
  heading: "",
  logos: [
    { src: "/lovable-uploads/ecf84f20-2c15-4d55-b845-91045ca82703.png", alt: "SpringPrime Technologies" },
    { src: "/lovable-uploads/06b6f2be-9071-48a7-8264-c69f5430a671.png", alt: "EasynetPro" },
    { src: "/lovable-uploads/336abe7e-6f00-4ada-bfe5-abd1d8f0de64.png", alt: "inGENIOUS" },
    { src: "/lovable-uploads/9677caad-6d64-42fa-8531-93ecfed4e688.png", alt: "Enengin" },
    { src: "/lovable-uploads/aa8b0632-ff0c-41e4-afef-36ccadafe69f.png", alt: "Leafcel" },
    { src: "/lovable-uploads/c3608685-1281-4965-969c-0489ebe48f92.png", alt: "CloudinTec" },
  ],
};