const productTemplate = {
  img: '<img width="300" class="{{data.classes.img}}" src="{{data.currentImage.src}}" />',
  title: '<h1 class="{{data.classes.title}}">{{data.title}}</h1>',
  variantTitle: '{{#data.hasVariants}}<h2 class="{{data.classes.variantTitle}}">{{data.selectedVariant.title}}</h2>{{/data.hasVariants}}',
  options: '{{#data.hasVariants}}<div class="{{data.classes.options}}">{{{data.childrenHtml}}}</div>{{/data.hasVariants}}',
  price: '<h2 class="{{data.classes.price}}">${{data.selectedVariant.price}}</h2>',
  description: '<div class="{{data.classes.description}}">{{{data.description}}}</div>',
  button: '<button {{#data.buttonDisabled}}disabled{{/data.buttonDisabled}} class="{{data.classes.button}} {{data.buttonClass}}">{{data.buttonText}}</button>',
};

export default productTemplate;