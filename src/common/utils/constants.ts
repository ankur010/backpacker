const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const urlConstants = {
  imagesData:
    'https://pixabay.com/api/?key=30053638-dc58052ebc04d497829e1a757&q=city&image_type=photo',
};

export { emailRegex, urlConstants };
