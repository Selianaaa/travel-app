/**
 * Handle submit
 */
export const handleSubmit = (event) => {
  event.preventDefault();

  const articleUrl = document.getElementById('url').value;
  document.querySelector('#url').classList.remove('url_error');

  // if (!TravelClient.urlIsValid(articleUrl)) {
  //   document.querySelector('#url').classList.add('url_error');
  //   return;
  // }

  TravelClient.showPreloader();
  TravelClient.getArticleAnalysis(articleUrl);
};
