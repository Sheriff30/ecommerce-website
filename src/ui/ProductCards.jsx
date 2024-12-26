import ProductCard from "./ProductCard";

function ProductCards() {
  const products = [
    {
      img: "/shared/desktop/image-category-thumbnail-headphones.png",
      category: "headphones",
      link: "#",
    },
    {
      img: "/shared/desktop/image-category-thumbnail-speakers.png",
      category: "speakers",
      link: "#",
    },
    {
      img: "/shared/desktop/image-category-thumbnail-earphones.png",
      category: "earphones",
      link: "#",
    },
  ];
  return (
    <div className="py-20 px-4">
      <div className="container flex gap-8 justify-center flex-wrap ">
        {products.map((product) => (
          <ProductCard
            link={product.link}
            category={product.category}
            img={product.img}
            key={product.category}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductCards;
