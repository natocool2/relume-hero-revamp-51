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
    { src: "/lovable-uploads/dc63d03e-ece1-4bde-9ac5-cd084f0fce2e.png", alt: "Company logo 1" },
    { src: "/lovable-uploads/26ab6d9c-48dd-400a-bd70-38a12984a392.png", alt: "Company logo 2" },
    { src: "/lovable-uploads/fc0a784d-a633-46f7-963b-3e8c370d4006.png", alt: "Company logo 3" },
    { src: "/lovable-uploads/27631736-f83e-494f-9317-31f3ee4ae6e8.png", alt: "Company logo 4" },
    { src: "/lovable-uploads/86606c50-6512-4afa-a1cf-98402cc76de0.png", alt: "Company logo 5" },
    { src: "/lovable-uploads/24d8d3b5-3b2b-46b7-a122-f7b77b3a0190.png", alt: "Company logo 6" },
  ],
};