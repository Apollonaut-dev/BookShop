const deleteProduct = (event) => {

  const productCard = event.target.parentNode;
  const productId = productCard.querySelector('[name=productId').value;
  const csrf = productCard.querySelector('[name=_csrf]').value;
  fetch(`/admin/product/${productId}`, {
    method: 'DELETE',
    headers: {
      'csrf-token': csrf
    }
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    // productCard.closest('article').remove(); // doesn't work in IE
    const productArticle = productCard.closest('article');
    productArticle.parentNode.removeChild(productArticle);
    console.log(data.message)
  });
}

document.querySelectorAll('.card__actions > button').forEach(e => {
  e.addEventListener('click', deleteProduct);
});