/**
 * Handle submit
 */
export const handleSubmit = (event) => {
  event.preventDefault();

  const articleUrl = document.getElementById('url').value;
  document.querySelector('#url').classList.remove('url_error');

  TravelClient.showPreloader();
  TravelClient.getArticleAnalysis(articleUrl);
};
