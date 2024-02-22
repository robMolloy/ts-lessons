//first create a "complex" type
type TProductData = {
  cms: {
    headlessApiJson: {
      product: {
        elements: {
          featureList?: string[];
        };
      };
    };
  };
};

// if you need the value of the elements key as a standalone type you can get it with
type TElements = TProductData["cms"]["headlessApiJson"]["product"]["elements"];

const getFeatures = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const productData: TProductData = await response.json();

  const features = {
    featureList: productData?.cms?.headlessApiJson?.product?.elements?.featureList,
  };

  return features;
};
